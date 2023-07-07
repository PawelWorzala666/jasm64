




function PrintMatrix(plabel1,amatrix1){


    printf('%s %s',plabel1, EOL)

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


function FromWordToDQ(){
    movzx rax, word ptr lParam[0]
    mov mouse.posX, rax
}


