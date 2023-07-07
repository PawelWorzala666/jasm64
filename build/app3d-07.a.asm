
.data

.code


;0

;1

;2

;5

;6

;7

;8

;9
include models/model-07.a.asm
;10

;11

;12

;13

;14
.data
;15
pModel label cMODEL
;16

;17

;18

;19

;20

;21

;22

.code


SystemInit MACRO

;23

;24
invoke FreeImage_Initialise
;25

;26
InitGLFunctions 
;27

;28

;29

;30

;31

;32

;33

;34

;35

;36

;37

;38

;39
cMODEL_CreateGeometry pModel
;40

;41

;42

;43

;44

;45

;46

;47

;48
invoke glEnable,GL_DEPTH_TEST
;49
invoke glDepthFunc,GL_LEQUAL
;50
invoke glEnable,GL_TEXTURE_2D
;51

;52

;53

;54

;55

;56

;57
movd	xmm3,coloralpha
;58
movd	xmm2,colorcomathree
;59
movd	xmm1,colorcmmasn
;60
movd	xmm0,colorcmmasn
;61
invoke glClearColor
;62

;63

;64

ENDM
.data

;65

;66

;67
colorcomathree dd 0.3
;68
colorcmmasevben dd 0.7
;69
colorcmmasn dd 0.25
;70
coloralpha dd 1.0
;71

;72

;73

.code


SystemRender MACRO

;74

;75

;76
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;77

;78

;79

;80
cMODEL_ModelRender pModel
;81

;82

;83

;84

ENDM
.data

;85

;86

;91

;92

.code


SystemDestroy MACRO

;93

;94

;95

ENDM
.data
