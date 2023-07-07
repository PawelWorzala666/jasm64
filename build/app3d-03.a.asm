
.data
tentt2 dq 10.0
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

;12
include models/model-03.a.asm
;13

;14

;15

;16

;17
.data
;18
pModel label cMODEL
;19

;20
shader1 label cSHADER
;21

;22

;23

;24

;25

;26

;27

;28

.code


SystemInit MACRO

;29

;30
invoke FreeImage_Initialise
;31

;32
InitGLFunctions 
;33

;34

;35

;36

;37

;38

;39

;40
cSHADER_CreateShader shader1,"shaders\points.vert","shaders\points.frag"
;41

;42

;43

;44

;45
cMODEL_CreateGeometry pModel
;46

;47

;48

;49

;50

;51

;52

;53

;54
invoke glEnable,GL_DEPTH_TEST
;55
invoke glDepthFunc,GL_LEQUAL
;56
invoke glEnable,GL_TEXTURE_2D
;57

;58

;59
invoke glPointSize,tentt2
;60

;61

;62

;63

;64

;65

;66
movd	xmm3,coloralpha
;67
movd	xmm2,colorcomathree
;68
movd	xmm1,colorcmmasn
;69
movd	xmm0,colorcmmasn
;70
invoke glClearColor
;71

;72

;73

ENDM
.data

;74

;75

;76

;77
colorcomathree dd 0.3
;78
colorcmmasevben dd 0.7
;79
colorcmmasn dd 0.25
;80
coloralpha dd 1.0
;81

;82

;83

.code


SystemRender MACRO

;84

;85

;86
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;87

;88

;89

;90
cMODEL_ModelRender pModel
;91

;92

;93

;94

ENDM
.data

;95

;96

;101

.code


SystemDestroy MACRO

;102

;103

;104

ENDM
.data
