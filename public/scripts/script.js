
var XMMF

var LoadGUI=async()=>{

    var GUI = await GET('/gui','json')

    //fetch('/gui')
     //   .then(resp=>resp.json())
      //  .then(GUI=>{
            XMMF = new XMMFrme(document.body,GUI)
            
    console.log(XMMF)
     //   })

}

LoadGUI()














getFiles()
//getFile('test.js')








function Run(){

    var textarea = document.querySelector('#editor textarea')
    var code = textarea.value

    eval(code)

}

async function AddFile(){

    var file = prompt("Podaj nazwę pliku?")

    var response = await POST("/file-save",{
        file: file,
        code: '',
    })

    /*fetch("/file-save",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            file: file,
            code: '',
        })
    }).then(resp=>resp.json())
    .then(resp=>{*/
        getFiles()
        getFile(file)
    //})

}

var del

async function DeleteFile(elem,name){

    del = true

    var response = await POST("/file-delete",{
        file: name,
        //code: '',
    })

    /*fetch("/file-delete",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            file: name,
            //code: '',
        })
    }).then(resp=>resp.json())
    .then(resp=>{*/
        elem.parentElement.remove()
        //getFiles()
        //getFile(file)
        del = false
    //})

}









/*

;(function(){
    var oldLog = console.log;
    console.log = function(message){
        setMsg(message,'log')
        oldLog.apply(console, arguments);
    }
})();
;(function(){
    var oldLog = console.error
    console.log = function(message){
        setMsg(message,'error')
        oldLog.apply(console, arguments);
    }
})();*/
/*
window.onerror = function(message, source, lineno, colno, error) {
    if (error) message = error.stack;
    setMsg(message)
    ga('send', 'event', 'window.onerror', message, navigator.userAgent);
  }
*/
/*
function setMsg(msg){

    var elem = document.createElement('pre')
    elem.textContent = msg

    var log = document.querySelector('#log')
    log.append(elem)

}
*/

/*
var logIndex=1000000
function ShowLog(kind){
    var log = document.querySelector('#'+kind)
    log.style='z-index:'+(logIndex++)+';'
}

*/


async function SendCmd(){
    var cmd=document.querySelector('[name="cmd"]')

    var response = await POST("/cmd",{
        cmd: cmd.value,
    })
    /*fetch("/cmd",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            cmd: cmd.value,
        })
    }).then(resp=>resp.json())
        .then(resp=>{*/
            var elem = document.createElement('pre')
            elem.textContent = response.result

            var cmd = document.querySelector('#cmd .content')
            cmd.append(elem)
       // })
}









/*
addEventListener("DOMContentLoaded", (event) => {
    LoadGUI()
})
*/


function GetFrame(){

    var config = XMMF.GetConfig()

    console.log('config',JSON.stringify(config,null,4))

    SaveGUI(config)

}

async function SaveGUI(config){


    console.log('config',JSON.stringify(config,null,4))

    return

    await POST("/gui",{gui:config})
    /*fetch("/gui",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({gui:config})
    }).then(resp=>resp.json())
        .then(resp=>{

        })*/

}



async function Exec(){

    var file = GetData('activeFile')
    if(!file){
        return
    }

    var RESULT = await POST("/exec",{file},'json')

    console.log(RESULT)

    /*fetch("/exec",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({})
    }).then(resp=>resp.json())
        .then(resp=>{

        })*/

}