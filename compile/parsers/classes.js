module.exports = function(ROOT){return Object.assign(ROOT,{

    //CLASSES:[],
    //PROCS:[],
    
    Parse(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.classes!==undefined)&&!this.ROOT.CONFIG.classes){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }






        r( /var[\ \t]*?([\w]+)\=new[\ \t]*?c([\w]+)\(\)/gm, match=>{
            var prop = match.split('=')[0].replace('var','').trim()
            var clas = match.split('=')[1].replace(/(\(|\))/gm,'').replace('new','').trim()
            this.ROOT.CLASSES.push([prop,clas])
            return prop+' label '+clas
        })
        this.ROOT.CLASSES.map(propclas=>{
            r( new RegExp(propclas[0]+'\\.([\\w]+)\\(','gm'), propclas[1]+'_$1('+propclas[0]+', ')
        })





        


    },

    Create(){
        if(this.ROOT.CONFIG){
            if((this.ROOT.CONFIG.classes!==undefined)&&!this.ROOT.CONFIG.classes){
                return
            }
        }

        var r=(match,replace)=>{
            this.ROOT.source = this.ROOT.source.replace(match,replace)
        }

        
            r( /class(.*)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm, match=>{

                var ClassName = match.split(':')[0].replace('class','').trim()

                var FUNCS = []
                var PROPS = []

                match = match.replace(/([\w]+)\((.*)(?<num>\:[0-9]+)\{([\s\S]+?)(\k<num>)\}/gm,mmm=>{
                    FUNCS.push('        function '+ClassName+'_'+mmm.replace('(','(this, '))
                    return ''
                })

                
                FUNCS[0] = FUNCS[0].replace(/this\.([\w]+)[\ \t]*?(\=|dd|db)[\ \t]*?(\[?.*\]?)/gm,mmm=>{
                    PROPS.push('        '+mmm.replace('this.','').replace('=',' QWORD ').replace(/\[\-?[\ \t]*?([0-9\.]+\,.*)\]/gm,'$1'))
                    return ''
                })
                PROPS=PROPS.map(prop=>{
                    prop = prop.replace('QWORD','dq')
                    if(prop.indexOf('\'')>-1){
                        prop = prop.replace('dq','db')+',0'
                    }
                    return prop.trim()
                })
                var cPROPS=PROPS.map(prop=>{
                    var prop1 = prop.split(' ')
                    var value = prop.split(' ')
                    value.splice(0,2)
                    value=value.join(' ').replace(',0','')
                    return 'mov rax,'+value+'\n'+'mov qword ptr this.'+prop1[0]+',rax\n'
                })
                PROPS=PROPS.map(prop=>{
                    var prop1 = prop.split(' ')
                    prop = prop1[0]+' '+prop1[1]+' 0'
                    return prop
                })
                FUNCS[0]=FUNCS[0].replace('{','{\n'+cPROPS.join('\n'))
                //console.log('FUNCS[0]',FUNCS)

                FUNCS = FUNCS.join('\n')

                FUNCS.replace(/function\ (.*)\(/gm,mmm=>{
                    this.ROOT.PROCS.push(mmm.replace('function ','').replace('(','').trim())
                    return mmm
                })

                FUNCS = FUNCS.replace(new RegExp('this\\.([\\w]+)\\((.*)\\)','gm'),ClassName+'_$1,this,$2')

                var ress = (`${ClassName} STRUCT
                ${PROPS.join('\n')}
                ${ClassName} ENDS
        
                ${FUNCS}
        
                `)//.replace(/\(this/gm,'(this:ptr '+ClassName)

                ress = ress.replace(/this\./gm,'qword ptr this.')
                var index = 1
                PROPS.map(prop=>{
                    var name = prop.split(' ')[0]
                    ress = ress.replace(new RegExp('this\\.'+name,'gm'),'this+'+(index*8))
                    index++
                })
                ress = ress.replace(/qword ptr qword ptr/gm,'qword ptr')
                

                return ress

            } )



        

    }

})}