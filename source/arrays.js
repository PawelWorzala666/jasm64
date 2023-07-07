
    //::app:cmd
    /*
    ::config={
        proc: true,
        bbs: false,
        pointers: false,
        classes: false,
    }
    */




        .data?
        parray_\\array d\\q ?
        .data
        var parray_arrsize = 0
        var parray_arrtotal = 0

        function parray_inir(){
            mov parray_array, alloc(128)
            mov rax,128
            mov parray_arrtotal,rax
        }
        //::proc
        function parray_alloc(){
            mov rax,parray_arrsize
            mov rbx,parray_arrtotal
            sub rbx,1024
            cmp rax,rbx
            jg allocate11
            jmp endo11
            allocate11:
                mov rcx, 1024*8
                mov parray_arrtotal,rcx
                mov rdx,parray_arrtotal
                add rbx,rcx
                //lea rax,parray_array
                //invoke realloc,rax,rbx
                mov parray_array, realloc(parray_array,rbx)
                mov parray_array,rax
            endo11:
        }
        //::endproc
        function parray_print(){
            mov rax,parray_arrtotal
            printf('array total: %i %s', rax, EOL)
            mov rax,parray_arrsize
            printf('array size: %i %s', rax, EOL)
        }
        function parray_getSetPtr(){
            parray_alloc()
            add parray_arrsize, 8
            mov rbx, parray_arrsize
            lea rcx, parray_array
        }
        function parray_pushN(value){
            parray_getSetPtr()
            mov rax,value
            mov [rcx\\+rbx], rax
        }
        function parray_pushT(value){
            parray_getSetPtr()
            lea rax,value
            mov [rcx\\+rbx], rax
        }
        function parray_get(index){
            mov rcx, index
            imul rcx, 8
            lea rdx, parray_array
            add rdx,rcx
            mov rax, \\[rdx]
        }





    

    
    
    function Main(){
        printf('started %s', lf)


        parray_inir()

        
        parray.pushN(num2)
        printf('push 0: %f %s', rax, EOL)
        parray.pushT(ptext1a)
        printf('push 1: %s %s', rax, EOL)
        

        parray.get(1)
        printf('get 0: %f %s', rax, EOL)
        parray.get(2)
        printf('get 1: %s %s', rax, EOL)


        parray_print()

    
        printf('end %s', lf)
    }
    



    var num2 = 443.444
    
    var ptext1a = 'hello world'

    