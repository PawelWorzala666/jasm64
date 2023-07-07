module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.pointers!==undefined)&&!this.ROOT.CONFIG.pointers){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source=this.ROOT.source.replace(match,replace)
        }

        //



        var POINTERS={}
        var index = 1
        r( /STRUCT([\s\S]+?)ENDS/gm,match=>{
            return match.replace(/([\w]+) QWORD(.*)/gm,match=>{
                var name = match.split(' QWORD')[0].trim()
                if(!Object.keys(POINTERS).includes(name)){
                    POINTERS[name] = index*8
                    index++
                }
                return match
            })
        })
        Object.keys(POINTERS).map(name=>{
            r( new RegExp('_this\.'+name,'gm'),mmm=>{
                return mmm.replace('.'+name,'+'+POINTERS[name])
            })
        })





        

    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.pointers!==undefined)&&!this.ROOT.CONFIG.pointers){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source=this.ROOT.source.replace(match,replace)
        }


        //
        

        r( /^(qword\ ptr\ .*\+)$/gm,match=>{
            return match.split(' ')[2].replace('+','')+' dq ?'
        })


        r(/([\w]*)\+([0-9]*)([\w]*)\ dq\ \?/gm,'$1$2$3 dq ?')
        


        

        


    
        
        
        r(/qword\ ptr\ (.*)\+([0-9]+)\ dq\ \?/gm,'$1 dq ?')
        //r(/(.*)\\\\ dq\ \?/gm,'$1 dq ?')

        //r(/qword ptr ([\w]+)\\\\([0-9]+)([\w]+)\ dq\ \?/gm,'$1 dq ?')
        //r(/qword ptr ([\w]+)\\\\([0-9]+)\ dq\ \?/gm,'$1 dq ?')




        r(/^(.*)=(.*)$/gm,'mov rax,$2\nmov $1,rax')



        

    },

    Parse3(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.pointers!==undefined)&&!this.ROOT.CONFIG.pointers){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        //

            
        //r( /qword\ ptr\ rbx/gm,'rbx')


        
        //r( /qword\ ptr\ rbx/gm,'rbx')

        r( /\[([0-9]+)\]/gm,match=>{
            return '['+eval(match.replace(/\[|\]/gm,'')+'*8')+']'
        })

        r( /EOL/gm,'lf')

        r( /qword\ ptr/gm,'')

        console.log('this.ROOT.source A11 ',this.ROOT.source.length)

        this.BBSCode.source = this.ROOT.source

        this.BBSCode.Parse()

        this.ROOT.source = this.BBSCode.source

        console.log('this.ROOT.source AA ',this.ROOT.source.length)


        r( /^(Math)(.*)/gm,match=>{
            return match.replace(/qword\ ptr\ /gm,'')
        })

        //r( /\,([\w]+)\nmov rax,([\w]+)\nmov ([\w]+)\[([\w]+)\],rax/gm,',$1\nmov $3[$4],$1')

        r( /([\w]+)\[([0-9]+)\]/gm,'qword ptr $1[$2]')
        r( /qword ptr qword ptr/gm,'qword ptr')
        //r( /mov ([\w]+),/gm,'mov qword ptr $1,')
        r( /qword ptr (rax|rbx|rcx|rdx),/gm,'$1,')

        r( /\[\[/gm,'[')
        r( /\]\]/gm,']')

        r( /([\w]+)\[([0-9]+)\]([\w]+)/gm,'$1$2$34')



        this.BBSCode.source = this.ROOT.source

        this.BBSCode.Parse2()

        this.ROOT.source = this.BBSCode.source

        console.log('this.ROOT.source BB ',this.ROOT.source.length)
        
        r( /^Math_odejmnij\ dq(.*)/gm, '' )

        r( /pdq(-?[0-9]+\.?[0-9]+?)/gm, 'dq $1' )

        r( /\.data([\s\S]+?)\.code/gm, mmm=>{
            return mmm.replace(/^LOCAL(.*)/gm,'')
        } )

        


        

    }


})}