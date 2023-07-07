module.exports = function(ROOT){return Object.assign(ROOT,{
    
    

    scrapUniqueBBS(){

        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        
        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }
        
        //

        var BBS2 = []
        this.ROOT.BBS.map(BB=>{
            if(!BBS2.includes(BB)){
                BBS2.push(BB)
            }
        })
        this.ROOT.BBS = BBS2

        


    },
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        //
            
        var CLN = []
        this.ROOT.BBS=this.ROOT.BBS.join('\n').replace(/qword\ ptr\ ([\w]+)\[([0-9]+)\] dq ?/gm,mmmm=>{
            CLN.push(mmmm.split('[')[0].replace(/qword\ ptr\ /gm,''))
            return mmmm
        }).replace(/qword\ ptr\ ([\w]+)\[([0-9]+)\]\ dq\ \?/gm,'$1 dq ?').split('\n')
        CLN.map(CL=>{
            r(new RegExp('qword\\ ptr\\ '+CL+'\\[[0-9]+\\]','gm'),'qword ptr '+CL)
        })
        

        r( /qword\ ptr\ pp([\w]+)\[([0-9]+)\]/gm,'qword ptr pp$1')


        
        this.scrapUniqueBBS()


        r( /p([\w]+)\[([0-9]+)\]([\w]+)/gm,match=>{
            var name=match.replace(/\[|\]/gm,'')
            if(!this.ROOT.BBS.includes(name+' dq ?')){
                this.ROOT.BBS.push(name+' dq ?')
            }
            return name
        })
        this.ROOT.BBS=this.ROOT.BBS.join('\n').replace( /p([\w]+)\[([0-9]+)\]([\w]+)/gm,match=>{
            return match.replace(/\[|\]/gm,'')
        }).replace( /qword\ ptr\ ([\w]+)\ dq\ \?/gm,'$1 dq ?').split('\n')
        
        this.scrapUniqueBBS()



        

    },


    cleanRedefinitions(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        //

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        this.ROOT.BBS=this.ROOT.BBS.join('\n')
        r( /^(.*)\ dq\ (.*)$/gm,match=>{
            var name = match.split('dq')[0].trim()
            //console.log('rest...',name)
            this.ROOT.BBS=this.ROOT.BBS.replace(new RegExp('('+name+'\\ dq.*)','gm'),'')
            return match
        })
        this.ROOT.BBS=this.ROOT.BBS.replace( /^([\w]+)$/gm,'$1 dq ?')
        this.ROOT.BBS=this.ROOT.BBS.replace( /^([\w]+)\.([\w]+)\ dq\ (.*)$/gm,'')
        var NAMES = []
        this.ROOT.BBS=this.ROOT.BBS.replace( /^(.*)\ dq\ (.*)$/gm,mmm=>{
            var name = mmm.split('dq')[0].trim()
            if(!NAMES.includes(name)){
                NAMES.push(name)
            }
            return ''
        })
        this.ROOT.BBS=NAMES.map(nn=>nn+' dq ?')

        
    },

    Parse2(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        //



        this.ROOT.BBS=this.ROOT.BBS.join('\n').replace( /([\w]+)\[([0-9]+)\]([\w]+)/gm,'$1$2$34').replace( /qword\ ptr\ ([\w]+)\ dq\ \?/gm,'$1 dq ?').split('\n')

        r( /^(Math\_[a-zA-Z]+)\ ([\w]+\[[0-9]+\])\,(.*)/gm,match=>{
            match= match.replace(/([\w]+)/gm,mmm=>{
                if(!this.ROOT.BBS.includes(mmm+' dq ?')){
                    this.ROOT.BBS.push(mmm+' dq ?')
                }
                return mmm
            })
            return match
        })

        this.scrapUniqueBBS()

        this.ROOT.BBS=this.ROOT.BBS.join('\n').replace(/^([0-9]+)\ dq\ \?/gm,'').replace(/^(qword|ptr|Math_.*)\ dq\ \?/gm,'').split('\n')


        r( /pp([\w]+)\[([0-9]+)\]/gm,'pp$1')


        
        this.cleanRedefinitions()





        

    },

    Parse3(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        //


        this.ROOT.BBS=this.ROOT.BBS.join('\n')
        this.ROOT.BBS=this.ROOT.BBS.replace(/([\w]+)\?/gm,'$1 dq ?')
        this.ROOT.BBS=this.ROOT.BBS.replace(/^\?$/gm,'')
        this.ROOT.BBS=this.ROOT.BBS.split('\n')
        
        this.cleanRedefinitions()


        

    },

    
    Parse4(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.bbs!==undefined)&&!this.ROOT.CONFIG.bbs){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        //

        /*
            r( /MACRO([\s\S]+?)ENDM/gm, match=>{
                match=match.replace( /^(.*)\ (dq)\ \?/gm, mmm=>{
                    var name = mmm.split('dq')[0].trim()
                    if(ROOT.GDEFS.includes(name)){
                        ROOT.GDEFS.push(name)
                    }
                    return mmm
                } )
                //match=match.replace( /^var ([\w]+)/gm, 'LOCAL $1 :QWORD' )
                return match
            })

        */



        r(/_this\+/gm,'qword ptr _this+')
        r(/MACRO\ qword\ ptr/gm,'MACRO')


        

    }

})}