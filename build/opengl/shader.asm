
.data

.code


;0

;1

;2

;3
.data?
;4

;5

;6

;7

;8

;9

;10

;11

;12

;13

;14

;15

;16

;17
cSHADER STRUCT
 pramID dq 0
 cSHADER ENDS
 
 
.code


cSHADER_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;19

;20

;21

;22

ENDM
.data

 
.code


cSHADER_CreateShader MACRO _this,fvert,ffrag

;24

;25
cFILE_ReadFile file,fvert,meshData
;26
invoke glCreateShader,GL_VERTEX_SHADER
mov vertexShader,rax
;27
cFILE_GetSize file
mov _size1,rax
;28
invoke glShaderSource,vertexShader,1,addr meshData,addr _size1
;29
invoke glCompileShader,vertexShader
;30

;31
cFILE_ReadFile file,ffrag,meshData
;32
invoke glCreateShader,GL_FRAGMENT_SHADER
mov fragmentShader,rax
;33
cFILE_GetSize file
mov _size1,rax
;34
invoke glShaderSource,fragmentShader,1,addr meshData,addr _size1
;35
invoke glCompileShader,fragmentShader
;36

;37
invoke printf, "before creste prog %s",lf
;38

;39
invoke glCreateProgram
mov programID,rax
;40
invoke glAttachShader,programID,vertexShader
;41
invoke glAttachShader,programID,fragmentShader
;42
invoke glLinkProgram,programID
;43
invoke glUseProgram,programID
;44

;45
invoke glDeleteShader,vertexShader
;46
invoke glDeleteShader,fragmentShader
;47

;48
invoke printf, "creste prog %s",lf
;49

;50

;53

;54
invoke printf, "end shad %s",lf
;55

ENDM
.data

 
.code


cSHADER_SetUniform4d MACRO _this,nname,pv1,pv2,pv3,pv4

;57
invoke glGetUniformLocation,programID,nname
mov uniformLocation,rax
;58

;59

;60
movsd xmm0,pv4
;61
movsd xmm1,pv3
;62
movsd xmm2,pv2
;63
movsd xmm3,pv1
;64
movsd  [rsp],xmm0
;65
LOCAL prsp8 :REAL8
Math_dodaj rsp,8,prsp8
movsd  [prsp8],xmm1
;66
LOCAL prsp16 :REAL8
Math_dodaj rsp,16,prsp16
movsd  [prsp16],xmm2
;67
LOCAL prsp24 :REAL8
Math_dodaj rsp,24,prsp24
movsd  [prsp24],xmm3
;68
mov rcx,uniformLocation
;69
mov rdx,1
;70
lea r8,[rsp]
;71
call glUniform4dv
;72

;73

;74

ENDM
.data

 
.code


cSHADER_SetUniform4f MACRO _this,nname,pv1,pv2,pv3,pv4

;76
invoke glGetUniformLocation,programID,nname
mov uniformLocation,rax
;77

;78

;79
movsd xmm0,pv4
;80
movsd xmm1,pv3
;81
movsd xmm2,pv2
;82
movsd xmm3,pv1
;83
movsd  [rsp],xmm0
;84
LOCAL prsp8 :REAL8
Math_dodaj rsp,8,prsp8
movsd  [prsp8],xmm1
;85
LOCAL prsp16 :REAL8
Math_dodaj rsp,16,prsp16
movsd  [prsp16],xmm2
;86
LOCAL prsp24 :REAL8
Math_dodaj rsp,24,prsp24
movsd  [prsp24],xmm3
;87
mov rcx,uniformLocation
;88
mov rdx,1
;89
lea r8,[rsp]
;90
call glUniform4fv
;91

;92

;93

ENDM
.data

 
.code


cSHADER_SetUniform1d MACRO _this,nname,value

;95
invoke glGetUniformLocation,programID,nname
mov uniformLocation,rax
;96

;97

;98

;102
invoke glUniform1d,uniformLocation,value
;103

;104

ENDM
.data

 
.code


cSHADER_SetUniform1i MACRO _this,nname,value

;106
invoke glGetUniformLocation,programID,nname
mov uniformLocation,rax
;107

;108

;111
invoke glUniform1i,uniformLocation,value
;112

;113

ENDM
.data

 
.code


cSHADER_SetUniformMatrix MACRO _this,nname,value

;126
invoke glGetUniformLocation,programID,nname
mov uniformLocation,rax
;127

;128
invoke glUniformMatrix4dv,uniformLocation,1,0,addr value
;129

;130

ENDM
.data

 
.code


cSHADER_Use MACRO _this

;132
invoke glUseProgram,programID
;133

ENDM
.data

 
 
;135

;136

;137

;138

;139
