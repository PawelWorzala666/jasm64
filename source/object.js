

    //::app:cmd
    /*
    ::config={
        proc: true,
        bbs: false,
        pointers: false,
    }
    */
    
    //::proc
    class cTestObj{
        constructor(){
            this.tfield1 = 110
            this.tfield2 = 111
            this.txt1 = txt1
        }
        print11(){
            printf('obj print %i %s',this.tfield1,EOL)
        }
    }
    //::endproc

    var ptobj = new cTestObj()


    function Main(){


        printf('START %s',EOL)

        ptobj.constructor()

        ptobj.print11()


        printf('END %s',EOL)

    }


    var txt1 = 'test txt'