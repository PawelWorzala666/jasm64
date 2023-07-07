class RSSFrame{
    constructor(config){
        if(config){
            this.pane1 = config.pane1??GetDefaultGUIConfig()
            this.pane2 = config.pane2??GetDefaultGUIConfig()
        }
        //this.config.pane1,
        //this.config.pane2,
        //this.config.half
        this.config = config
    }
    Create(parent,orien,baseHalf){

        var pane1Cfg = this.config?this.config.pane1:undefined
        var pane2Cfg = this.config?this.config.pane2:undefined
        var baseHalf = this.config?this.config.half:50

        this.orient=orien??'left'

        //this.horizontal = horizon

        if(!parent){
            return
        }



        let rssfrme = document.createElement('div')
        rssfrme.classList.add('rssfrme')
        if(parent){
            parent.append(rssfrme)
        }
        this.htmlPane1 = document.createElement('div')
        this.pane1=this.htmlPane1
        this.htmlPane1.classList.add('pane')
        this.htmlPane1.classList.add('pane1')
       // if(this.pane1){
//this.htmlPane1=this.htmlPane1
         //   this.htmlPane1.pane=this.pane1
       // }
        //createxmmfrme(pane1)
        let slide = document.createElement('div')
        slide.classList.add('slide')
        this.htmlPane2 = document.createElement('div')
        this.pane2=this.htmlPane2
        this.htmlPane2.classList.add('pane')
        this.htmlPane2.classList.add('pane2')
      //  if(this.pane2){
        //    this.htmlPane2=this.htmlPane2
       //     this.htmlPane2.pane=this.pane2
      //  }
        //createxmmfrme(pane2)

        //parent.pane1=pane1
        //parent.pane2=pane2
        
        rssfrme.append(this.htmlPane1)
        rssfrme.append(slide)
        rssfrme.append(this.htmlPane2)




        var drawONLT = (left,top)=>{
            var ttoo = 1.35*(100.0/rssfrme.clientHeight)
            var wwoo = 1.35*(100.0/rssfrme.clientWidth)
            if(this.orient=='up'){
                //let top = (event.pageY/window.innerHeight)*100
                //top+=moveY
                slide.style='top:'+(top-ttoo)+'%;height:'+(ttoo*2)+'%;width:100%;left:0%;'
                slide.classList.add('up')
                slide.classList.remove('left')
                //let height=top
                this.htmlPane1.style='top:0%;height:'+(top-ttoo)+'%;'
                //let height1=100-height
                this.htmlPane2.style='top:'+(top+ttoo)+'%;bottom:0%;height:'+(100-(top+ttoo))+'%;'

                this.half = top
            }else{
                //let left = (event.pageX/window.innerWidth)*100
                //left+=moveX
                slide.style='left:'+(left-wwoo)+'%;width:'+(wwoo*2)+'%;height:100%;top:0%;'
                slide.classList.add('left')
                slide.classList.remove('up')
                //let width=left
                this.htmlPane1.style='left:0%;width:'+(left-wwoo)+'%;'
                //let width1=100-width
                this.htmlPane2.style='top:0%;left:'+(left+wwoo)+'%;right:0%;width:'+(100-(left+wwoo))+'%;'

                this.half = left
            }
        }
        if(this.orient=='left'){
            rssfrme.classList.add('horizontal')
            drawONLT(0,50)
        }

        /*<div id="rssfrme" class="rssfrme">
            <div class="pane pane1"></div>
            <div class="slide"></div>
            <div class="pane pane2"></div>
        </div>*/


        //let slide = document.querySelector('.slide')
        //let pane1 = document.querySelector('.pane1')
        //let pane2 = document.querySelector('.pane2')

        let drag
        slide.addEventListener('mouseup',event=>{
            drag=false
        })
        slide.addEventListener('mousedown',event=>{
            drag=true
        })
        slide.addEventListener('mouseleave',event=>{
            drag=false
        })


        slide.addEventListener('mousemove',e=>{
                if(drag==true){

                    let rect = rssfrme.getBoundingClientRect()
                    let x = e.pageX - rect.left
                    let y = e.pageY - rect.top
                    let left = (x/rssfrme.clientWidth)*100
                    let top = (y/rssfrme.clientHeight)*100

                    drawONLT(left,top)
                }
        })


        function addLunker(parent,calle,paneAlter){
            let buttons=document.createElement('div')
            buttons.classList.add('buttons')
            buttons.innerHTML='<img class="icon link" src="/images/grid.svg" width="16px" height="16px"/>'+
                '<img class="icon split" src="/images/split.svg" width="16px" height="16px"/>'+
                '<img class="icon close" src="/images/close.svg" width="16px" height="16px"/>'
            buttons.querySelector('.link').addEventListener('click',event=>{
                GetGUIRenderer(parent)
            })
            buttons.querySelector('.split').addEventListener('click',event=>{
                rssfrme.classList.add('split')

                //parent.innerHTML = ''
                //buttons.remove()
                calle(new XMMFrme(parent))
                //calle(frame)
                //this.frame.Create()

            })
            buttons.querySelector('.close').addEventListener('click',event=>{
                parent.classList.add('hide')
                paneAlter.classList.add('full')
                slide.classList.add('hide')
            })
            parent.append(buttons)
        }
        addLunker(this.htmlPane1,(frm)=>{this.frame1=frm;this.frame1.pane=this.pane1},this.pane2)
        addLunker(this.htmlPane2,(frm)=>{this.frame2=frm;this.frame2.pane=this.pane2},this.pane1)

        /*if(frameCfg&&frameCfg.pane1){
            new createxmmfrme(parent,frameCfg.pane1)
        }
        if(frameCfg&&frameCfg.pane2){
            new createxmmfrme(parent,frameCfg.pane2)
        }*/


        drawONLT(baseHalf,baseHalf)



        //console.log('pane1Cfg',pane1Cfg)

        this.htmlPane1.frame=this
        this.htmlPane2.frame=this
        
        if(pane1Cfg&&pane1Cfg.orient){
            this.frame1 = new XMMFrme(this.htmlPane1,pane1Cfg)
        }
        if(pane2Cfg&&pane2Cfg.orient){
            this.frame2 = new XMMFrme(this.htmlPane2,pane2Cfg)
        }

        if(pane1Cfg&&pane1Cfg.GUI){
            //this.frame1 = new XMMFrme(this.htmlPane1,pane1Cfg)
            GetGUIRenderer(this.htmlPane1,pane1Cfg)
        }
        if(pane2Cfg&&pane2Cfg.GUI){
            //this.frame2 = new XMMFrme(this.htmlPane2,pane2Cfg)
            GetGUIRenderer(this.htmlPane2,pane2Cfg)
        }
        

    }
    GetRootCfg(){
        return {half:this.half,orient:this.orient}
    }
    GetConfigPane1(){
        if(this.frame1){
            return this.frame1.GetConfig()
        }
        return {}
    }
    GetConfigPane2(){
        if(this.frame2){
            return this.frame2.GetConfig()
        }
        return {}
    }

}


