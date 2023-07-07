var fs = require('fs')

var source = fs.readFileSync('./match/test.js').toString()


var preffix = ''
var suffix = source
var index = 0

var MATHES = [
    ['a-z','qwertyuiopasdfghjklzxcvbnm'.split('')],
    ['A-Z','QWERTYUIOPASDFGHJKLZXCVBNM'.split('')],
    ['0-9','1234567890'.split('')],
    ['.',['.']],
    ['-',['-']],
]

var STACK = [
    ['match',['declare','[a-z]+','[0-9.-]+'],'declare',''],
    ['match',['function','*','end function'],'replace','']
]




var matched = 0
var SYSTEM = {}

var DATASETS = {}




var lastMatch = ''

SYSTEM.match = function(CALLS){

    lastMatch = ''

    let offset = index
    
    let count = 0

    
    for(let cll=0;cll<CALLS.length;cll++){

        var CALL = CALLS[cll]

        if(suffix[offset]==' '){
            lastMatch += suffix[offset]
            offset++
        }

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

                }//else{
                //    allows.push(CALL[prev])
                //}

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

                if( allows.includes(suffix[offset+prev]) ){
                    lastMatch += suffix[offset+prev]
                    matched = matched + 1
                }else{
                    break
                }
                prev = prev + 1

            }

        }else{

            for(let prev=0; prev<CALL.length;prev++){

                if( suffix[offset+prev] == CALL[prev] ){
                    lastMatch += suffix[offset+prev]
                    matched = matched + 1
                }else{
                    break
                }

            }

        }

        offset = offset + matched

        if(matched>0){
            matched=0
            count++
        }else{
            matched=0
            break
        }
        
        matched = 0
    }


    if(count==CALLS.length){
        index = offset
        offset = 0
        //char = ''
        matched = 0
    }

    return count==CALLS.length
    
}



SYSTEM.replace = function(CALLS){

    matched = 0
    preffix += CALLS
    //char = ''

    return true
}



SYSTEM.exec = function(CALLS){

    console.log('EXEC:::',CALLS)
    console.log('lastMatch:::',lastMatch)

    //char = ''
    
    return true

}


SYSTEM.declare = function(CALLS){

    var params = lastMatch.trim().split(' ')
    
    if(params.length>2){

        console.log('declare:::',CALLS)
        console.log('lastMatch:::',lastMatch)

        var name = params[1]
        var value = params[2]

        DATASETS[ name ]  =  value
        
        //char = ''

    }
    
    return true

}



        
while(index<suffix.length){

    //var char = suffix[index]

    for(var CALLEE of STACK){

        let success = true

        for(let POIDX=0;POIDX<CALLEE.length;POIDX+=2){

            if(success){
                success = SYSTEM[ CALLEE[POIDX] ]( CALLEE[POIDX+1] )
            }

        }

        //if(!success){
        //    break
       // }

    }

    preffix += (suffix[index]??'')

    index = index + 1

}


console.log('DATASETS:',DATASETS)

fs.writeFileSync('./match/test_m.js', preffix)