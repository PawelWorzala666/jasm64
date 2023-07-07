module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.proc!==undefined)&&!this.ROOT.CONFIG.proc){
                return
            }
        }




        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }






        //function makePROCS(){
            r( /\:\:proc([\s\S]+?)\:\:endproc/gm, match=>{
                match=match.replace( /function[\ \t]*?([\w]+)\(\)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm, '.code\n$1 PROC\n$3\nret\n$1 ENDP\n.data\n')
                match=match.replace( /function[\ \t]*?([\w]+)\(([\s\S]+?)\)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm, '.code\n$1 PROC $2\n$4\nret\n$1 ENDP\n.data\n')
                match.replace(/(.*)PROC/gm,match=>{
                    this.ROOT.PROCS.push(match.split('PROC')[0].trim())
                    return match
                })
                return match.replace(/(\:\:proc|\:\:endproc)/gm,'')
            })
        //}
        //makePROCS()





        

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.proc!==undefined)&&!this.ROOT.CONFIG.proc){
                return
            }
        }




        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        r(/rcall\ c([\w]+)\_([\w]+)\,(.*)/gm,match=>{
            match=match.replace(/\,([\w]+)/gm,',qword ptr $1')
            return match
        })

    }


})}