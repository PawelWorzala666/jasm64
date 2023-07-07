module.exports = function(ROOT){return Object.assign(ROOT,{
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.blocks!==undefined)&&!this.ROOT.CONFIG.blocks){
                return
            }
        }

        //this.ROOT.source = ''
        var iteration = 1
        var source = ''

        for(let i=0;i<this.ROOT.source.length;i++){

            var char = this.ROOT.source[i]

            if(char=='{'){
                source+=':'+iteration+'{'
                iteration++
            }else if(char=='}'){
                iteration--
                source+=':'+(iteration)+'}'
            }else{
                source+=char
            }

        }

        let uniuque = 1024
        let index = 1
        while(1024 > index){
            tmp = ' '+source
            while(tmp != source){
                tmp = source
                source = source
                    .replace(':'+index+'{',':'+uniuque+'{')
                    .replace(':'+index+'}',':'+uniuque+'}')
                if((tmp != source)){
                    uniuque++
                }
            }
            index++
        }

        this.ROOT.source = source

    }

})}