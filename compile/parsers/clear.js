module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.clear!==undefined)&&!this.ROOT.CONFIG.clear){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        r( /\/\/\:\:/gm,'::')
        
        r( /\/\*([\s\S]+?)\*\//gm, '' )
        r( /\/\/(.*)$/gm, '' )



        r( /let /gm, 'var ' )
        r( /;$/gm, '' )


        r( /\,[\n\ \t]*/gm, ',' )



        r( /^[\ \t]*/gm, '' )
        r( /[\ \t]*=[\ \t]*/gm, '=' )
        r( /^[\ \t]*/gm, '' )


        r( /\) \{/gm, '){' )
        r( /\} else \{/gm, '}else{' )
        r( /if \(/gm, 'if(' )


        r( /[\ \t]*=[\ \t]*/gm, '=' )



        

    },



    Cleanout(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.clear!==undefined)&&!this.ROOT.CONFIG.clear){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        //function cleanout(){
            var iii=0
            while(iii<32){
                r( /(export\ |\;$|^[\ \t]*?)/gm, '' )
                r( /(\ \ )/gm, ' ' )
                r( /(\ \,)/gm, ',' )
                r( /(\,\ )/gm, ',' )
                iii++
            }
       //// cleanout()

       

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.clear!==undefined)&&!this.ROOT.CONFIG.clear){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        //r( /:REAL8/gm,':QWORD')
        //r( /mov ([\w]+),rax/gm,'mov qword ptr $1,rax')

        /*r( /[\n\ \t]{8}/gm,'\n')
        r( /[\n\ \t]{6}/gm,'\n')
        r( /[\n\ \t]{4}/gm,'\n')
        r( /[\n\ \t]{2}/gm,'\n')*/






        //r( /\\\\/gm,'')    
        
        
        r(/(p[\w]+)\+([0-9]+[\w]+)/gm,'$1$2')


        
    },

   /* End(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.clear!==undefined)&&!this.ROOT.CONFIG.clear){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }







        r( /\\\\/gm,'')    
          
        
        
        
        //r(/(p[\w]+)\+([0-9]+[\w]+)/gm,'$1$2')


        
    }*/

})}