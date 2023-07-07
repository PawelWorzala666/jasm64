
module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.maths!==undefined)&&!this.ROOT.CONFIG.maths){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        
        var parseMaths=(op,name)=>{
            ``
                    var tmp = ' '+this.ROOT.source
                    while(tmp != this.ROOT.source){
                        tmp = this.ROOT.source

                        r( /[\ \t]*(\-|\+|\/|\*|\=)[\ \t]*/gm, '$1' )

                        //r( /p([\w\[\]]+)/gm, match=>{
                        //    return match.replace(/\[|\]///gm,'')
                        //})
                        r( new RegExp('(.*)\\b([\\.\\w]+)(\\[[0-9]+\\])'+op+'([\\.\\w]+)(\\[[0-9]+\\])','gm'), 'LOCAL p$2$4 :REAL8\nMath.'+name+'($2[$3],$4[$5],p$2$4)\n$1p$2$4' )

                        r( new RegExp('(.*)\\b([\\.\\w]+)(\\[[0-9]+\\])'+op+'([\\.\\w]+)','gm'), 'LOCAL p$2$4 :REAL8\nMath.'+name+'($2[$3],$4,p$2$4)\n$1p$2$4' )

                        r( new RegExp('(.*)\\b([\\.\\w]+)'+op+'([\\.\\w]+)(\\[[0-9]+\\])','gm'), 'LOCAL p$2$3 :REAL8\nMath.'+name+'($2,$3[$4],p$2$3)\n$1p$2$3' )
            
                        r( new RegExp('(.*)\\b([\\.\\w]+)'+op+'([\\.\\w]+)','gm'), 'LOCAL p$2$3 :REAL8\nMath.'+name+'($2,$3,p$2$3)\n$1p$2$3' )
            

                        //r( /\(([\.\w\[\]]+)\)/gm, '$1' )
            
                        //r( /[\ \t]*(\-|\+|\/|\*|\=)[\ \t]*/gm, '$1' )
            
                    /* r( /\,([\s\S]+?)(\,|$)/gm, match=>{
                            return match.replace(/(\[|\])/gm,'')
                    } )*/
                    //r( /(LOCAL.*|Math.*)/gm, match=>{
                        //    return match.replace(/(\[|\])/gm,'')
                    // } )
                    /* r( /Math.*|p([\w\[\]]+)/gm, match=>{
                            return match.replace(/\[|\]/gm,'')
                        } )*/
                    }
            
                }
                var index = 0
                while(index<16){
                    parseMaths('\\*','pomnoz')
                    parseMaths('\\/','podziel')
                    parseMaths('\\+','dodaj')
                    parseMaths('\\-','odejmnij')
                    index++
                }


        

    }

})}