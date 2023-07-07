module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.lines!==undefined)&&!this.ROOT.CONFIG.lines){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        var lines = this.ROOT.source.split('\n')

        var index=0
        lines = lines.map(line=>{
            return ';'+(index++)+'\n'+line
        })

        this.ROOT.source = lines.join('\n')

        /*var index=0
        r(/$/gm,match=>{
            return (match+'           ;'+(index++))
        })*/




     
        




        

    }

})}