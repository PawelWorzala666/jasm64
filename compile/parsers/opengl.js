module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }



        var GLF = []
        r(/impGL\ ([\w]+)$/gm,match=>{
            //match.replace(/GLIMPORT\ /gm,'').replace(/([\w]+)/gm,name=>{
                var name = match.split('impGL')[1].trim()
                GLF.push(name)
            //})
            return 'var '+name
        })
        r(/GLIMPORTFUNC/gm,match=>{
            return GLF.map(nn=>'LoadGLFunc(\''+nn+'\','+nn+')').join('\n')
        })








        


    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.opengl!==undefined)&&!this.ROOT.CONFIG.opengl){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }



        r( /gl\.(.*)\(\)/gm, 'invoke gl$1' )
        r( /gl\.([\w]+)\((.*)\)/gm, 'invoke gl$1,$2' )
        r( /gl\./gm, 'GL_' )
        r( /GL_p/gm, 'GL_' )
    
        r( /out/gm, 'oout' )





        


    }

})}