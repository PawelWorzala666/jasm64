

    //::app:cmd


    //alert('DUPA')

.data?
    var handle
    var buffor1
    var fsize
.data
    var file1 = 'numbers.bin'


    function Main(){


        printf('START %s',EOL)




        handle = CreateFile(addr file1, GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)

                
        fsize = GetFileSize(handle, 0)

                printf('size... %i %s',fsize,EOL)


                buffor1 = alloc(fsize)

                
                ReadFile(handle, buffor1, fsize, 0, 0)

              

                CloseHandle(handle)



                lea rdi, buffor1
                mov rbx,[rdi\\+0]

                mov rax,[rbx\\+0]
        printf('number 1... %i %s',rax,EOL)

        mov rax,[rbx\\+8]
        printf('number 2... %i %s',rax,EOL)



        printf('END %s',EOL)

    }

  