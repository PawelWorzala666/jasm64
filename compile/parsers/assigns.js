module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.assigns!==undefined)&&!this.ROOT.CONFIG.assigns){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        
        
        r( /([0-9]+\*[0-9]+\*[0-9]+\*[0-9]+)|([0-9]+\*[0-9]+\*[0-9]+)|([0-9]+\*[0-9]+)/gm, match=>{
            return eval(match)
        } )


        r( /\*([\w]+)/gm, 'addr $1' )

        r( /([\w\.]+)\+\+/gm, 'mov rax,1\nadd $1,rax' )


        


        r( /^var ([\w]+)=(\-?[0-9]+\.?[0-9]+?)$/gm, '$1 dq $2' )
        var PP=[]
        r( /^([\w]+) dq(.*)$/gm, match=>{
            PP.push(match)
            return ''
        } )
        this.ROOT.source = '\n.data\n'+PP.join('\n')+'\n.code\n'+'\n\n'+this.ROOT.source



        r( /^([\w]+)=(alloc\([\w]+\))/gm, 'mov $1,$2' )


        r( /^([\w\.]+)=([\w]+)\((.*)/gm, '$2($3\nmov $1,rax' )


        //


        r( /([\w]+)[\ ]*\*\=[\ ]*([\w]+)/gm, '$1 = $1 * $2' )
        r( /^(var|let|const)[\ ]*([\w]+)\=(.*)(\*|\/|\+)(.*)$/gm, 'var $1\n$1=$2' )
        //let ssqq11 = y0 * y0 + y1 * y1 + y2 * y2

        r( /var[\ ]*([\w]+)=([\w\.]+)\((.*)\)/gm, '$1 dq ?\n$1=$2($3)' )



        r( /^([\w]+)=([\w]+)\((.*)$/gm, '$2($3\nmov $1,rax' )

        r( /^([\w]+)\[([0-9]+)\]=(\-?[0-9\.]+)$/gm, 'mov rax,$3\nmov $1[$2],$3' )


        r( /var ([\w]+)=\[(.*)\]/gm, '$1 dq $2' )


        r( /^([\w]+)=alloc\((.*)$/gm, 'mov $1,alloc($2' )


        r( /^([\w\.]+)=([\w]+)\.(.*)/gm, '$2.$3\nmov $1,rax' )

        r( /^([\w]+)=(.*)\(\)/gm, '$2()\nmov $1,rax' )
        r( /^([\w]+)=([\w]+)\.(.*)/gm, '$2.$3\nmov $1,rax' )

        r( /^([\w]+)\[([0-9]+)\]=([\w]+)\.(.*)/gm, '$3.$4\nmov $1[$2],rax' )
        r( /^([\w]+)\[([0-9]+)\]=([\w]+)\((.*)$/gm, '$3($4\nmov $1[$2],rax' )

        r( /var ([\w]+)=([\w]+)\[([0-9]+)\]$/gm, '$1 dq ?\nmov rax,$2[$3]\nmov $1,rax' )

        r( /^([\w]+)=([\w]+)\[([0-9]+)\]$/gm, 'mov rax,$2[$3]\nmov $1,rax' )

        r( /^([\w]+)\[([0-9]+)\]=([\w]+)$/gm, 'mov rax,$3\nmov $1[$2],rax' )


        r( /^([\w]+)\[([0-9]+)\]=([\w]+)\[([0-9]+)\]$/gm, 'mov rax,$3[$4]\nmov $1[$2],rax' )



        r( /^([\w]+)\[([0-9]+)\]=([\w]+)\[([0-9]+)\]$/gm, 'mov rax,$3[$4]\nmov $1[$2],rax' )

        r( /^([\w]+)\[([0-9]+)\]=([\w]+)$/gm, 'mov rax,$3\nmov $1[$2],rax' )


        r(/([\w\.]+) = ([\w]+)\((.*)/gm,'$2($3\nmov $1,rax')
        //r(/return (.*)/gm,'mov rax,$1')



        

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.assigns!==undefined)&&!this.ROOT.CONFIG.assigns){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }




        r( /var[\ \t]*?(.*)\=\[(.*)\]/gm, '$1 dd $2' )

        r( /const\ [\ \t]*?([\w\_]+)\=(.*)/gm, '$1 equ $2' )
    
        r( /let\ /gm, 'var ' )
    
    
        //r( /[\ \t\n]*\,[\ \t\n]*/gm, ',' )
        r( /var[\ \t]*?(.*)/gm, match=>{
            if((match.indexOf('(')>-1)||(match.indexOf('[')>-1)){
                return match
            }
            return match.replace(/\,/gm,'\nvar ')
        } )
    
      
        r( /var[\ \t]*?(.*)\=\'(.*)\'/gm, '$1 db \'$2\',0' )
    
        r( /var[\ \t]*?([\w]+)$/gm, '$1 dq ?' )
        r( /var[\ \t]*?(.*)\=(.*)/gm, '$1 dq $2' )




        

    }

})}