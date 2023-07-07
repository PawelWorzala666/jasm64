

var MATHES = [
    ['a-z','qwertyuiopasdfghjklzxcvbnm'.split('')],
    ['A-Z','QWERTYUIOPASDFGHJKLZXCVBNM'.split('')],
    ['0-9','1234567890'.split('')],
    ['.',['.']],
    ['-',['-']],
]

var STACK = [
    ['match',['declare','[a-z]+','[0-9.-]+'],'declare',''],
    ['match',['function','*','endf'],'function',''],
    ['match',['log','[a-z]+'],'log',''],

    ['match',['dodaj','[a-z]+','[a-z]+','[a-z]+'],'calc',''],
    ['match',['odejmnij','[a-z]+','[a-z]+','[a-z]+'],'calc',''],
    ['match',['podziel','[a-z]+','[a-z]+','[a-z]+'],'calc',''],
    ['match',['pomnoz','[a-z]+','[a-z]+','[a-z]+'],'calc',''],

    ['match',['if','*','endif'],'if',''],
]



var SYSTEM = {}

var DATASETS = {}
var FUNCTIONS = {}
//var IFS = {}




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
        //console.log(lastMatch,idx , suffix[index+idx])
                //index = index + idx
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
        //index = offset //- 1
        return 1
    }

    return 0
    
}




SYSTEM.call = function(CALLS){

    var params = lastMatch.split(' ')

    var FUNCS = FUNCTIONS[ params[1] ]

    //console.log('FUNCS',FUNCS)

    executeStack(FUNCS)
    
    return true

}

function executeStack(code){
    
    let index = 0
    while(index<code.length){

        for(var CALLEE of STACK){

            let success = 1

            for(let POIDX=0;POIDX<CALLEE.length;POIDX+=2){

                if(success>0){
                if(CALLEE[POIDX]=='match'){
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] , code , index )
                    index = index + success
                }else{
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] )
                }
            }

            }

        }

        index = index + 1

    }

}


SYSTEM.declare = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    if(params.length>2){

        var name = params[1]
        var value = params[2]

        DATASETS[ name ]  =  value

    }
    
    return true

}

SYSTEM.function = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    if(params.length>2){

        var name = params[1]
        var value = params.slice(2,params.length-1)

        FUNCTIONS[ name ]  =  value

        STACK.push(['match',['call', name],'call',''])

    }
    
    return true

}

function getValue(name){
    return DATASETS[ name ]
}

SYSTEM.log = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    //console.log('log:::',CALLS)
    //console.log('lastMatch:::',lastMatch)

    var value = params
        .slice(1,params.length)
        .map(p=>getValue(p)).join(' ')

    console.log('log: ',value)
    
    return true

}

function setValue(name,value){
    DATASETS[ name ] = value
}



SYSTEM.calc = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    //console.log('log:::',params)
    ///console.log('lastMatch:::',lastMatch)

    var num1 = getValue(params[1])
    var num2 = getValue(params[2])

    if(params[0]=='dodaj'){
        var wynik = parseFloat(num1) + parseFloat(num2)
    }
    if(params[0]=='odejmnij'){
        var wynik = parseFloat(num1) - parseFloat(num2)
    }
    if(params[0]=='pomnoz'){
        var wynik = parseFloat(num1) * parseFloat(num2)
    }
    if(params[0]=='podziel'){
        var wynik = parseFloat(num1) / parseFloat(num2)
    }

    setValue(params[3], wynik)
    
    return true

}

SYSTEM.if = function(CALLS){

    var params = lastMatch.trim().split(' ')

    var left = params[1]
    var war = params[2]
    var right = params[3]

    var body = params.slice(4,params.length-1)

    var res = false
    if(war=='<'){
        if(left<right){
            res = true
        }
    }

    if(res){
        executeStack(body)
    }

    //console.log(body)
    
    /*if(params.length>2){

        var name = params[1]
        var value = params.slice(2,params.length-1)

        FUNCTIONS[ name ]  =  value

        STACK.push(['match',['call', name],'call',''])

    }*/
    
    return true

}










var fs = require('fs')

var sourceO = fs.readFileSync('./match/test.pz').toString()

var source =[]
var tmp = sourceO.replace(/\r\n/gm,' ').split(' ')
for(let t of tmp){
    if(t.trim().length>0){
        source.push(t)
    }
}

executeStack(source)


//console.log('DATASETS:',DATASETS)
//console.log('FUNCTIONS:',FUNCTIONS)