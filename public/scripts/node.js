

var STORAGE = {
    NODE:{},
    GUI:{},
}

function node(param,value){
    if(value!==undefined){
        STORAGE.NODE[param]=value
    }
    return STORAGE.NODE[param]
}

function GUI(param,value){
    if(value!==undefined){
        STORAGE.GUI[param]=value
    }
    return STORAGE.GUI[param]
}

GUI.GetList = function(){
    return Object.keys(STORAGE.GUI)
}