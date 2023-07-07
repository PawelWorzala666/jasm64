
.data

.code


;0

;1

;2

;5

;6

;7
include opengl/uniform.a.asm
;8
include utils/file.a.asm
;9
include opengl/texture.a.asm
;10
include opengl/shader.a.asm
;11
include models/model-01.a.asm
;12

;13

;14

;15

;16
.data
;17
pModel label cMODEL
;18

;19
shader1 label cSHADER
;20

;21

;22

;23

;24

.code


SystemInit MACRO

;25

;26
invoke FreeImage_Initialise
;27

;28
InitGLFunctions 
;29

;30

;31

;32

;33

;34

;35

;36
cSHADER_CreateShader shader1,"shaders\draw2d.vert","shaders\draw2d.frag"
;37

;38

;39

;40

;41
cMODEL_CreateGeometry pModel
;42

;43

;44

;45

;46

;47

;48

;49

;50
invoke glEnable,GL_DEPTH_TEST
;51
invoke glDepthFunc,GL_LEQUAL
;52
invoke glEnable,GL_TEXTURE_2D
;53

;54

;55

;56
mov TestThreadHANDLE,rv(CreateThread,0,0,ADDR TestThread,ADDR TestThreadID,0,0)
;57

;58

;59
movd	xmm3,coloralpha
;60
movd	xmm2,colorcomathree
;61
movd	xmm1,colorcmmasn
;62
movd	xmm0,colorcmmasn
;63
invoke glClearColor
;64

;65

;66

ENDM
.data

;67

;68

;69
colorcomathree dd 0.3
;70
colorcmmasevben dd 0.7
;71
colorcmmasn dd 0.25
;72
coloralpha dd 1.0
;73

;74

;75

.code


SystemRender MACRO

;76

;77

;78
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;79

;80

;81

;82
cMODEL_ModelRender pModel
;83

;84

;85

;86

ENDM
.data

;87

;88

.code
TestThread PROC

;89

;90
invoke printf, "THREAD %s",lf
;91

;92

ret
TestThread ENDP
.data

;93
