GUI('MainLinks',async function(element){
    if(element){
        element.innerHTML = `<div id="main-links">
        <a id="save-gui">save gui</a>
        <a id="run-script">run script</a>
        <a id="compile">compile</a>
        </div>`;
        element.querySelector('#save-gui').addEventListener('click',event=>{
            GetFrame()
        })
        element.querySelector('#run-script').addEventListener('click',event=>{
            var code = getCode()
            eval(code)
        })
        element.querySelector('#compile').addEventListener('click',event=>{
            Exec()
        })
    }
})