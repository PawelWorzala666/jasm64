module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.exp!==undefined)&&!this.ROOT.CONFIG.exp){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        var GLOBS = []
        r( /^(.*)MACRO([\s\S]+?)ENDM/gm, match=>{
            var PP = []
            match=match.replace(/^Math(.*)$/gm,mmm=>{
                mmm=mmm.replace(/\ ([\w]+)/gm,mm=>{
                    var mnn = mm.trim()
                    if(!GLOBS.includes(mnn)){
                        PP.push(mnn)
                        GLOBS.push(mnn)
                    }
                    return mm
                })
                return mmm
            })
            match=match.replace(/^LOCAL (.*)$/gm,mmm=>{
                if(!GLOBS.includes(mmm)){
                    PP.push(mmm)
                    GLOBS.push(mmm)
                }
                return ''
            })
            PP=PP.map(P=>((P.replace('LOCAL ','').replace(/\:(.*)/gm,'dq ?')+' dq ?')).replace(/dq\ \?\ dq\ \?/,'dq ?').replace(/ptr\ dq\ \?/gm,'').replace(/qword\ dq\ \?/gm,''))
            return PP.join('\n')+'\n\n'+match
        })


        

    }

})}