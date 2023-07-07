
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

;9

;10
.data
;11

;12
projection11 dq 1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0
;13
camera11 dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-9.000090086,1.0
;14
model11 dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0
;15

;16

;17
.data
;18

;19
vertices dq 1.0,1.0,0.0,1.0,-1.0,0.0,-1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,1.0,0.0
;20
coords dq 1.0,1.0,1.0,0.0,0.0,0.0,1.0,1.0,0.0,0.0,0.0,1.0
;21

;22

;23
.data?
;24

;25

;26
cMODEL STRUCT
 VA_O dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;28

;29

;30

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;32

;33

;34

;35

;36
LoadTexture "textures\font.png",textures1
;37

;38

;39
invoke glGenVertexArrays,1,addr VAO
;40
invoke glBindVertexArray,VAO
;41

;42
invoke glGenBuffers,1,addr bufferID
;43
invoke glBindBuffer,GL_ARRAY_BUFFER,bufferID
;44
invoke glBufferData,GL_ARRAY_BUFFER,144,addr vertices,GL_STATIC_DRAW
;45

;46
invoke glEnableVertexAttribArray,0
;47
invoke glVertexAttribPointer,0,3,GL_DOUBLE,GL_FALSE,24,0
;48

;49
invoke glGenBuffers,1,addr bufferCoordID
;50
invoke glBindBuffer,GL_ARRAY_BUFFER,bufferCoordID
;51
invoke glBufferData,GL_ARRAY_BUFFER,96,addr coords,GL_STATIC_DRAW
;52

;53
invoke glEnableVertexAttribArray,1
;54
invoke glVertexAttribPointer,1,2,GL_DOUBLE,GL_FALSE,16,0
;55

;56

;57

;58

;59

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;61

;62

;63

;64

;65

;66

;67

;68

;69

;70

;71

;72

;73

;74

;75
invoke glActiveTexture,GL_TEXTURE0
;76
invoke glBindTexture,GL_TEXTURE_2D,textures1
;77
cSHADER_SetUniform1i shader1,"diffuseTexture",0
;78

;79

;80
invoke glBindVertexArray,VAO
;81

;82

;83

;84
invoke glDrawArrays,GL_TRIANGLES,0,6
;85

;86

;87

;88

ENDM
.data

 
 
;90

;91

;92

;93

;94

;95

;96

;97

;98

;99

;100

;101

;102

;103
