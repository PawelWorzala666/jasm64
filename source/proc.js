

    //::app:cmd
    /*
    ::config={
        proc: true,
        bbs: false,
        pointers: false,
    }
    */



    //::proc
    function alert111(){

        printf('alert111 %s',EOL)

    }
    //::endproc


    function Main(){


        printf('START %s',EOL)

        alert111()

        printf('BEGIN %s',EOL)


        printf('END %s',EOL)

    }


