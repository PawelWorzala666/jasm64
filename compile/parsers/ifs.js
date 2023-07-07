module.exports = function(ROOT){return Object.assign(ROOT,{
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.ifs!==undefined)&&!this.ROOT.CONFIG.ifs){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        
        var _IFidx = 0
        var __IF=(oper,var1,var2)=>{
            var regexpr=new RegExp('if\\(([\\w]+)['+oper+']+([\\w]+)\\)(?<num>\\:[0-9]+)\\{([\\s\\S]+?)(\\k<num>)\\}else(?<num2>\\:[0-9]+)\\{([\\s\\S]+?)(\\k<num2>)\\}','gm')
            this.ROOT.source.replace( regexpr, match=>{
                _IFidx++
                this.ROOT.source=this.ROOT.source.replace( regexpr, 'mov rax, $1\nmov rbx, $2\ncmp rax, rbx\n'+var1+' .if'+_IFidx+'\n'+var2+' .else'+_IFidx+'\njmp .endif'+_IFidx+'\n.if'+_IFidx+':\n$4jmp .endif'+_IFidx+'\n.else'+_IFidx+':\n$7\n.endif'+_IFidx+':')
            })
            var regexpr=new RegExp('if\\(([\\w]+)['+oper+']+([\\w]+)\\)(?<num>\\:[0-9]+)\\{([\\s\\S]+?)(\\k<num>)\\}','gm')
            this.ROOT.source.replace( regexpr, match=>{
                _IFidx++
                this.ROOT.source=this.ROOT.source.replace( regexpr, 'mov rax, $1\nmov rbx, $2\ncmp rax, rbx\n'+var1+' .if'+_IFidx+'\njmp .endif'+_IFidx+'\n.if'+_IFidx+':\n$4\n.endif'+_IFidx+':')
            })
        }
        __IF('\\=\\=\\=','je','jne')
        __IF('\\=\\=','je','jne')
        __IF('\\<','jl','jnl')
        __IF('\\!\\=','jne','je')
        __IF('\\>','jg','jng')



        

    }

})}