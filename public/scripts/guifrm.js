


async function GetGUIRenderer(parent,cfgDAta){

    var GUIDATA = (parent&&parent.renderer)?arent.renderer:cfgDAta

    if(GUIDATA&&(GUIDATA.GUI!='renderer')){

        var elem = parent.querySelector('.renderer')
        if(elem){
            elem.remove()
        }

        let renderer=document.createElement('div')
        renderer.classList.add('renderer')

        var CALLE = GUI(GUIDATA.GUI)

        await CALLE(renderer)

        parent.append(renderer)

    }else{

        let renderer=document.createElement('div')
        renderer.classList.add('renderer')

        for(const UUI of GUI.GetList()){

            let guieleem=document.createElement('div')
            guieleem.classList.add('gui')
            guieleem.innerHTML = UUI
            guieleem.addEventListener('click',e=>{
                //console.log('add UUI',UUI)
                parent.renderer.GUI = UUI
                GetGUIRenderer(parent)
            })
            renderer.append(guieleem)

        }

        //renderer.innerHTML= GUI.GetList().map(GU=>('<p >'+GU+'</p>')).join('')

        parent.renderer = GetDefaultGUIConfig()

        parent.append(renderer)

    }

}

function GetDefaultGUIConfig(){
    return {GUI:'renderer'}
}