
    //::app:cmd
    /*
    ::config={
        proc: true,
        bbs: false,
        pointers: false,
        arrays: true,
    }
    */

    import 'utils/utils.js'
    import 'utils/math.js'


    //::EXP

//.data?
    //var oout
.data
    var zeroptr11 = 0.0
    var zeroneptr11 = 1.0


//::proc
/*export function mat4_create() {
    mov rax, alloc(16*8)
    //return oout
  }*/

  export function mat4_identity(out) {

    //LOCAL out\\[2]:QWORD
    //;mov rcx, size1
    //mov rax, _out
    //mov out,rax
    //;rep movsq


    out[0] = zeroneptr11
    out[1] = zeroptr11
    out[2] = zeroptr11
    out[3] = zeroptr11
    out[4] = zeroptr11
    out[5] = zeroneptr11
    out[6] = zeroptr11
    out[7] = zeroptr11
    out[8] = zeroptr11
    out[9] = zeroptr11
    out[10] = zeroneptr11
    out[11] = zeroptr11
    out[12] = zeroptr11
    out[13] = zeroptr11
    out[14] = zeroptr11
    out[15] = zeroneptr11
    return out
  }



  
  export function mat4_translate(out, a, v) {
    let x = v[0]
    let y = v[1]
    let z = v[2]

    let a00
    let a01
    let a02
    let a03
    let a10
    let a11
    let a12
    let a13
    let a20
    let a21
    let a22
    let a23
  
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
  
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
  
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];

    return out
  }




  function PrintMatrix2(amatrix1){


    //printf('%s %s',plabel1, EOL)

    printf('%f,',amatrix1[0])
    printf('%f,',amatrix1[1])
    printf('%f,',amatrix1[2])
    printf('%f,',amatrix1[3])
    printf('%s',EOL)

    printf('%f,',amatrix1[4])
    printf('%f,',amatrix1[5])
    printf('%f,',amatrix1[6])
    printf('%f,',amatrix1[7])
    printf('%s',EOL)

    printf('%f,',amatrix1[8])
    printf('%f,',amatrix1[9])
    printf('%f,',amatrix1[10])
    printf('%f,',amatrix1[11])
    printf('%s',EOL)

    printf('%f,',amatrix1[12])
    printf('%f,',amatrix1[13])
    printf('%f,',amatrix1[14])
    printf('%f,',amatrix1[15])
    printf('%s',EOL)

    //printf('%s',EOL)

}

//::endproc



    
    function Main(){
        printf('started %s', EOL)

        //mov matrix1,alloc(128)
        //mov matrix2,alloc(128)
        //mov tarnslate1,alloc(24)
        //lea rax,[matrix1\\+0]
        //mov matrix1,rax

        tarnslate1[0] = num333

        //matrix1 = mat4.create()
        //mov matrix1, alloc(16*8)
        matrix1 = mat4.identity(matrix1)
        //mov matrix1,rax
        PrintMatrix2(matrix1)

        matrix2 = mat4.identity(matrix2)
        //mov matrix2,rax
        PrintMatrix2(matrix2)

        matrix1 = mat4.translate(matrix1,matrix2,tarnslate1)
        //mov matrix1,rax
        PrintMatrix2(matrix1)

        
    
        printf('end %s', EOL)



    }


.data
    matrix1 d\\q (16) dup(0)
    matrix2 d\\q (16) dup(0)
    tarnslate1 d\\q (4) dup(0)


.data
//var tarnslate1 = [0.2,0.8,-6.0]
var num333 = 0.333