

function SetData(param,value){
    localStorage.setItem(param,JSON.stringify(value))
}

function GetData(param){
    var json = localStorage.getItem(param)
    return json?JSON.parse(json):undefined
}

