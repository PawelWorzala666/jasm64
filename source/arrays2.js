
//::app:cmd
/*
::config={
    proc: true,
    bbs: false,
    pointers: false,
    classes: false,
}
*/

        NARRAY STRUCT
            narray QWORD 0
            total QWORD 0
            nsize QWORD 0
        NARRAY ENDS

.data
        naray LABEL NARRAY
            narray   dq (1024) dup(0)
            total   dq  0
            nsize   dq  0




.data
    var parray_arrsize = 0
    var parray_arrtotal = 0
.code
    

    function parray_init(){
        mov rax\\,alloc(128)
        mov naray.narray,rax
        parray_arrtotal = 128
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
            //lea rax,naray.narray
            //invoke realloc,rax,rbx
            mov naray.narray, realloc(naray.narray,rbx)
            mov naray.narray,rax
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
        lea rcx, naray.narray
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
        lea rdx, naray.narray
        add rdx,rcx
        mov rax, \\[rdx]
    }









function Main(){
    printf('started %s', lf)


    parray_init()

    
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

