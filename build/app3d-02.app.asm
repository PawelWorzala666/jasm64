

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

    .code


    include app3d-02.asm



    SCREEN STRUCT
        itop QWORD 0
        ileft QWORD 0
        iwidth QWORD 0
        iheight QWORD 0
        fwidth REAL8 0
        fheight REAL8 0
    SCREEN ENDS

    MOUSE STRUCT
        posX QWORD 0
        posY QWORD 0
    MOUSE ENDS



    .data?
      hInstance dq ?
      hWnd      dq ?
      hIcon     dq ?
      hCursor   dq ?
      sWid      dq ?
      sHgt      dq ?
      hBrush    dq ?
      
      hDC	dq	?
      hRC	dq	?
      w dd ?
      h dd ?
      ps dd ?

      texture		dq ?
      texID dq ?

      stp1 dq ?
stp2 dq ?
rtt1 dq ?
ooout dq ?
a20 dq ?
a10 dq ?
a00 dq ?
pa20z dq ?
pa10y dq ?
pa00x dq ?
a21 dq ?
a11 dq ?
a01 dq ?
pa21z dq ?
pa11y dq ?
pa01x dq ?
a22 dq ?
a12 dq ?
a02 dq ?
pa22z dq ?
pa12y dq ?
pa02x dq ?
a23 dq ?
a13 dq ?
a03 dq ?
pa23z dq ?
pa13y dq ?
pa03x dq ?
ppa20za dq ?
ppa10yppa20za dq ?
ppa00xppa10yppa20za dq ?
ppa21za dq ?
ppa11yppa21za dq ?
ppa01xppa11yppa21za dq ?
ppa22za dq ?
ppa12yppa22za dq ?
ppa02xppa12yppa22za dq ?
ppa23za dq ?
ppa13yppa23za dq ?
ppa03xppa13yppa23za dq ?
x dq ?
y dq ?
z dq ?
a dq ?
pav dq ?
pyy dq ?
pxx dq ?
sqr11 dq ?
rad dq ?
pxpxt dq ?
pypxt dq ?
pzpxt dq ?
pxpyt dq ?
pypyt dq ?
pzpyt dq ?
pxpzt dq ?
pypzt dq ?
pzpzt dq ?
pa10b01 dq ?
pa00b00 dq ?
pa11b01 dq ?
pa01b00 dq ?
pa12b01 dq ?
pa02b00 dq ?
pa13b01 dq ?
pa03b00 dq ?
pa10b11 dq ?
pa00b10 dq ?
pa11b11 dq ?
pa01b10 dq ?
pa12b11 dq ?
pa02b10 dq ?
pa13b11 dq ?
pa03b10 dq ?
pa10b21 dq ?
pa00b20 dq ?
pa11b21 dq ?
pa01b20 dq ?
pa12b21 dq ?
pa02b20 dq ?
pa13b21 dq ?
pa03b20 dq ?
pzz dq ?
ppyypzz dq ?
ppxxppyypzz dq ?
pnnonepttr222len11 dq ?
pxlen11 dq ?
pylen11 dq ?
pzlen11 dq ?
pnnonepttr222c dq ?
pxt dq ?
ppxpxtc dq ?
pzs dq ?
ppypxtpzs dq ?
pys dq ?
ppzpxtpys dq ?
pyt dq ?
ppxpytpzs dq ?
ppypytc dq ?
pxs dq ?
ppzpytpxs dq ?
pzt dq ?
ppxpztpys dq ?
ppypztpxs dq ?
ppzpztc dq ?
pa20b02 dq ?
ppa10b01pa20b02 dq ?
ppa00b00ppa10b01pa20b02 dq ?
pa21b02 dq ?
ppa11b01pa21b02 dq ?
ppa01b00ppa11b01pa21b02 dq ?
pa22b02 dq ?
ppa12b01pa22b02 dq ?
ppa02b00ppa12b01pa22b02 dq ?
pa23b02 dq ?
ppa13b01pa23b02 dq ?
ppa03b00ppa13b01pa23b02 dq ?
pa20b12 dq ?
ppa10b11pa20b12 dq ?
ppa00b10ppa10b11pa20b12 dq ?
pa21b12 dq ?
ppa11b11pa21b12 dq ?
ppa01b10ppa11b11pa21b12 dq ?
pa22b12 dq ?
ppa12b11pa22b12 dq ?
ppa02b10ppa12b11pa22b12 dq ?
pa23b12 dq ?
ppa13b11pa23b12 dq ?
ppa03b10ppa13b11pa23b12 dq ?
pa20b22 dq ?
ppa10b21pa20b22 dq ?
ppa00b20ppa10b21pa20b22 dq ?
pa21b22 dq ?
ppa11b21pa21b22 dq ?
ppa01b20ppa11b21pa21b22 dq ?
pa22b22 dq ?
ppa12b21pa22b22 dq ?
ppa02b20ppa12b21pa22b22 dq ?
pa23b22 dq ?
ppa13b21pa23b22 dq ?
ppa03b20ppa13b21pa23b22 dq ?
len11 dq ?
s dq ?
c dq ?
t dq ?
b00 dq ?
b01 dq ?
b02 dq ?
b10 dq ?
b11 dq ?
b12 dq ?
b20 dq ?
b21 dq ?
b22 dq ?
pa10c dq ?
pa11c dq ?
pa12c dq ?
pa13c dq ?
pa20c dq ?
pa21c dq ?
pa22c dq ?
pa23c dq ?
pa20s dq ?
ppa10cpa20s dq ?
pa21s dq ?
ppa11cpa21s dq ?
pa22s dq ?
ppa12cpa22s dq ?
pa23s dq ?
ppa13cpa23s dq ?
pa10s dq ?
ppa20cpa10s dq ?
pa11s dq ?
ppa21cpa11s dq ?
pa12s dq ?
ppa22cpa12s dq ?
pa13s dq ?
ppa23cpa13s dq ?
pa00c dq ?
pa01c dq ?
pa02c dq ?
pa03c dq ?
pa00s dq ?
pa01s dq ?
pa02s dq ?
pa03s dq ?
ppa00cpa20s dq ?
ppa01cpa21s dq ?
ppa02cpa22s dq ?
ppa03cpa23s dq ?
ppa00spa20c dq ?
ppa01spa21c dq ?
ppa02spa22c dq ?
ppa03spa23c dq ?
ppa00cpa10s dq ?
ppa01cpa11s dq ?
ppa02cpa12s dq ?
ppa03cpa13s dq ?
ppa10cpa00s dq ?
ppa11cpa01s dq ?
ppa12cpa02s dq ?
ppa13cpa03s dq ?
vfovy dq ?
ff5 dq ?
f dq ?
vnear dq ?
vfar dq ?
ffnn343 dq ?
two dq ?
ponyptr1ff2 dq ?
pfvaspect dq ?
pvnearvfar dq ?
ponyptr1vnff2 dq ?
pvfarvnear dq ?
pffnn343nf dq ?
pvnearnf dq ?
pvfarpvnearnf dq ?
ptwoonyptr1pvfarpvnearnf dq ?
ff2 dq ?
vnff2 dq ?
nf dq ?
eyex dq ?
eyey dq ?
eyez dq ?
z2 dq ?
z1 dq ?
z0 dq ?
pz1z1 dq ?
pz0z0 dq ?
rr2 dq ?
upz dq ?
upy dq ?
pupyz2 dq ?
upx dq ?
pupzz0 dq ?
pupxz1 dq ?
x2 dq ?
x1 dq ?
x0 dq ?
px1x1 dq ?
px0x0 dq ?
pz1x2 dq ?
pz2x0 dq ?
pz0x1 dq ?
y2 dq ?
y1 dq ?
y0 dq ?
py1y1 dq ?
py0y0 dq ?
ssqq11 dq ?
px1eyey dq ?
px0eyex dq ?
py1eyey dq ?
py0eyex dq ?
pz1eyey dq ?
pz0eyex dq ?
peyexcenterx dq ?
peyeycentery dq ?
peyezcenterz dq ?
pz2z2 dq ?
ppz1z1pz2z2 dq ?
ppz0z0ppz1z1pz2z2 dq ?
pplnone11rr1 dq ?
pz0len21 dq ?
pz1len21 dq ?
pz2len21 dq ?
pupzz1 dq ?
ppupyz2pupzz1 dq ?
pupxz2 dq ?
ppupzz0pupxz2 dq ?
pupyz0 dq ?
ppupxz1pupyz0 dq ?
px2x2 dq ?
ppx1x1px2x2 dq ?
ppx0x0ppx1x1px2x2 dq ?
pplnone11len21 dq ?
px0len21 dq ?
px1len21 dq ?
px2len21 dq ?
pz2x1 dq ?
ppz1x2pz2x1 dq ?
pz0x2 dq ?
ppz2x0pz0x2 dq ?
pz1x0 dq ?
ppz0x1pz1x0 dq ?
py2y2 dq ?
ppy1y1py2y2 dq ?
ppy0y0ppy1y1py2y2 dq ?
px2eyez dq ?
ppx1eyeypx2eyez dq ?
ppx0eyexppx1eyeypx2eyez dq ?
pmino11ne11tt1 dq ?
py2eyez dq ?
ppy1eyeypy2eyez dq ?
ppy0eyexppy1eyeypy2eyez dq ?
pmino11ne11tt2 dq ?
pz2eyez dq ?
ppz1eyeypz2eyez dq ?
ppz0eyexppz1eyeypz2eyez dq ?
pmino11ne11tt3 dq ?
len21 dq ?
centerx dq ?
centery dq ?
centerz dq ?
rr1 dq ?
tt1 dq ?
tt2 dq ?
tt3 dq ?
v dq ?
glGenBuffers dq ?
glCreateShader dq ?
glCreateProgram dq ?
glShaderSource dq ?
glCompileShader dq ?
glAttachShader dq ?
glLinkProgram dq ?
glUseProgram dq ?
glGetUniformLocation dq ?
glUniform4f dq ?
glUniform4d dq ?
glUniform1d dq ?
glUniform1i dq ?
glUniform3dv dq ?
glUniformMatrix4dv dq ?
glBindBuffer dq ?
glBufferData dq ?
glVertexAttribPointer dq ?
glEnableVertexAttribArray dq ?
glGenVertexArrays dq ?
glBindVertexArray dq ?
glDeleteShader dq ?
glCreateFramebuffers dq ?
glBindFramebuffer dq ?
glFramebufferTexture2D dq ?
glValidateProgram dq ?
glActiveTexture dq ?
glGenerateMipmap dq ?
glUniform4fv dq ?
glUniform1iv dq ?
glUniform4dv dq ?
_fsize1 dq ?
hDib dq ?
hDib32 dq ?
wFormat dq ?
dwWidth dq ?
dwHeight dq ?
lpBits dq ?
meshData dq ?
uniformLocation dq ?
prop1 dq ?
prop2 dq ?
prop3 dq ?
prop4 dq ?
vertexShader dq ?
fragmentShader dq ?
programID dq ?
_size1 dq ?
bufferID dq ?
bufferCoordID dq ?
VAO dq ?
ptextureID1 dq ?
textures1 dq ?



    .data
      classname db "worzala_scene_class",0
      caption db "WooRrrZala SceNeeE",0

      mbtitle db "WooRrrZala SceNeeE",0
      mbtext db "WooRrrZala SceNeeE MessageBox",0
      pttl dq mbtitle
      ptxt dq mbtext

    screen label SCREEN
      ileft   dq  32
      itop    dq  32
      iwidth  dq  1280
      iheight dq  840
      fwidth  dq  1280.0
      fheight dq  840.0

    mouse label MOUSE
      posX dq 0
      posY dq 0



  WINDOWWIDTH  equ 440
  WINDOWHEIGHT equ 400


  PixFrm  label	PIXELFORMATDESCRIPTOR 
	  nSize             dw	sizeof PIXELFORMATDESCRIPTOR
  	nVersion          dw	1
  	dwFlags           dd	PFD_SUPPORT_OPENGL or PFD_DOUBLEBUFFER or PFD_DRAW_TO_WINDOW
  	iPixelType        db	PFD_TYPE_RGBA
  	cColorBits        db	32;Select Our Color Depth
  	cRedBits          db	0
  	cRedShift         db	0
  	cGreenBits        db	0
  	cGreenShift       db	0
  	cBlueBits         db	0
  	cBlueShift        db	0;Color Bits Ignored
  	cAlphaBits        db	0;No Alpha Buffer
  	cAlphaShift       db	0;Shift Bit Ignored
  	cAccumBits        db	0;No Accumulation Buffer
  	cAccumRedBits     db	0
  	cAccumGreenBits   db	0
  	cAccumBlueBits    db	0
  	cAccumAlphaBits   db	0;Accumulation Bits Ignored
  	cDepthBits        db	16;16Bit Z-Buffer (Depth Buffer)
  	cStencilBits      db	0;No Stencil Buffer
  	cAuxBuffers       db	0;No Auxiliary Buffer
  	iLayerType        db	PFD_MAIN_PLANE;Main Drawing Layer
  	bReserved         db	0;Reserved
  	dwLayerMask       dd	0
  	dwVisibleMask     dd	0
  	dwDamageMask      dd	0;Layer Masks Ignored


      _title db 'OpenGL example',0
      _class db 'FASMOPENGL32',0





    .code



entry_point proc

    ;GdiPlusBegin                    ; initialise GDIPlus

    mov hInstance, rvcall(GetModuleHandle,0)
    mov hIcon,     rvcall(LoadIcon,hInstance,10)
    mov hCursor,   rvcall(LoadCursor,0,IDC_ARROW)
    ;mov sWid,      rvcall(GetSystemMetrics,SM_CXSCREEN)
    ;mov sHgt,      rvcall(GetSystemMetrics,SM_CYSCREEN)
    ;mov hBrush,    rvcall(CreateSolidBrush,00C4C4C4h)

    call main

    ;GdiPlusEnd                      ; GdiPlus cleanup

    rcall ExitProcess,0

    ret

entry_point endp

;    .data?
  ;      arr dq ?
  ;      hThread dq ?
 ;   .code

;TestThread PROC
   ; invoke printf,"THREDED %s",lf
   ; ret
;TestThread ENDP

main proc

    LOCAL wc      :WNDCLASSEX
    ;LOCAL lft     :QWORD
    ;LOCAL top     :QWORD
    ;LOCAL wid     :QWORD
    ;LOCAL hgt     :QWORD



       ; //await TestThread()
        ;mov hThread, rv(CreateThread,0,0, addr TestThread,addr arr,0,0)
        ;fn SleepEx,1,0



    mov wc.cbSize,         SIZEOF WNDCLASSEX
    mov wc.style,          CS_BYTEALIGNCLIENT or CS_BYTEALIGNWINDOW
    mov wc.lpfnWndProc,    ptr$(WndProc)
    mov wc.cbClsExtra,     0
    mov wc.cbWndExtra,     0
    mrm wc.hInstance,      hInstance
    mrm wc.hIcon,          hIcon
    mrm wc.hCursor,        hCursor
    mrm wc.hbrBackground,  hBrush
    mov wc.lpszMenuName,   0
    mov wc.lpszClassName,  ptr$(classname)
    mrm wc.hIconSm,        hIcon

    lea rcx, wc
    call RegisterClassEx

    ;mov wid, rvcall(getpercent,sWid,65)     ; 65% screen width
    ;mov hgt, rvcall(getpercent,sHgt,65)     ; 65% screen height

    ;rcall aspect_ratio,hgt,45               ; height + 45%
    ;cmp wid, rax                            ; if wid > rax
    ;jle @F
    ;mov wid, rax                            ; set wid to rax
  ;@@:
    ;mov rax, sWid                           ; calculate offset from left side
    ;sub rax, wid
    ;shr rax, 1
    ;mov lft, rax

    ;mov rax, sHgt                           ; calculate offset from top edge
   ; sub rax, hgt
    ;shr rax, 1
    ;mov top, rax

  ; ---------------------------------
  ; centre window at calculated sizes
  ; ---------------------------------
    invoke CreateWindowEx,WS_EX_LEFT or WS_EX_ACCEPTFILES, \
                          ADDR classname,ADDR caption, \
                          WS_OVERLAPPEDWINDOW or WS_VISIBLE,\
                          screen.ileft,screen.itop,\
                          screen.iwidth,screen.iheight,\
                          0,0,hInstance,0
    mov hWnd, rax

    call msgloop

    ret

main endp



msgloop proc

    LOCAL msg    :MSG
    LOCAL pmsg   :QWORD

    mov pmsg, ptr$(msg)                     ; get the msg structure address
    jmp gmsg                                ; jump directly to GetMessage()

  mloop:
    rcall TranslateMessage,pmsg
    rcall DispatchMessage,pmsg
  gmsg:
    test rax, rvcall(GetMessage,pmsg,0,0,0) ; loop until GetMessage returns zero
    jnz mloop

    ret

msgloop endp



WndProc proc hWin:QWORD,uMsg:QWORD,wParam:QWORD,lParam:QWORD

    LOCAL dfbuff[260]:BYTE
    LOCAL pbuff :QWORD

    .switch uMsg
      .case WM_COMMAND
        .switch wParam
          .case 200
            rcall SendMessage,hWin,WM_SYSCOMMAND,SC_CLOSE,NULL
          .case 300
            invoke MsgboxI,hWin, \
                   "Wickedly Crafted In Microsoft Assembler (MASM)", \
                   "About rcall and rvcall Test",MB_OK,10
        .endsw

      .case WM_CREATE
            ;rcall LoadMenu,hInstance,100
            ;rcall SetMenu,hWin,rax

            invoke	GetDC
            mov	hDC,rax

            lea	rdx,  [PixFrm]
            invoke	ChoosePixelFormat,hDC,rdx
 
            lea	r8d,  [PixFrm]
            invoke	SetPixelFormat,hDC,rax,r8d
    
            invoke	wglCreateContext,hDC
            mov	hRC,rax
    
            invoke	wglMakeCurrent,hDC,eax
            



            invoke	glEnable,GL_TEXTURE_2D
            invoke	glShadeModel,GL_SMOOTH


                SystemInit

                ;invoke SetForegroundWindow, hWin


            .return 0

      ;.case WM_DROPFILES
      ;      mov pbuff, ptr$(dfbuff)
      ;      rcall DragQueryFile,wParam,0,pbuff,260
      ;      invoke MsgboxI,hWin,ADDR dfbuff,"Drop File Name",MB_OK,10

      .case WM_CLOSE
            rcall SendMessage,hWin,WM_DESTROY,0,0

      .case WM_DESTROY

            SystemDestroy

            rcall PostQuitMessage,NULL

      .case WM_SIZE

            movzx	r8d,r9w
            mov	w,r8d
            shr	r9d,16
            mov	h,r9d
            invoke	glViewport,0,0;,640,640
            ;invoke	glMatrixMode,GL_PROJECTION
            ;invoke	glLoadIdentity
        
            ;movq	xmm3,constd100
            ;movq	xmm2,constd0_1
            ;cvtsi2sd xmm1,w
            ;cvtsi2sd xmm0,h
            ;divsd	xmm1,xmm0
            ;movq	xmm0,constd45
            ;invoke	gluPerspective
        
            ;invoke	glMatrixMode,GL_MODELVIEW
            ;invoke	glLoadIdentity

        .case WM_PAINT


            ;invoke GetCursorPos, dword ptr MyPoint
            ;mov rax, qword ptr MyPoint
            ;invoke printf, "MyPoint.x... %i %s", rax, lf

            ;lea	edx,ps
            ;invoke  BeginPaint

            SystemRender
            
            ;invoke  glFlush

            invoke	SwapBuffers,hDC
            ;lea	edx,ps
            ;invoke  EndPaint,hWin

        .case WM_MOUSEMOVE

            movzx rax, word ptr lParam[0]
            mov mouse.posX, rax
            movzx rax, word ptr lParam[2]
            mov mouse.posY, rax
            ;invoke printf, "MyPoint.x... %i %i %s", mouse.posX, mouse.posY, lf


    .endsw

    rcall DefWindowProc,hWin,uMsg,wParam,lParam

    ret

WndProc endp



.data
    constd07 dd 0.7
    consta09 dd 0.9
    consta10 dd 1.0



end