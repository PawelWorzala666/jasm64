
    include \masm64\include64\masm64rt.inc
    include \masm64\include64\opengl32.inc
    include \masm64\include64\glu32.inc
    
    include \jasm64\include\opengl.inc
    include \jasm64\include\requires.inc

    includelib \masm64\lib64\opengl32.lib
    includelib \masm64\lib64\glu32.lib

    include \jasm64\include\extern.inc


    ;.data
       ; EOL db 13,10,0

    ;.data

    include arrays.asm

    .data?

    ;zip_ctx dq ?

    


    .code

entry_point proc

    ;invoke ippInit

    Main

    invoke ExitProcess,0

    ret

entry_point endp






end