module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse1(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.fixes!==undefined)&&!this.ROOT.CONFIG.fixes){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        
        

        r( /conout\((.*)\)/gm,'conout $1')
        r( /EOL/gm,'lf')
    
        r( /this/gm,'_this')
    
        r( /rcall(.*)/gm,match=>{
            return match.replace(/\,/gm,',qword ptr ')
        })
        //r( /\'/gm,'"')
    




        

    },


})}