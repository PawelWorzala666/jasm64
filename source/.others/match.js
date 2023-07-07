

   
    
 
    import 'fs.js'

    import 'arrays.js'


    import 'math.js'
    import 'string.js'
    import 'utils.js'









    var SOURCEIndex = 0
    var SOURCELength = 0
    var callFuncName


    
    var name
    var value
    var typeString = 'string'
    var typeFloat = 'float'
    var _type1

    declareFunc:

        printf('declare: %s %s', 'declare', EOL)
        
        //mov rax , [SOURCEIndex]
        add [SOURCEIndex] , 1
        SOURCE.get([SOURCEIndex])
        mov [name] , rax

        //mov rax , [SOURCEIndex]
        add [SOURCEIndex] , 1
        SOURCE.get([SOURCEIndex])
        //;mov rcx , rax
        mov [value] , rax

        invoke printf,'value: %s %s', [value], EOL

        /*;var value = SOURCE[SOURCEIndex+2]
        ;movsx rbx , byte[value+0]
        ;invoke printf,'value: %c %s', byte[value+0], EOL
        ;mov rcx , "'"
        ;cmp rbx , rcx
        ;je .endoQQ*/
        A2F([value])
        mov [value] , rax
        cmp rax , 0.0
        je .endoQQ
        //;mov [value] , rax
        mov rax , typeFloat
        mov [_type1] , rax
        
        //DATASETS.pus(name, value)
        //DATASETS_TYPES.push(name, _type1)

        //invoke printf,'name=value: %s %f %s', [name], [value], EOL
        //;cNamedArray_get DATASETS,[name]
        //;mov [val1] , rax
        //;invoke printf,'val1: %s %s %f', [name],[val1], EOL*/
        jmp .finito11
        //;invoke printf,'value: %f %s', rax, EOL
        
        .endoQQ:
        //mov rax , [SOURCEIndex]
        add [SOURCEIndex] , 1
        SOURCE.get([SOURCEIndex])
        //;mov rcx , rax
        mov [value] , rax
        mov rax , typeString
        mov [_type1] , rax

        //DATASETS.pus(name, value)
        //DATASETS_TYPES.push(name, _type1)

        //;mov [val1] , rax
        //;invoke printf,'val1: %s %s %s', [name],rax, EOL*/
        .finito11:

        //invoke printf,'name=value: %s %i %s', [name], [value], EOL
        invoke printf,'val1: %s %s', [name], EOL
        SYSTEM.push([name],[value])
        //invoke printf,'val1: %s %s', [name], EOL
        //DATASETS_TYPES.push([name],[_type1])

        /*;cNamedArray_push DATASETS,[name],value
        ;DATASETS[ name ]  =  value
        ;cNamedArray_get DATASETS,[name]
        ;mov [val1] , rax*/
        
        invoke printf,'val1: %s %s', [name], EOL
        
        mov rax , 3

    ret
    declareName db 'declare',0


















    executeSOURCE:
        
        .execSOURCELoop:

            //;var func = SOURCE[SOURCEIndex]
            //mov rax , [SOURCEIndex]

            invoke printf,'::SOURCEIndex: %i %s', [SOURCEIndex], EOL
            
            //mov rax, [SOURCEIndex]
            //add rax, 1
            SOURCE.get([SOURCEIndex])
            //mov rbx, rax
            mov [callFuncName] , rax
            invoke printf,'func: %s %s', [callFuncName], EOL

            //SYSTEM.get(callFuncName)
            //mov [callFuncName] , rax



            mov rbx, [callFuncName]
            compare rbx, declareName
            cmp rax, 1
            jne .end111
                call declareFunc
            .end111:

            /*mov rbx, logName
            compare callFuncName, rbx
            cmp rax, 0
            je .end112
                call log
            .end112:

            mov rbx, calcName
            compare callFuncName, rbx
            cmp rax, 0
            je .end1123
                call calc
            .end1123:

            mov rbx, dodajName
            compare callFuncName, rbx
            cmp rax, 0
            je .end1124
                call calc
            .end1124:

            mov rbx, odejmnijName
            compare callFuncName, rbx
            cmp rax, 0
            je .end11245
                call calc
            .end11245:

            mov rbx, pomnozName
            compare callFuncName, rbx
            cmp rax, 0
            je .end112433
                call calc
            .end112433:

            mov rbx, podzielName
            compare callFuncName, rbx
            cmp rax, 0
            je .end12
                call calc
            .end12:

            mov rbx, funcName
            compare callFuncName, rbx
            cmp rax, 0
            je .end1233
                call func
            .end1233:

            mov rbx, callName
            compare callFuncName, rbx
            cmp rax, 0
            je .end12334
                call callFunc
            .end12334:

            mov rbx, ifName
            compare callFuncName, rbx
            cmp rax, 0
            je .end1235
                call ifFunc
            .end1235:*/



            //invoke printf,'[callFuncName]: %i %s',[callFuncName], EOL

            //call [callFuncName]
            //;mov [func] , rax
            //;invoke printf,'[rax]: %i %s', rax, EOL
            //;call [func]

            /*;mov rcx , [SOURCEIndex]
            ;cmp rcx , [SOURCELength]
            ;cmp rax , -1
            ;je .revertAction
            ;jmp .normalAction

            ;.revertAction:
            ;mov rax , [_SOURCEIndex]
            ;mov rax , 2
            ;mov [SOURCEIndex] , rax
            ;mov rax , [_SOURCELength]
            ;mov [SOURCELength] , rax
            ;jmp .endAction

            ;.normalAction:*/
            add [SOURCEIndex], 1

            mov rax, [SOURCEIndex]
            mov rbx, [SOURCELength]
            cmp rax, rbx
            jge .endExecSOURCELoop

            /*;.endAction:

            ;compare declareName , [func]
            ;cmp rax , 1
            ;jne .ednoCompares1
            ;call declare
            ;add [SOURCEIndex] , rax
            ;.ednoCompares1:*/

            /*;compare logName , [func]
            ;cmp rax , 1
            ;jne .ednoCompares2
            ;call log
            ;add [SOURCEIndex] , rax
            ;.ednoCompares2:*/




            //;success = SYSTEM[ func ]()

            //;SOURCEIndex = SOURCEIndex + success
        //invoke printf,'[SOURCEIndex]: %i %s', [SOURCEIndex], EOL
        //invoke printf,'[SOURCELength]: %i %s', [SOURCELength], EOL

        //mov rax , [SOURCEIndex]
        //cmp rax , [SOURCELength]
        //jne executeSOURCE

        //;cSOURCE_get SOURCE, SOURCEIndex 
        //SOURCE.get()
        //;mov rax , [_SOURCELength]
        //mov [SOURCELength] , rax

        //SOURCE.get()
        //;mov rax , [_SOURCEIndex]
        //add rax , 2
        //mov [SOURCEIndex] , rax
        

        //invoke printf,'[SOURCEIndex]::: %i %s', [SOURCEIndex], EOL
        //invoke printf,'[SOURCELength]::: %i %s', [SOURCELength], EOL



        jmp .execSOURCELoop

        .endExecSOURCELoop:

    ret




    











    

    function StartMatch(){

        /*SYSTEM.push(declareName,declare)
        SYSTEM.push(logName,log)
        SYSTEM.push(calcName,calc)
        SYSTEM.push(dodajName,calc)
        SYSTEM.push(odejmnijName,calc)
        SYSTEM.push(pomnozName,calc)
        SYSTEM.push(podzielName,calc)
        SYSTEM.push(funcName,func)
        SYSTEM.push(callName,callFunc)
        SYSTEM.push(ifName,ifFunc)*/

        fs.ReadFile(fileName,fileBuffer)
        
        mov [SOURCELength], 0

        strtok([fileBuffer], ' ')
        
        
        .nextTok:
            mov [_len] , rax
            strLen [_len]
            cmp rax, 0
            je .skipEmpty
            
            //printf('SOURCE: %i %s %s', [SOURCELength],[_len], EOL)

            //mov rax, [SOURCELength]
            SOURCE.push([_len])
            add [SOURCELength], 1

            .skipEmpty:
            strtok(0, ' ')
            cmp rax, 0
            je .finishTok
        jmp .nextTok

        .finishTok:

        //printf('SOURCE 0: %s %s', '_len', EOL)


        mov [SOURCEIndex], 0
        call executeSOURCE
        
    }






    

    

    //;val1 dq ?

    //;text2 db 'hello',0
    //;text1 db 'hello world test ',13,'text',0
    //;split1 db '@',0



    //var buffer1// dq ?
    //var bufferTxt = ''

    //var pfile = new cFile()
    //cFile_constructor pfile


    //;SOURCELn cArray
    //;cArray_constructor SOURCELn


    /*var SOURCE = new cSOURCE()
        var DATASETS = new cNamedArray()
        var DATASETS_TYPES = new cNamedArray()
        var FUNCTIONS = new cNamedArray()
        var SYSTEM = new cNamedArray()*/









    

    function Main(){

        printf('START %s', EOL)

        StartMatch()
        //SOURCE.push(text2)
        //SOURCE.push(fileName)
        //invoke printf , 'SOURCE 0==: %s %s', rax, EOL

        //SOURCE.get(0)
        //invoke printf , 'SOURCE 0==: %s %s', rax, EOL
        
        printf('END %s', EOL)
        
    }




    //var DATASETS = new cNamedArray()
    //var DATASETS_TYPES = new cNamedArray()


    //var FUNCTIONS = new cNamedArray()
    
    var SYSTEM = new cNamedArray()

    var SOURCE = new cArray()




    


    //var text2 = 'fileName'

    var fileName = 'test2.pz'

    _len dq ?
    _len2 dq ?
    fileBuffer dq ?


    /*read_loop:


        //; pobranie danych z klawiatury
        mov rax, 0
        mov rcx, inputT
        mov rdx, formatT
        call [scanf]



        ; wyświetlenie wprowadzonej liczby
        ;mov rax, 0
        ;mov rcx, output
        ;mov rdx, inputT
        ;call [printf]


        ; wyczyszczenie zmiennej input
        mov rax, 0
        mov rcx, inputT
        mov rdx, 4
        call [memset]

        createTextMalloc formatTBB
        mov qword[inputT], rax



        jmp read_loop



    ret


    
    output db 'Wprowadziles: %d',0
    formatT db '%d',0
    inputT db 20,0
    formatTBB db '%d',0*/


