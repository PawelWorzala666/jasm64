

function setCode(textarea,pre,code,code2){

    //var textarea = document.querySelector('#editor textarea')
    textarea.value = code2??code
    
    colorizeText(pre,code)

    CalculateHeights()

}


var changeTimeoutID
function codeChanged(){

    clearTimeout(changeTimeoutID)

    changeTimeoutID = setTimeout(saveCode,1250)


    var pre = document.querySelector('#editor pre')
    var textarea = document.querySelector('#editor textarea')
    var code = textarea.value

    textarea.addEventListener('keyup',event=>{
        var code = textarea.value
        colorizeText(pre,code)
    })

    colorizeText(pre,code)

}

function getCode(){
    var textarea = document.querySelector('#editor textarea')
    return textarea.value
}

async function saveCode(){

    //var textarea = document.querySelector('#editor textarea')
    var code = getCode()

    /*fetch("/file-save",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            file: activeFile,
            code: code,
        })
    })*/
    await POST("/file-save",{
        file: activeFile,
        code: code,
    })

}

function CalculateHeights(){

    
    //var code = textarea.value

    //var top = textarea.scrollTop
    //var height = textarea.scrollHeight

    var pre = document.querySelector('#editor pre')

    //pre.style = 'top: -'+top+'px;height:'+height+'px;'


    var textarea = document.querySelector('#editor textarea')

    textarea.style = 'height:'+pre.clientHeight+'px;'

    //console.log('kuku')

    //var pre = document.querySelector('#editor')
    //pre.style = 'height:'+height+'px;'

    if(!editorSetup){
        editorSetup=true
        editorSetupFunction(textarea,pre)
    }

}
var editorSetup


function editorSetupFunction(textarea,pre){

    textarea.addEventListener('keyup',event=>{
            if(event.keyCode === 13){
            var num = getLineNumber(textarea)
            var lines = textarea.value.split('\n')
            console.log(num)
            console.log(lines[num-2])
            var activeLine = lines[num-2]
            var spcs = 0
            activeLine.replace(/^[\ \t]*/gm,match=>{
                spcs = match.length
            })
            var selStart = textarea.selectionStart
            var pref = textarea.value.substr(0, selStart)
            var suff = textarea.value.substr(selStart, textarea.value.length)
            var newTxt = ''
            for(let i=0;i<spcs;i++){
                newTxt+=' '
            }
            var code = pref+newTxt+suff
            setCode(textarea,pre,code,code)
            textarea.selectionEnd= selStart+spcs
        }
    })


}



function getLineNumber(textarea){
    return textarea.value.substr(0, textarea.selectionStart) // get the substring of the textarea's value up to the cursor position
      .split("\n").length/* // split on explicit line breaks
      .map((line) => 1 + Math.floor(line.length / textarea.cols)) // count the number of line wraps for each split and add 1 for the explicit line break
      .reduce((a, b) => a + b, 0); // add all of these together*/
}