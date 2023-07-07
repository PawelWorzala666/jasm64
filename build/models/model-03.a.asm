
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
.data?
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
cMODEL STRUCT
 V_AO dq 0
bu_fferID dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov qword ptr _this+8,rax

mov rax,qword ptr 0
mov qword ptr _this+16,rax

;24

;25

;26

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;28

;29

;30

;31

;32

;33

;34

;35
invoke glGenVertexArrays,1,addr VAO
;36
invoke glBindVertexArray,VAO
;37

;38
invoke glGenBuffers,1,addr bufferID
;39
invoke glBindBuffer,GL_ARRAY_BUFFER,bufferID
;40
invoke glBufferData,GL_ARRAY_BUFFER,144,addr vertices,GL_STATIC_DRAW
;41

;42
invoke glEnableVertexAttribArray,0
;43
invoke glVertexAttribPointer,0,3,GL_DOUBLE,GL_FALSE,24,0
;44

;45

;51

;52

;53

;54

;55

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

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

;68

;69

;70

;71

;74

;75

;76

;77

;78

;79
invoke glBindVertexArray,VAO
;80

;81

;82

;83
invoke glDrawArrays,GL_TRIANGLES,0,6
;84

;85

;86

;87

;88

;89

;90

ENDM
.data

 
 
;92

;113

;114

;115
.data
;116

;117
 frameID dq 0
;118
 frmoneptr dq 1
;119

;120

;121
.data?
;122

;123

;124

;125

;126
