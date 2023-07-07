const fs = require('fs')



var ROOT = {

    APP:null,

    PROCS: [],
    MACROS: [],

    BBS: [],

    CLASSES: [],

    THREADS:[],

}



var CONFIG = null



var COMPILER = {

    codeBlocks: require('./parsers/blocks.js')({ROOT}),
    Clear: require('./parsers/clear.js')({ROOT}),
    AssignsParser: require('./parsers/assigns.js')({ROOT}),
    ParseMaths: require('./parsers/maths.js')({ROOT}),
    PepareOpenGL: require('./parsers/opengl.js')({ROOT}),
    ClassesPrarser: require('./parsers/classes.js')({ROOT}),
    ParseMacros: require('./parsers/macros.js')({ROOT}),
    ParseProcs: require('./parsers/proc.js')({ROOT}),
    ParseIFS: require('./parsers/ifs.js')({ROOT}),
    Callss: require('./parsers/calls.js')({ROOT}),
    Experimental: require('./parsers/exp.js')({ROOT}),
    Lines: require('./parsers/lines.js')({ROOT}),
    Pointers: require('./parsers/pointers.js')({ROOT}),
    BBSCode: require('./parsers/bbs.js')({ROOT}),
    Fixes: require('./parsers/fixes.js')({ROOT}),
    Threads: require('./parsers/threads.js')({ROOT}),

}



COMPILER.Pointers.BBSCode = COMPILER.BBSCode










function parseSource(addrsource,fname){




    ROOT.source = addrsource





    function r(match,replace){
        ROOT.source = ROOT.source.replace(match,replace)
    }



    r( /\:\:app\:(.*)/gm,match=>{
        ROOT.APP = ROOT.APP?ROOT.APP:(match.replace('::app:','').trim())
        return ''
    })

    r( /\:\:config([\s\S]+?)\}/gm,match=>{
        var cfg = match.replace('::config=','CONFIG=')
        //console.log('CONFIG',cfg)
        if(!CONFIG){
            CONFIG = eval(cfg)
        }
        //console.log('CONFIG',cfg)
        //process.exit(1)
        return ''
    })
    console.log('CONFIG',CONFIG)
    ROOT.CONFIG = CONFIG


    r( /import[\ \t]*?(.*)$/gm, match=>{
        var file = match.replace(/(\'|\.js|import)/gm,'').trim()
        parseFile(file)
        return 'include '+file.replace('-','\\\\-').replace('/','\\\\/')+'.a.asm'
    } )






    COMPILER.Lines.Parse()







    

    COMPILER.Clear.Parse()



    
    r(/\.size/gm,'.psize')

    r(/(.*)alloc\((this\.[\w]+)\)/gm,'mov rax,$2\n$1alloc(rax)')



    COMPILER.PepareOpenGL.Parse()




    COMPILER.Threads.Parse()



    COMPILER.AssignsParser.Parse()






    COMPILER.ParseMaths.Parse()

    

    //console.log('ROOT.source 1',ROOT.source.length)



    COMPILER.PepareOpenGL.Parse2()
    


    //console.log('ROOT.source bb',ROOT.source.length)


    COMPILER.ClassesPrarser.Parse()


    
    //console.log('ROOT.source bb11',ROOT.source.length)


    COMPILER.codeBlocks.Parse()



    //console.log('ROOT.source a',ROOT.source.length)



    COMPILER.ParseMacros.Parse()

    





    r( /([\w]+)\[([0-9]+)\]/gm,'qword ptr $1[$2]')



    //console.log('ROOT.source 2',ROOT.source.length)




    COMPILER.ClassesPrarser.Create()





    


    COMPILER.ParseProcs.Parse()








    COMPILER.ParseMacros.Parse2()










    COMPILER.ParseIFS.Parse()





    //console.log('ROOT.source 3',ROOT.source.length)

   
    

    r( /([0-9]+)(\*|\+|\-|\/)([0-9]+)/gm, match=>{
        return eval(match)
    } )






    


    COMPILER.Clear.Cleanout()

    







    COMPILER.AssignsParser.Parse2()







    COMPILER.Fixes.Parse1()








    COMPILER.Callss.Parse()

    



    //console.log('ROOT.source BB1 ',ROOT.source.length)
    
    

    r( /\,$/gm,'')


    var EXP
    r( /\:\:EXP/gm,match=>{
        EXP = true
        return ''
    })
    if(EXP){
        COMPILER.Experimental.Parse()
    }




    COMPILER.Pointers.Parse()


    
    //console.log('ROOT.source BB 2 ',ROOT.source.length)



    COMPILER.ParseMacros.Parse3()


    COMPILER.Pointers.Parse2()
    


    function scrapBBS(){
        r(/^(.*)\ (dq|rq|dd|dw)\ \?$/gm,match=>{
            if(match.indexOf('+')>-1){
                return match
            }
            if(!ROOT.BBS.includes(match)){
                ROOT.BBS.push(match)
            }
            return ''
        })
    }
    scrapBBS()

    //console.log('ROOT.source BB 3',ROOT.source.length)


    COMPILER.Clear.Parse2()


    //console.log('ROOT.source',ROOT.source.length)

    //console.log('ROOT.source BB1 2212',ROOT.source.length)

    if(EXP){
        COMPILER.Experimental.Parse()
    }
    scrapBBS()

    //console.log('ROOT.source BB1 331',ROOT.source.length)

    COMPILER.Pointers.Parse3()

    //console.log('ROOT.source BB1 33',ROOT.source.length)

    COMPILER.BBSCode.Parse3()


    //r( /\\\\/gm, '' )

    //console.log('ROOT.source BB 4 ',ROOT.source.length)



    COMPILER.BBSCode.Parse4()



    


    COMPILER.ParseProcs.Parse2()





    

    r(/return (.*)/gm,'mov rax,qword ptr $1')

    r(/mov rax,/gm,'mov rax,qword ptr ')
    r(/qword ptr[\ ]*qword ptr/gm,'qword ptr')

    r(/qword ptr[\ ]*qword ptr/gm,'qword ptr')

    r(/\?dq/gm,'dq ?')

    r(/(.*)\=(.*)/gm,'Assign $1,$2')

    r(/\[\[/gm,'[')
    r(/\]\]/gm,']')




    r(/PROC([\s\S]+?)ENDP/gm,match=>{
        var LOCS=[]
        match=match.replace(/LOCAL (.*)/gm,mmm=>{
            LOCS.push(mmm)
            return ''
        })
        return match.replace('\n','\n'+LOCS.join('\n')+'\n')
    })

    //r(/([\w]+)\[([0-9]+)\]/gm,'$1+$2')
















    if(CONFIG&&(CONFIG.arrays!==undefined)&&CONFIG.arrays){

        var LOCALS = []

        /*r(/([\w]+)\[([0-9]+)\]/gm,match=>{
            var name = match.split('[')[0]
            var value = 8*(parseInt(match.split('[')[1].replace(']','').trim()))+0
            return name+'['+value+']'
        })*/

        r(/rcall/gm,'invoke')

        var LOCS = []
        r(/LOCAL(.*)/gm,ma=>{
            if(!LOCS.includes(ma)){
                LOCS.push(ma)
            }
            return ''
        })
        LOCS=LOCS.map(lo=>lo.replace(':REAL8','dq ?').replace('LOCAL',''))
        ROOT.source = '.data?\n'+LOCS.join('\n')+'\n'+ROOT.source


        var REGS = ['rdi','rsi','rdx','rcx']

        var PROCEDURES = []
        r(/(.*) PROC (.*)/gm,match=>{
            var name=match.trim().split(' ')[0].trim()
            var PARAMS = []
            match=match.replace(/([\w]+)/gm,mmm=>{
                PARAMS.push(mmm)
                return ''
            })
            PARAMS.splice(0,2)
            /*var index=0
            var PARAMS22=PARAMS.map(param=>{
                return 'mov '+param+','+REGS[index++]
            })
            PARAMS=PARAMS.map(param=>{
                return 'LOCAL '+param+' :QWORD'
            })
            PROCEDURES.push(name)
            return name+' PROC\n'+PARAMS.join('\n')+'\n'+PARAMS22.join('\n')*/

            //var index=0
            //var PARAMS22=PARAMS.map(param=>{
            //    return 'mov '+param+','+REGS[index++]
            //})
            var index=0
            //var MOVES=[]
            //var READS=[]
            var ASSIGNS = []
            PARAMS=PARAMS.map(param=>{
                //MOVES.push('mov rax, [rbp+'+(index*8+8)+']\nmov '+REGS[index]+', rax')
                /*var len=16
                if(param=='v'){
                    len=3
                }
                for(let idx=0;idx<len;idx++){
                    READS.push('lea rax,[rdi+'+(idx*8)+']\nmov qword ptr '+param+'['+(idx*8)+'],rax')
                }*/
                ASSIGNS.push('mov rax,['+REGS[index]+'+0]\nmov '+param+',rax')
                index++
                if(LOCALS.includes(param)){
                    return ''
                }
                LOCALS.push(param)
                return ''+param+' dq ?'
            })
            PROCEDURES.push(name)
            //return '\n.data\n'+PARAMS.join('\n')+'\n.code\n'+name+' PROC\npush rbp\nmov rbp, rsp\n'+MOVES.join('\n')+'\n\n'+READS.join('\n')+'\n\npop rbp\n\n'
            return '\n.data?\n'+PARAMS.join('\n')+'\n.code\n'+name+' PROC\n\n'+ASSIGNS.join('\n')+'\n\n'
        })

        PROCEDURES.map(PROC=>{
            r(new RegExp('invoke '+PROC+'(.*)','gm'),match=>{
                var PARAMS = []
                match=match.replace(/([\w]+)/gm,mmm=>{
                    PARAMS.push(mmm)
                    return ''
                })
                PARAMS.splice(0,2)
                var index=0
                PARAMS=PARAMS.map(param=>{
                    return 'lea '+REGS[index++]+','+param
                })
                return PARAMS.join('\n')+'\ninvoke '+PROC
            })
        })

        r(/qword ptr /gm,'')


        r(/invoke(.*)([\w]+)\[([0-9]+)\]/gm,mmm=>{
            mmm=mmm.replace(/([\w]+)\[([0-9]+)\]/gm,match=>{
                var name = match.trim().split('[')[0].trim()
                var value = match.trim().split('[')[1].replace(']','').trim()
                value=parseInt(value)+0
                return 'qword ptr '+name+'['+value+']'
            })
            return mmm
        })
        r(/mov(.*)([\w]+)\[([0-9]+)\]/gm,mmm=>{
            mmm=mmm.replace(/([\w]+)\[([0-9]+)\]/gm,match=>{
                var name = match.trim().split('[')[0].trim()
                var value = match.trim().split('[')[1].replace(']','').trim()
                value=parseInt(value)+0
                return 'qword ptr '+name+'['+value+']'
            })
            return mmm
        })

        r(/([\w]+)\[([0-9]+)\]/gm,match=>{
            var name = match.split('[')[0]
            var value = (8*(parseInt(match.split('[')[1].replace(']','').trim())))+0
            return ''+name+'+'+value+''
        })

        //r(/(oout|amatrix1|a) dq \?/gm,'$1 dq (16)')
        //r(/(v) dq \?/gm,'$1 dq (3)')

        /*r(/PROC([\s\S]+?)ENDP/gm,ma=>{

            //ma=ma.replace(/qword ptr\ \[/gm,'[')

            ma=ma.replace(/mov qword ptr ([\w]+)\[([0-9]+)\]/gm,match=>{
                var name = match.split('[')[0].replace('mov qword ptr ','')
                var value = parseInt(match.split('[')[1].replace(']','').trim())+0
                return 'mov rcx,'+value+'\n'+'mov ['+name+'+rcx]'
            })
            //ma=ma.replace(/Assign qword ptr ([\w]+)\[([0-9]+)\],(.*)/gm,'mov rcx,$2\nAssign [$1+rcx],qword ptr $3')

            return ma
        })*/

        //r(/mov(\ rax\,[\w]+\n\;.*\n\nret)/gm,'lea $1')

        //r(/mov\ rax\,oout/gm,'lea rax,oout')

        /*r(/invoke(.*)/gm,match=>{
            match=match.replace(/(.*)qword ptr ([\w]+)\[([0-9]+)\]/gm,'\nmov rax,\[rdi+$3\]\n$1rax')
            return match
        })*/

    }


    //r(/(.*)alloc\((qword ptr [\w]+\+[0-9]+)\)/gm,'mov rax,$2\n$1alloc(rax)')


    //COMPILER.Clear.End()
    r( /\\\\/gm,'')  

    r(/\\\n.*\n/gm,'\\')

    r( /\'/gm,'"')
    
    //console.log('ROOT.source EEE ',ROOT.source.length)


    return ROOT.source

}





















function cleanMain(source){
    source=source.replace(/Main MACRO([\s\S]+)/gm,'')
    return source
}



var fname = process.argv[2]

parseFile(fname)

function parseFile(name){
    var source = fs.readFileSync('./source/'+name+'.js').toString()

    source = parseSource(source,name)
    if(name!==fname){
        source = source.replace(/(Main[\ \t]*?MACRO[\s\S]+)/gm,'')
    }
    
    var dir = name.split('/')[0]
    dir=dir.replace(name,'')
    if(dir&&dir.length){
        try{
            fs.mkdirSync('./build/'+dir+'/')
        }catch(e){}
    }
    /*try{
        fs.mkdirSync('./source/models/')
    }catch(e){}
    try{
        fs.mkdirSync('./build/models/')
    }catch(e){}*/

    fs.writeFileSync('./build/'+name+'.asm',source)
    fs.writeFileSync('./build/'+name+'.a.asm',cleanMain(source))

    if(name==fname){
        var app = fs.readFileSync('./compile/app/'+ROOT.APP+'.asm').toString()
        app = app.replace('{{CODE}}','include '+fname+'.asm')
        var bbs = ROOT.BBS.join('\n')
        if(bbs=='undefined'){
            bbs=''
        }
        var BB = bbs+'\n'+COMPILER.Threads.GetDATA()
        if(BB.trim()=='undefined'){
            BB=''
        }
        app = app.replace('{{BBS}}', BB)
        fs.writeFileSync('./build/'+fname+'.app.asm',app)

    }
}

function copy(from,dist){
    var data = fs.readFileSync(from)
    fs.writeFileSync(dist,data)
}
copy('./compile/res/icon.ico','./build/icon.ico')
copy('./compile/res/manifest.xml','./build/manifest.xml')
copy('./compile/res/rsrc.rc','./build/rsrc.rc')