module.exports = function(ROOT){return Object.assign(ROOT,{
    
    
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.threads!==undefined)&&!this.ROOT.CONFIG.threads){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }


        //THREADS

        r(/async\ function([\s\S]+?)\}/gm,match=>{
            var name = match.split('function')[1].split(')')[0].replace('(','').trim()
            this.ROOT.THREADS.push(name)
            match=match.replace(new RegExp('async\\ function\\ ('+name+')\\((.*)\\)',''),'$1 PROC $2')
            match=match.replace('}','\nret\n'+name+' ENDP')
            match=match.replace(/PROC(.*)$/gm,'PROC')
            return '\n.code\n'+match+'\n.data\n'
        })

        console.log('THREADS',this.ROOT.THREADS)

        this.ROOT.THREADS.map(THREAD=>{
            r(new RegExp('^(.*)'+THREAD+'\\(\\)','gm'),mmm=>{
                if(mmm.indexOf('await')>-1){
                    return 'mov rax, rvcall('+mmm.replace('await','').replace(/\(|\)/gm,'')+')'
                }
                return `mov `+THREAD+`HANDLE, rv(CreateThread,0,0,ADDR `+THREAD+`,ADDR `+THREAD+`ID,0,0)`
            })
        })
        
        

    },

    GetDATA(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.threads!==undefined)&&!this.ROOT.CONFIG.threads){
                return ''
            }
        }


        var DATA = ''

        this.ROOT.THREADS.map(THREAD=>{
            DATA+=THREAD+'ID dq ?\n'
            DATA+=THREAD+'HANDLE dq ?\n'
        })

        return DATA

    }

})}