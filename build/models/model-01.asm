
.data

.code


;0

;1
.data?
;2

;3

;4

;5

;6

;7

;8
.data
;9

;10
projection dq 1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0
;11
camera dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-9.000090086,1.0
;12
model dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0
;13

;14

;15
.data?
;16

;17

;18
cMODEL STRUCT
 VAO dq 0
bufferID dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov qword ptr _this+8,rax

mov rax,qword ptr 0
mov qword ptr _this+16,rax

;20

;21

;22

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;24

;25

;26

;27

;28
LoadTexture "textures\girl.jpg",textures1
;29

;30

;31
invoke glGenVertexArrays,1,addr VAO
;32
invoke glBindVertexArray,VAO
;33

;34
invoke glGenBuffers,1,addr bufferID
;35
invoke glBindBuffer,GL_ARRAY_BUFFER,bufferID
;36
invoke glBufferData,GL_ARRAY_BUFFER,144,addr vertices,GL_STATIC_DRAW
;37

;38
invoke glEnableVertexAttribArray,0
;39
invoke glVertexAttribPointer,0,3,GL_DOUBLE,GL_FALSE,24,0
;40

;41
invoke glGenBuffers,1,addr bufferCoordID
;42
invoke glBindBuffer,GL_ARRAY_BUFFER,bufferCoordID
;43
invoke glBufferData,GL_ARRAY_BUFFER,96,addr coords,GL_STATIC_DRAW
;44

;45
invoke glEnableVertexAttribArray,1
;46
invoke glVertexAttribPointer,1,2,GL_DOUBLE,GL_FALSE,16,0
;47

;48

;49

;50

;51

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;53

;54

;55

;56

;57

;58

;59

;60

;61

;62

;63

;64

;65

;66

;67
invoke glActiveTexture,GL_TEXTURE0
;68
invoke glBindTexture,GL_TEXTURE_2D,textures1
;69
cSHADER_SetUniform1i shader1,"diffuseTexture",0
;70

;71

;72
invoke glBindVertexArray,VAO
;73

;74

;75

;76
invoke glDrawArrays,GL_TRIANGLES,0,6
;77

;78

;79

;80

ENDM
.data

 
 
;82

;83

;84
.data
;85

;86
 frameID dq 0
;87
 frmoneptr dq 1
;88

;89

;90
.data?
;91

;92
.data
;93

;94
vertices dq 1.0,1.0,0.0,1.0,-1.0,0.0,-1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,1.0,0.0
;95
coords dq 1.0,1.0,1.0,0.0,0.0,0.0,1.0,1.0,0.0,0.0,0.0,1.0
;96

;97

;98

.code


SystemDestroy MACRO

;99

;100

;101

ENDM
.data
