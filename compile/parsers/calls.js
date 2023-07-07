const fs = require('fs')

const INVOKERS = JSON.parse(fs.readFileSync('./compile/invokers.js').toString())


module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.calls!==undefined)&&!this.ROOT.CONFIG.calls){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        //console.log('INVOKERS',INVOKERS)
        INVOKERS.map(invoke=>{
            r(new RegExp('^[\ \t]*('+invoke+')\\((.*)\\)','gm'),'invoke $1, $2')
        })
        

        //r(/fs/gm,'_fs')

        r(/^[\ \t]*([\w]+)\.([\w]+)/gm,'$1_$2')

        
        r(/^(.*)MACRO/gm,mmm=>{
            this.ROOT.MACROS.push(mmm.replace('MACRO','').trim())
            return mmm
        })
        this.ROOT.MACROS.map(MAC=>{
            r(new RegExp('('+MAC+')\\((.*)\\)','gm'),'$1 $2')
        })

        //r(/\,ENDM/gm,'\nENDM')

        //r(/fs(\.|\ |\,)/gm,'_fs$1')



        


        // r(/^[\ \t]*/gm,'')

        // r(/(.*)(dd|dq|db|rq|rd|DWORD|QWORD|REAL8|REAL4|label)/gm,'    $1$2')

        //r(/^(.*)MACRO([\s\S]+?)ENDM/gm,match=>{
            //var idx=0
        //  return (match.split('\n').map(line=>'    '+line).join('\n'))
        //})
        


        //r(/\:[0-9]+(\{|\})/gm,'$1')


        this.ROOT.PROCS.map(PROC=>{
            r(new RegExp('('+PROC+')\\((.*)\\)','gm'),'rcall $1,$2')
            r(new RegExp('('+PROC+')\\(\\)','gm'),'rcall $1')
        })

        


        

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.calls!==undefined)&&!this.ROOT.CONFIG.calls){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }





        

    }

})}