var SYSTEM = {}

var DATASETS = {}
var FUNCTIONS = {}
var callSTACK = []


function pushStack(value){
    callSTACK.push(value)
}
function getStack(){
    let value = callSTACK[callSTACK.length-1]
    callSTACK.splice(callSTACK.length-1,1)
    return value
}


SYSTEM.call = function(){

    var FUNCS = FUNCTIONS[ source[stackIndex+1] ]

    pushStack(stackIndex)
    pushStack(stackLength)

    stackIndex = FUNCS[0]
    stackLength = FUNCS[1]

    executeStack()

    stackLength = getStack()
    stackIndex = getStack()
    
    return 2

}

let stackIndex = 0
let stackLength = 0

function executeStack(){
    
    while( stackIndex < stackLength ){

        var func = source[stackIndex]

        success = SYSTEM[ func ]()

        stackIndex = stackIndex + success

    }

}


SYSTEM.declare = function(){

    var name = source[stackIndex+1]
    var value = source[stackIndex+2]

    DATASETS[ name ]  =  value
    
    return 3

}

SYSTEM.func = function(){

    var name = source[stackIndex+1]

    let start = stackIndex+2
    let idx = 2
    while(source[stackIndex+idx]!='endf'){
        idx++
    }
    let end = stackIndex+idx-1

    FUNCTIONS[ name ]  =  [start,end]

    return idx+1

}

function getValue(name){
    if(('1234567890'.split('')).includes(name[0].toString())){
        return name
    }
    if(name[0]=='\''){
        return name.slice(1,name.length-2)
    }
    return DATASETS[ name ]
}

SYSTEM.log = function(){

    var length = parseInt(source[stackIndex+1])

    var result = []
    for(let i=0;i<length;i++){
        result.push(getValue(source[stackIndex+2+i]))
    }
    result = result.join(' ')

    console.log(result)
    
    return length+2

}

function setValue(name,value){
    DATASETS[ name ] = value
}


SYSTEM.dodaj = function(){
    return SYSTEM.calc()
}
SYSTEM.odejmnij = function(){
    return SYSTEM.calc()
}
SYSTEM.pomnoz = function(){
    return SYSTEM.calc()
}
SYSTEM.podziel = function(){
    return SYSTEM.calc()
}

SYSTEM.calc = function(){

    var opration = source[stackIndex]

    var num1 = getValue(source[stackIndex+1])
    var num2 = getValue(source[stackIndex+2])
    var ret = source[stackIndex+3]

    if(opration=='dodaj'){
        var wynik = parseFloat(num1) + parseFloat(num2)
    }
    if(opration=='odejmnij'){
        var wynik = parseFloat(num1) - parseFloat(num2)
    }
    if(opration=='pomnoz'){
        var wynik = parseFloat(num1) * parseFloat(num2)
    }
    if(opration=='podziel'){
        var wynik = parseFloat(num1) / parseFloat(num2)
    }

    setValue(ret, wynik)
    
    return 4

}

SYSTEM.if = function(){

    var left = source[stackIndex+1]
    var war = source[stackIndex+2]
    var right = source[stackIndex+3]

    let start = stackIndex+4
    let idx = 4
    while(source[stackIndex+idx]!='endif'){
        idx++
    }
    let end = stackIndex+idx

    var res = false
    if(war=='<'){
        if(left<right){
            res = true
        }
    }
    if(war=='>'){
        if(left>right){
            res = true
        }
    }
    if(war=='=='){
        if(left==right){
            res = true
        }
    }
    if(war=='!='){
        if(left!=right){
            res = true
        }
    }
    if(war=='<>'){
        if(left!=right){
            res = true
        }
    }

    if(res){
        pushStack(stackIndex)
        pushStack(stackLength)

        stackIndex = start
        stackLength = end

        executeStack()

        stackLength = getStack()
        stackIndex = getStack()
    }
    
    return idx+1

}










var fs = require('fs')

var sourceO = fs.readFileSync('./match/test.pz').toString()

var source =[]
let lastWord = ''
var tmp = sourceO.replace(/\r\n/gm,' ')
var brek = true
for(let i=0;i<tmp.length;i++){
    if(tmp[i]=='\''){
        brek = !brek
    }
    if((tmp[i]==' ')&&brek){
        if(lastWord.length){
            source.push(lastWord)
        }
        lastWord = ''
    }else{
        lastWord += tmp[i]
    }
}
console.log(source.join(' '))

stackIndex = 0
stackLength = source.length
executeStack()


console.log('DATASETS:',DATASETS)
console.log('FUNCTIONS:',FUNCTIONS)