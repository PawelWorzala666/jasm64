

    //::app:cmd


    //alert('DUPA')



    function Main(){


        printf('START %s',EOL)

        //dupaFunc()


        /*GetCharAtIndex( 0 ,tekst)

        printf('char %i %s',rax,EOL)
        
        GetCharAtIndex( 1 ,tekst)

        printf('char %i %s',rax,EOL)*/

        PrintOutAllText(tekst,PrintLetter)



        printf('BEGIN %s',EOL)


        printf('END %s',EOL)

    }

    //::proc
    function PrintLetter(char11){
        printf('char %i %s',char11,EOL)
    }
    //::endproc

    function PrintOutAllText(text11,callback11){
        
        mov rdi, 0

        .loop11:
            MOV RCX, offset text11
            ADD RCX, rdi
        
            MOV DL, byte ptr [rcx]
            MOVZX RBX, DL

            mov rax,0
            cmp RBX,rax
            je .endo11

            mov rax,rbx
            //push rcx
            //PrintLetter(rax)
            rcall callback11, rax
            //pop rcx

            add rdi,1

            jmp .loop11
        .endo11:

    }

    function GetCharAtIndex(index,text11){

        MOV RCX, offset text11
        //mov rax, index
        ADD RCX, index
        MOV DL, byte ptr [rcx]

        MOVZX RBX, DL

        mov rax, rbx

    }


    tekst db 'ABC'