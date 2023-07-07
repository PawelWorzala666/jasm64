const fs = require('fs')
const glob = require('./glob')
const bodyParser = require('body-parser')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const express = require('express')
const app = express()


var SOURCES = './'


/*
const codeCss = require('./cache/code.css.js')
const indexHtml = require('./cache/index.html.js')
const scriptJs = require('./cache/script.js.js')
const styleCss = require('./cache/style.css.js')
*/

app.use(bodyParser.json())

app.use(express.static('./public'))



async function execSync(cmd){
    const { stdout, stderr, error } = await exec(cmd, {silent:false});
    return stdout + stderr + error
}




function GetErrors(msg){
    
    var ERRORS = []
    msg=msg.replace(/^(.*)error([\s\S]+?)LINK : fatal error/gm,match=>{
        console.log('M1..',match)
        match = match.replace(/\:\ error([\s\S]+?)Main Line Code/gm,mmm=>{
            console.log('M22..',mmm)
            var params = mmm.split(':')
            //console.log('params..',params)
            //var rers = /\:\ ([\w]+)[\ \n]*([\w]+\([0-9]+\))\:.*[\s\S]+?Main/gm.exec(mmm)
            //console.log('KKK:::::',rers)
            var source = mmm.split(' Called From')[1].split(': ')[0].trim()
            var func = params[3].trim().split('\r\n')[1].trim()
            ERRORS.push({
                kind: params[2].trim(),
                word: params[3].trim().split('\r\n')[0].trim(),
                source:source.split('(')[0],
                func:func.split('(')[0],
                line: source.split('(')[1].split(')')[0].trim(),
                inline: func.split('(')[1].split(')')[0].trim()
            })
            return mmm
        })
        return match
    })

    //console.log(msg)
    console.log('ERRORS',ERRORS)
    return ERRORS
}






app.post('/exec', async(req, res)=>{
    var file = req.body.file.replace('.js','').replace('./source//','')
    console.log('file',file)
    var message = await execSync("call compil.bat "+file)
    var ERRORS = GetErrors(message)
    res.send({message,ERRORS})
})













app.post('/gui', async(req, res)=>{
    var gui = req.body.gui
    //fs.writeFileSync('./server/gui.json', JSON.stringify(gui,null,4))
    res.send(true)
})
app.get('/gui', async(req, res)=>{
    var gui = JSON.parse(fs.readFileSync('./server/gui.json').toString())
    res.send(gui)
})


var lastFile
app.post('/get-file', async(req, res)=>{
    var name = req.body.name
    lastFile=name
    var stats = fs.lstatSync(name)
    if(!stats.isDirectory()){
        res.send(fs.readFileSync(name).toString())
    }else{
        res.send(false)
    }
})

app.get('/files', async(req, res)=>{
    //var DIR = {}
    ///for(const SRC of SOURCES){
       // var files = await glob(SOURCES)
        var files = await GetFileTree()
       // files = files.map(file=>{
          //  file = file.replace(SRC,'').replace('\\','/')
            //console.log(file)
          //  return file
        //})
       // DIR['SRC'] = files
    //}
    res.send({files,lastFile})
})

app.post('/file-save', async(req, res)=>{
    var file = req.body.file
    var lastdir='./'
    while(file.indexOf('/')>-1){
        var dir = file.substring(0,file.indexOf('/'))
        try{
            fs.mkdirSync(lastdir+dir)
        }catch(e){}
        lastdir+=dir+'/'
        file=file.replace(dir+'/','')
    }
    var code = req.body.code
    fs.writeFileSync(lastdir+file, code)
    res.send(true)
})

app.post('/file-delete', async(req, res)=>{
    var file = './'+req.body.file
    try{
        if(fs.existsSync(file)>-1){
            fs.rmSync(file)
        }
    }catch(e){}
    try{
        var stats = fs.lstatSync(file)
        if(stats.isDirectory()){
            var files=glob(file)
            //console.log(files)
            if(!files||files.length<=1){
                fs.rmdirSync(file)
            }
        }
    }catch(e){}
    res.send(true)
})


async function runCommand(command) {
    const { stdout, stderr, error } = await exec(command);
    if(stderr){console.error('stderr:', stderr);}
    if(error){console.error('error:', error);}
    return stdout;
  }
app.post('/cmd', async(req, res)=>{
    var cmd = req.body.cmd.replace(/\\\\/gm,'\\')
    console.log('cmd..',cmd)
    try{
        var result = await runCommand(cmd)
        result = result.length>0?result:cmd
        res.send(JSON.stringify({result:result}))
    }catch(e){
        res.send(JSON.stringify({result:cmd}))
    }
})

//if(!fs.existsSync('./public/index.html')){
/*
    app.get('/code.css', async(req, res)=>{
        res.set({
            'Content-Type': 'text/css'
        })
        res.send(codeCss)
    })
    app.get('/', async(req, res)=>{
        res.send(indexHtml)
    })
    app.get('/script.js', async(req, res)=>{
        res.set({
            'Content-Type': 'text/javascript'
        })
        res.send(scriptJs)
    })
    app.get('/style.css', async(req, res)=>{
        res.set({
            'Content-Type': 'text/css'
        })
        res.send(styleCss)
    })
*/


//}



app.listen(3113)



//require("child_process").exec('explorer.exe "http://localhost:3113"')




async function GetFileTree(){

    var files = await glob(SOURCES)

    files=files.map(file=>file.replace(SOURCES,''))

    var TREE = {}
    var ACTTREE

    for(const file of files){

        var parts = file.split('/')

        ACTTREE = TREE

        for(const part of parts){

            if(part.indexOf('.')>2){
                ACTTREE[part]=1
            }else{
                if(!ACTTREE[part]){
                    ACTTREE[part] = {}
                }
                ACTTREE=ACTTREE[part]
                if(!ACTTREE){
                    ACTTREE = {}
                    ACTTREE[part]=ACTTREE
                }
            }

        }


    }


    return TREE
    ///console.log(files)
    //console.log(TREE)

}