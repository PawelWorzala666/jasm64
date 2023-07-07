class XMMFrme{
    constructor(parent,config){
        this.added=false
        this.xmmfrme=null
        this.orient=config?config.orient:undefined
        this.parent=parent
        this.config=config
        if(config&&config.GUI){
            this.renderer={GUI:config.GUI}
        }
        this.Create()
    }
    MakeRSS(){

        if(this.added){
            return
        }
    
        this.mask1.remove()
  
        this.frame = new RSSFrame(this.config)
        this.frame.Create(this.xmmfrme,this.orient??this.vertical)
        this.xmmfrme.parentElement.querySelector('.buttons').remove()

        this.added=true

        this.buttons.classList.add('hide')

    }
    Create(){

        //if(!this.parent){
         //   return
        //}

        let CUBE=[0,0]

        //let this.vertical=false

   
        this.xmmfrme = document.createElement('div')
        this.xmmfrme.classList.add('xmmfrme')
        if(this.parent){
            this.parent.append(this.xmmfrme)
        }
   
        this.xmmfrme.addEventListener('click',event=>{
    
            this.MakeRSS()

        })

        this.xmmfrme.frame=this

        
        this.mask1 = document.createElement('div')
        this.mask1.classList.add('mask')
        this.mask1.id='mask1'
    
        this.xmmfrme.append(this.mask1)


        this.xmmfrme.addEventListener('mousemove',e=>{
        //this.xmmfrme.onmousemove = (e)=>{

            if(this.added){
                return
            }

            let rect = this.xmmfrme.getBoundingClientRect()
            let x = e.clientX - rect.left
            let y = e.clientY - rect.top
            let left = (x/this.xmmfrme.clientWidth)
            let top = (y/this.xmmfrme.clientHeight)


        
            if(left>0.50){
                CUBE[0]=1
            }else{
                CUBE[0]=0
            }
            if(top>0.50){
                CUBE[1]=1
            }else{
                CUBE[1]=0
            }

            

            if(CUBE[1]==0){
                this.vertical='left'
                this.mask1.style='left:'+(CUBE[0]*50)+'%;width:50%;top:0%;height:100%;'
            }else{
                this.vertical='up'
                this.mask1.style='left:0%;width:100%;top:'+(CUBE[1]*50)+'%;height:50%;'
            }

            //console.log('this.vertical',this.vertical)

        })
        



        this.buttons=document.createElement('div')
        this.buttons.classList.add('buttons')
        this.buttons.innerHTML='<img class="split" src="/images/split.svg" width="32px" height="32px"/>'
        this.buttons.querySelector('.split').addEventListener('click',event=>{
            this.xmmfrme.classList.add('split')
            event.stopPropagation()
            event.preventDefault()
        })
        this.xmmfrme.append(this.buttons)

        if(this.config&&this.config.orient){
            this.vertical=(this.config.orient=='left')
            this.MakeRSS()
        }


    }
    GetConfig(){
        if(this.frame){
            return Object.assign({
                pane1:this.frame.GetConfigPane1(),
                pane2:this.frame.GetConfigPane2(),
            },this.frame.GetRootCfg())
        }
        return {GUI:'renderer'}
    }
}