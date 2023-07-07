var started
async function getFiles(){

    //var promise = await fetch('/files')
    //var json = await promise.json()

    var response = await GET('/files','json')

    return displayFiles(response.files)
            /*if(!started&&files.lastFile){
                getFile(files.lastFile)
                started=true
            }*/

}

function displayFiles(DIR){

    var fileshtml = '<div id="files-list">'

    /*for(const DD of Object.keys(DIR)){

        fileshtml += '<div class="dir"><h2>'+DD+'</h2>'
    
        DIR[DD].map(file=>{
            var RES = DD+'/'+file
            fileshtml += '<div class="list" onclick="getFile(\''+RES+'\')"><span>'+file+
                '</span><div id="minus" class="icon" onclick="DeleteFile(this,\''+RES+'\')"><img width="14px" height="14px" src="/minus.svg"></div></div>'
        })

        fileshtml += '</div>'

    }*/

    function parseTree(node,parent){
        var res = '<div class="files">'
        var keys = Object.keys(node)
        for(const key of keys){
            var link = node[key]
            if(link==1){
                //res += '<div class="file" data-name="'+parent+'/'+key+'">'+key+'</div>'
            }else{
                res += '<div class="directory" data-name="'+parent+'/'+key+'"><div class="name" onclick="ToggleDir(event)">'+
                        key+'</div>'+parseTree(node[key],parent+'/'+key)+'</div>'
            }
        }
        for(const key of keys){
            var link = node[key]
            if(link==1){
                res += '<div class="file" data-name="'+parent+'/'+key+'" onclick="GetFileByEvent(event)">'+key+'</div>'
            }else{
                //res += '<div class="directory" data-name="'+parent+'/'+key+'"><div class="name" onclick="ToggleDir(event)">'+
                //        key+'</div>'+parseTree(node[key],parent+'/'+key)+'</div>'
            }
        }
        return res+'</div>'
    }
    fileshtml += parseTree(DIR,'.')

 
    return fileshtml+'</div>'

}




GUI('FilesList',async function(element){
    element.innerHTML = await getFiles()
    setTimeout(function(){
        var json = GetData('DIRSVISIBLE')
        DIRSVISIBLE = JSON.parse(json??'{}')
        Object.keys(DIRSVISIBLE).map(vis=>{
            var element = document.querySelector('#files-list [data-name="'+vis+'"]')
            if(element){
                if(DIRSVISIBLE[vis]){
                    element.classList.add('not-list')
                }
            }
        })
    },125)
})



var DIRSVISIBLE = {}
function ToggleDir(event){

    console.log(event)

    var directory = event.target.parentElement

    directory.classList.toggle('not-list')

    var path = directory.getAttribute('data-name')

    DIRSVISIBLE[path] = !!!DIRSVISIBLE[path]

    console.log('DIRSVISIBLE',DIRSVISIBLE)

    SetData('DIRSVISIBLE',JSON.stringify(DIRSVISIBLE))

}







document.addEventListener('DOMContentLoaded',()=>{
    var file = GetData('activeFile')
    //return
    if(file){
        getFile(file)
    }
})

function escapeHTML(str){
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}



window.addEventListener('unload',event=>{
    var editor = document.querySelector('#editor')
    if(editor){
        SetData('activeFileTextOffset',editor.scrollTop)
    }
})




function GetFileByEvent(event){

    var path = event.target.getAttribute('data-name')
    getFile(path)

}

//var activeFile
async function getFile(name){

    /*if(del){
        return
    }*/

    SetData('activeFile',name)

    activeFile = name


    var code = await POST('/get-file',{
        name
    })



    
    var textarea = document.querySelector('#editor textarea')
    textarea.style = ''
    var pre = document.querySelector('#editor pre')
    pre.style = ''

    //var pre = document.querySelector('#editor')
    //pre.style = 'height:'+height+'px;'


    /*fetch('/file-get?file='+name)
        .then(resp=>resp.text())
        .then(code=>{*/
        /*document.body.className = 'code'
            if(name.indexOf('.js')>-1){
                document.body.className = 'js'
            }
            if(name.indexOf('.svg')>-1){
                var svg = document.querySelector('#svg')
                svg.src = '/'+name.replace('public/','')
                document.body.className = 'svg'
            }*/
            //if((name.indexOf('.html')>-1)||(name.indexOf('.svg')>-1)){
                var code2 = escapeHTML(code)

                var textarea = getFileElem.querySelector('textarea')
                var pre = getFileElem.querySelector('pre')

                setCode(textarea,pre,code2,code)
            //}else{
             //   setCode(code)
            //}
        //})

    var editor = document.querySelector('#editor')
    var scrollTop = GetData('activeFileTextOffset')
    editor.scrollTop = scrollTop
    //editor.scrollTop({ top: offsetTop, behavior: 'smooth'});

}

var getFileElem
GUI('GetFile',async function(element){
    if(!getFileElem){
        element.innerHTML = `<div id="editor">
            <pre></pre>
            <textarea spellcheck="false" onkeyup="codeChanged()" onscroll="Scroll()"></textarea>
        </div>`
        getFileElem = element
    }
})