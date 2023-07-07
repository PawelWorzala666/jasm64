module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.macros!==undefined)&&!this.ROOT.CONFIG.macros){
                return
            }
        }



        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        
        
        
        r( /MACRO([\s\S]+?)ENDM/gm, match=>{
            match=match.replace( /^var ([\w]+) = (.*)/gm, 'LOCAL $1 :QWORD\nmov rax,$2\nmov $1,rax' )
            match=match.replace( /^var ([\w]+)/gm, 'LOCAL $1 :QWORD' )
            return match
        })







        

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.macros!==undefined)&&!this.ROOT.CONFIG.macros){
                return
            }
        }


        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        function makeFuncs(){
            r( /function[\ \t]*?([\w]+)\(\)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm, '\n.code\n$1 MACRO\n$3\nENDM\n.data\n')
            r( /function[\ \t]*?([\w]+)\(([\s\S]+?)\)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm, '\n.code\n$1 MACRO $2\n$4\nENDM\n.data\n')
        }
        makeFuncs()


        
        

    },


    Parse3(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.macros!==undefined)&&!this.ROOT.CONFIG.macros){
                return
            }
        }


        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        

        r( /(.*)MACRO([\s\S]+?)ENDM/gm, match=>{
            var DQS = []
            match=match.replace(/(Math_[a-aA-Z]+\ .*\,.*)/gm,mmm=>{
                return mmm.replace(/([\w]+)(\,|$)/gm,mm=>{
                    DQS.push(mm.replace(',','').trim())
                    return mm
                })
            })
            return DQS.join('\n')+'\n\n'+match
        })


        
        

    }


})}