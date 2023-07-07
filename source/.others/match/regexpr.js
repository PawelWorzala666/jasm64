


var MATHES = [
    ['a-z','qwertyuiopasdfghjklzxcvbnm'.split('')],
    ['A-Z','QWERTYUIOPASDFGHJKLZXCVBNM'.split('')],
    ['0-9','1234567890'.split('')],
    ['.',['.']],
    ['-',['-']],
]



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

SYSTEM.match = function(suffix,index){

    lastMatch = ''

    let offset = index
    
    let count = 0

    //for(let cll=0;cll<CALLS.length;cll++){
        console.log('CALL',suffix[index])

        var CALL = suffix[index]

        var res = matchToBuff(suffix, offset, CALL)
        if(count&&(CALL=='*')){
            var res2 = 0
            let idx = 1
            lastMatch += suffix[offset]+' '
            while(res2==0){
                res2 = matchToBuff(suffix, offset+idx, suffix[index+1])
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

    //}


    if(count>=1){//CALLS.length){
        return 1
    }

    return 0
    
}