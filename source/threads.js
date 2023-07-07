
    //::app:cmd
    /*
    ::config={
        proc: true,
        bbs: false,
        pointers: false,
    }
    */

.data?
    arr dq ?
    hThread dq ?
.data
    var threadsCount = 0
.code
TestThread PROC

        threadsCount++

        printf('THREAD %s',EOL)
        if(threadsCount<16){

            mov hThread, rv(CreateThread,0,0,ADDR TestThread,ADDR arr,0,0)
            fn SleepEx,1,0
        }
        printf('ENDo THREADa %s',EOL)
ret
TestThread ENDP



    function Main(){

        printf('START %s',EOL)
        
        rcall TestThread

        fn SleepEx,1000*8,0

        printf('error %s',EOL)

    }





/*

.code
ThreadManager PROC

    LOCAL arr   :QWORD
    LOCAL hThread  :QWORD
    LOCAL hProcess :QWORD

    ///LOCAL rvar1 :QWORD          ; thread return value

    //LOCAL pvar1 :QWORD          ; its pointer

    //mov pvar1, ptr$(rvar1)      ; load address into pointer
    //mov rvar1, 0                ; set rvar1 to 0

    //;fn callthread,0,1,pvar1

    mov hThread, rv(CreateThread,0,0,ADDR TestThread,ADDR arr,0,0)

    



ThreadManager ENDP
*/

