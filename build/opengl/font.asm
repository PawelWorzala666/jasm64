
.data
troneptr1Y dq 1.0
fntOffsetX dq 0.0
fntDefWidth dq 0.1
fnMaxWidth dq 64.0
newfntOffsetX dq 0.0
fntOffsetX22 dq 0.0
fntDefFactrrX dq 1.953
.code


;0

;1

;2
.data
;3
 troneptr1X dq -1.0
;4

;5

;6

;7

;8

;9

;10

;11

;12

.code


DrawLetter MACRO number

;13

;14
mov numLtr1,number
;15

;16

;17
lea rax,widthsFnt
;18

;19
imul rcx,8
;20
mov rax,qword ptr [rax+rcx]
;21
mov wiid,rax
;22

;23
invoke printf, "wiid %f %s",wiid,lf
;24

;25
mat4_identity matrix1
;26
mat4_translate matrix1,matrix1,translate1
;27
mat4_scale matrix1,matrix1,scale1
;28

;29

;30

;31

;32

;33

;34

;35
Math_podziel wiid,fnMaxWidth,fntOffsetX
;36

;37
invoke printf, "%f %s",fntOffsetX,lf
;38

;39
Math_pomnoz fntOffsetX,fntDefWidth,newfntOffsetX
;40

;41
invoke printf, "ff %f %s",newfntOffsetX,lf
;42

;43

;44

;45
Math_pomnoz fntDefFactrrX,newfntOffsetX,newfntOffsetX
;46

;47
invoke printf, "%f %s",newfntOffsetX,lf
;48

;49

;50

;51
RenderLetter numLtr1
;52

;53

;54
Math_dodaj  qword ptr translate1[0],newfntOffsetX, qword ptr translate1[0]
;55

;56
invoke printf, "tt %f %s", qword ptr translate1[0],lf
;57

;58

;59

;60

;61

;62

;63

ENDM
.data

;64

;65

.code


RenderLetter MACRO number

;66

;67
mov rax,number
;68
mov  tmpNumber11,rax
;69

;70
cSHADER_SetUniform1i shader1,"fontIndex",tmpNumber11
;71

;72
cSHADER_SetUniform1d shader1,"fontWidth",wiid
;73

;74
cSHADER_SetUniformMatrix shader1,"projection",projection
;75
cSHADER_SetUniformMatrix shader1,"camera",camera
;76
cSHADER_SetUniformMatrix shader1,"model",matrix1
;77

;78

;79

;80

;81

;82
cMODEL_ModelRender pModel
;83

;84

ENDM
.data

;85

;86

.code


PrintOutAllText MACRO text11

;87

;88
mov rdi,0
;89
mov RDIptr,rdi
;90

;91
.loop11:
;92
MOV RCX,offset text11
;93
mov rax,qword ptr RDIptr
;94
mov rdi,rax
;95
ADD RCX,rdi
;96

;97
MOV DL,byte ptr [rcx]
;98
MOVZX RBX,DL
;99

;100
mov rax,qword ptr 0
;101
cmp RBX,rax
;102
je .endo11
;103

;104
mov rax,qword ptr rbx
;105

;106

;107

;108

;109
mov rcx,rbx
;110
DrawLetter rax
;111

;112

;113

;114
add RDIptr,1
;115

;116
jmp .loop11
;117
.endo11:
;118

;119

ENDM
.data

;120

;121

;122

;123
.data
;124
widthsFnt dq 7.0,49.0,0.0,49.0,49.0,49.0,49.0
;125
dq 49.0,49.0,16.0,16.0,16.0,16.0,16.0
;126
dq 49.0,49.0,49.0,49.0,49.0,49.0,49.0
;127
dq 49.0,49.0,49.0,49.0,49.0,49.0,49.0
;128
dq 49.0,49.0,49.0,49.0,16.0,21.0,26.0
;129
dq 32.0,32.0,53.0,49.0,11.0,21.0,21.0
;130
dq 32.0,36.0,16.0,21.0,16.0,17.0,32.0
;131
dq 32.0,32.0,32.0,32.0,32.0,32.0,32.0,;1234567
;132
dq 32.0,32.0,17.0,17.0,36.0,36.0,36.0,;89
;133
dq 28.0,58.0,42.0,42.0,42.0,42.0,39.0,; ABCDE
;134
dq 35.0,42.0,42.0,21.0,24.0,42.0,39.0,;FGH IJKL
;135
dq 56.0,42.0,42.0,35.0,42.0,42.0,35.0,;MNOPQRS
;136
dq 39.0,42.0,42.0,52.0,42.0,42.0,39.0,;TUV WXYZ
;137
dq 21.0,17.0,21.0,30.0,32.0,21.0,28.0,; a
;138
dq 32.0,28.0,32.0,28.0,21.0,32.0,32.0,;bcdefgh
;139
dq 17.0,17.0,32.0,17.0,49.0,32.0,32.0,;ijklmno
;140
dq 32.0,32.0,21.0,24.0,17.0,32.0,32.0,;pqrstuv
;141
dq 46.0,32.0,32.0,28.0,30.0,12.0,30.0,;wxyz 
;142
dq 34.0,32.0,49.0,49.0,49.0,49.0,49.0
;143
dq 49.0,49.0,49.0,49.0,49.0,49.0,49.0
;144
dq 49.0,49.0,49.0,49.0,49.0,49.0,49.0
;145
dq 49.0,49.0,49.0,49.0,49.0,49.0,49.0
;146
dq 49.0,49.0,49.0,49.0,49.0,49.0,16.0
;147
dq 21.0,32.0,32.0,32.0,32.0,12.0,32.0
;148
dq 21.0,48.0,17.0,32.0,36.0,0.0,48.0
;149
dq 32.0,25.0,35.0,19.0,19.0,21.0,36.0
;150
dq 29.0,21.0,21.0,19.0,19.0,32.0,48.0
;151
dq 48.0,48.0,28.0,46.0,46.0,46.0,46.0,; ÀÁÂÃ
;152
dq 46.0,46.0,56.0,42.0,39.0,39.0,39.0,;ÄÅÆÇÈÉÊ
;153
dq 39.0,21.0,21.0,21.0,21.0,46.0,46.0,;ËÌÍÎÏÐÑ
;154
dq 46.0,46.0,46.0,46.0,46.0,36.0,46.0,;ÒÓÔÕÖ 
;155
dq 46.0,46.0,46.0,46.0,46.0,35.0,32.0
;156
dq 28.0,28.0,28.0,28.0,28.0,28.0,42.0
;157
dq 28.0,28.0,28.0,28.0,28.0,17.0,17.0
;158
dq 17.0,17.0,32.0,32.0,32.0,32.0,32.0
;159
dq 32.0,32.0,35.0,32.0,32.0,32.0,32.0
;160
dq 32.0,32.0,32.0,32.0
;161

;162
