


.data

    var PI = 3.141592653589793238
    var deg2rad = 0.017453292519943295

.daTA?
    var stp1
    var stp2
    var rtt1


    function Math_pomnoz(aram11,aram22,aret33){
        fld qword ptr aram11
        fmul qword ptr aram22
        fstp qword ptr aret33
        //mov rax,rtt1
        //mov aret33,rax
    }
    
    function Math_dodaj(aram11,aram22,aret33){
        fld qword ptr aram11
        fadd qword ptr aram22
        fstp qword ptr aret33
        //mov rax,rtt1
        //mov aret33,rax
    }

    function Math_podziel(aram11,aram22,aret33){
        fld qword ptr aram11
        fdiv qword ptr aram22
        fstp qword ptr aret33
    }

    function Math_sin(aram11,aret33){
        fld qword ptr aram11
        fsin
        fstp qword ptr aret33
    }

    function Math_cos(aram11,aret33){
        fld qword ptr aram11
        fcos
        fstp qword ptr aret33
    }

    function Math_odejmnij(aram11,aram22,aret33){
        fld qword ptr aram11
        fsub qword ptr aram22
        fstp qword ptr aret33
    }

    function Math_sqrt(aram11,aret33){
        fld qword ptr aram11
        fsqrt
        fstp qword ptr aret33
    }


    function Math_tan(aram11,aret33){
        Math_sin(aram11,stp1)
        Math_cos(aram11,stp2)
        fld qword ptr stp1
        fdiv qword ptr stp2
        fstp qword ptr aret33
    }

    function Math_Deg2Rad(aram11,aret33){
        fld qword ptr aram11
        fmul qword ptr deg2rad
        fstp qword ptr aret33
    }

    /*
    function Math_abs(param1, aeturn1){
        if(param1 < 0.0){
            mov rax , [param1]
            imul rax , -1
            mov [aeturn1] , rax
        }else{
            mov rax , [param1]
		    mov [aeturn1] , rax
        }
    }*/


