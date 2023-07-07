var fs = require('fs')

var sourceO = fs.readFileSync('./match/test.pz').toString()


//var preffix = ''

var source =[]
var tmp = sourceO.replace(/\r\n/gm,' ').split(' ')
for(let t of tmp){
    if(t.trim().length>0){
        source.push(t)
    }
}

//var index = 0

//console.log(source)

var MATHES = [
    ['a-z','qwertyuiopasdfghjklzxcvbnm'.split('')],
    ['A-Z','QWERTYUIOPASDFGHJKLZXCVBNM'.split('')],
    ['0-9','1234567890'.split('')],
    ['.',['.']],
    ['-',['-']],
]

var STACK = [
    ['match',['declare','[a-z]+','[0-9.-]+'],'declare',''],
    ['match',['function','*','endfunction'],'function',''],
    ['match',['log','[a-z]+'],'log',''],
]




//var matched = 0
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
                //lastMatch += suffix[offset]+' '
                count++
            }

        }else{

            if( suffix[offset] == CALL ){
                //lastMatch += suffix[offset]+' '
                count++
            }

        }

        //offset = offset + 1

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
                //console.log('rs2', suffix[offset+idx])
                idx++
                //offset = offset + res
                res++
                //break
                //count++
                lastMatch += suffix[offset+idx-1]+' '
            }
            if(res>1){
                offset = offset + res
                index = offset
    //console.log('lastMatch:::',lastMatch)
                return 1
            }
        }

        if(res>0){
            lastMatch += suffix[offset]+' '
            offset = offset + res
            count++
        }

    }


    if(count==CALLS.length){
        index = offset - 1
    }

    return count==CALLS.length
    
}


/*
SYSTEM.replace = function(CALLS){

    matched = 0
    preffix += CALLS

    return true
}
*/


SYSTEM.call = function(CALLS){

    //console.log('call:::',CALLS)
    //console.log('lastMatch:::',lastMatch)

    var params = lastMatch.split(' ')
    //console.log('params',params)

    //SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] )
    var FUNCS = FUNCTIONS[ params[1] ]

    console.log('FUNCS',FUNCS)

    executeStack(FUNCS)


    
    return true

}

function executeStack(code){

    
    let index = 0
    while(index<code.length){

        for(var CALLEE of STACK){

            let success = true

            for(let POIDX=0;POIDX<CALLEE.length;POIDX+=2){

                if(success){
                if(CALLEE[POIDX]=='match'){
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] , code , index )
                }else{
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] )
                }
            }

            }

        }

        //preffix += suffix[index2]+' '

        index = index + 1

    }

}


SYSTEM.declare = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    if(params.length>2){

        //console.log('declare:::',CALLS)
        //console.log('lastMatch:::',lastMatch)

        var name = params[1]
        var value = params[2]

        DATASETS[ name ]  =  value

    }
    
    return true

}

SYSTEM.function = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    if(params.length>2){

        //console.log('declare:::',CALLS)
        //console.log('lastMatch:::',lastMatch)

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
    
    //if(params.length>2){

        console.log('log:::',CALLS)
        console.log('lastMatch:::',lastMatch)

        //var name = params[1]
        var value = params
            .slice(1,params.length)
            .map(p=>getValue(p)).join(' ')

        //DATASETS[ name ]  =  value
        console.log('CALLED:log ',value)

    //}
    
    return true

}



/*
let index = 0
while(index<source.length){

    for(var CALLEE of STACK){

        let success = true

        for(let POIDX=0;POIDX<CALLEE.length;POIDX+=2){

            if(success){
                if(CALLEE[POIDX]=='match'){
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] ,source , index )
                }else{
                    success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] )
                }
            }

        }

    }

    preffix += source[index]+' '

    index = index + 1

}*/
executeStack(source)


console.log('DATASETS:',DATASETS)
console.log('FUNCTIONS:',FUNCTIONS)

//fs.writeFileSync('./match/test_m.js', preffix)