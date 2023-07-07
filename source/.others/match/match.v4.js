

var MATHES = [
    ['a-z','qwertyuiopasdfghjklzxcvbnm'.split('')],
    ['A-Z','QWERTYUIOPASDFGHJKLZXCVBNM'.split('')],
    ['0-9','1234567890'.split('')],
    ['.',['.']],
    ['-',['-']],
]

var STACK = [
    ['match',['declare'],'declare',''],
    ['match',['func'],'function',''],
    ['match',['log'],'log',''],

    ['match',['dodaj'],'calc',''],
    ['match',['odejmnij'],'calc',''],
    ['match',['podziel'],'calc',''],
    ['match',['pomnoz'],'calc',''],

    ['match',['if'],'if',''],
]



var SYSTEM = {}

var DATASETS = {}
var FUNCTIONS = {}




function matchToBuff(suffix,offset,CALL){

    if(!suffix[offset]){
        return 0
    }

    let count = 0 

    if( CALL[0]== '[' ){

        var openSPEC = 0
        var allows = []
        var o0penEE = 0

        for(let prev=0; prev<CALL.length;prev++){

            if( CALL[prev] == '[' ){
                o0penEE = 1
            }

            if( o0penEE ){

                for(var MMM of MATHES){

                    let ccnt = 0
                    for(let inn=0;inn<MMM[0].length;inn++){

                        if(CALL[prev+inn] == MMM[0][inn] ){
                            ccnt = ccnt + 1
                        }
                    }

                    if(ccnt==MMM[0].length){
                        allows.push(...MMM[1])
                    }

                }

            }

            if(CALL[prev] == ']'){
                openSPEC = 1
                o0penEE = 0
            }
            if((openSPEC==1)&&(CALL[prev] == '+')){
                openSPEC = 0
            }

        }
    
        let prev = 0

        while( true && (allows.length) ) {

            if( ! allows.includes(suffix[offset][prev]) ){
                break
            }
            prev = prev + 1

        }

        if(prev>0){
            count++
        }

    }else{

        if( suffix[offset] == CALL ){
            count++
        }

    }

    return count

}





var lastMatch = ''

SYSTEM.match = function(CALLS,suffix,index){

    lastMatch = ''

    let offset = index
    
    let count = 0

    for(let cll=0;cll<CALLS.length;cll++){

        var CALL = CALLS[cll]

        var res = matchToBuff(suffix, offset, CALL)
        if(count&&(CALL=='*')){
            var res2 = 0
            let idx = 1
            lastMatch += suffix[offset]+' '
            while(res2==0){
                res2 = matchToBuff(suffix, offset+idx, CALLS[cll+1])
                idx++
                res++
                lastMatch += suffix[offset+idx-1]+' '
            }
            if(idx>1){
                offset = offset + idx
                return idx
            }
        }

        if(res>0){
            lastMatch += suffix[offset]+' '
            offset = offset + res
            count++
        }

    }


    if(count>=CALLS.length){
        return 1
    }

    return 0
    
}




SYSTEM.call = function(CALLS){

    var params = lastMatch.split(' ')

    var FUNCS = FUNCTIONS[ params[1] ]

    executeStack(FUNCS)
    
    return 1

}

function executeStack(code){
    
    let index = 0
    while(index<code.length){

        for(var CALLEE of STACK){

            let success = 1

            for(let POIDX=0;POIDX<CALLEE.length;POIDX+=2){

                if(success>0){

                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] , code , index )

                }

            }

        }

        index = index + 1

    }

}


SYSTEM.declare = function(CALLS,code,index){

    var name = code[index+1]
    var value = code[index+2]

    DATASETS[ name ]  =  value
    
    return 1

}

SYSTEM.function = function(CALLS,code,index){

    var name = code[index]

    let value = []
    let idx = 1
    while(code[index+idx]!='endf'){
        value.push(code[index+idx])
        idx++
    }

    FUNCTIONS[ name ]  =  value

    STACK.push(['match',['call', name],'call',''])

    return 1

}

function getValue(name){
    if(('1234567890'.split('')).includes(name[0].toString())){
        return name
    }
    if(name[0]=='\''){
        return name.slice(1,name.length-2)
    }
    return DATASETS[ name ]
}

SYSTEM.log = function(CALLS,code,index){

    var length = parseInt(code[index+1])

    var result = []
    for(let i=0;i<length;i++){
        result.push(getValue(code[index+2+i]))
    }
    result = result.join(' ')

    console.log(result)
    
    return 1

}

function setValue(name,value){
    DATASETS[ name ] = value
}



SYSTEM.calc = function(CALLS,code,index){

    var opration = code[index]

    var num1 = getValue(code[index+1])
    var num2 = getValue(code[index+2])
    var ret = code[index+3]

    if(opration=='dodaj'){
        var wynik = parseFloat(num1) + parseFloat(num2)
    }
    if(opration=='odejmnij'){
        var wynik = parseFloat(num1) - parseFloat(num2)
    }
    if(opration=='pomnoz'){
        var wynik = parseFloat(num1) * parseFloat(num2)
    }
    if(opration=='podziel'){
        var wynik = parseFloat(num1) / parseFloat(num2)
    }

    setValue(ret, wynik)
    
    return 1

}

SYSTEM.if = function(CALLS,code,index){

    var left = code[index]
    var war = code[index+1]
    var right = code[index+2]

    let value = []
    let idx = 3
    while(code[index+idx]!='endif'){
        value.push(code[index+idx])
        idx++
    }

    var res = false
    if(war=='<'){
        if(left<right){
            res = true
        }
    }
    if(war=='>'){
        if(left>right){
            res = true
        }
    }
    if(war=='=='){
        if(left==right){
            res = true
        }
    }
    if(war=='!='){
        if(left!=right){
            res = true
        }
    }
    if(war=='<>'){
        if(left!=right){
            res = true
        }
    }

    if(res){
        executeStack(value)
    }
    
    return idx-3

}










var fs = require('fs')

var sourceO = fs.readFileSync('./match/test.pz').toString()

var source =[]
let lastWord = ''
var tmp = sourceO.replace(/\r\n/gm,' ')
var brek = true
for(let i=0;i<tmp.length;i++){
    if(tmp[i]=='\''){
        brek = !brek
    }
    if((tmp[i]==' ')&&brek){
        if(lastWord.length){
            source.push(lastWord)
        }
        lastWord = ''
    }else{
        lastWord += tmp[i]
    }
}
//console.log(source)

executeStack(source)


//console.log('DATASETS:',DATASETS)
//console.log('FUNCTIONS:',FUNCTIONS)