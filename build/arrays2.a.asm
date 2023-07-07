;0

;1

;2

;5

;6

;7
cARRAY STRUCT
 parray dq 0
parrsize dq 0
parrtotal dq 0
 cARRAY ENDS
 
 
.code


cARRAY_constructor MACRO _this

mov rax,0
mov qword ptr _this+8,rax

mov rax,0
mov qword ptr _this+16,rax

mov rax,0
mov qword ptr _this+24,rax

;9

;10

;11

;12

ENDM
.data

 
.code


cARRAY_init MACRO _this

;14
mov qword ptr _this+8,alloc(128)
;15
mov rax,128
;16
mov qword ptr _this+24,rax
;17

ENDM
.data

 
.code


cARRAY_print MACRO _this

;37
mov rax,qword ptr _this+24
;38
invoke printf, "array total: %i %s",rax,lf
;39
mov rax,qword ptr _this+16
;40
invoke printf, "array size: %i %s",rax,lf
;41

ENDM
.data

 
.code


cARRAY_pushN MACRO _this,value

;49

;50

;58

;59
invoke printf, "54 %s",lf
;60
add qword ptr _this+16
;61
mov rbx,qword ptr _this+8
;62
mov rcx,qword ptr _this+16
;63
invoke printf, "3332 %s",lf
;64
mov rax,[rbx+rcx]
;65
invoke printf, "started %s",lf
;66
mov rax,value
;67
invoke printf, "5322 %s",lf
;68

ENDM
.data

 
.code


cARRAY_pushT MACRO _this,value

;70

;71
add qword ptr _this+16,8
;72
mov rbx,qword ptr _this+16
;73
lea rcx,qword ptr _this+8
;74

;75
lea rax,value
;76
mov [rcx+rbx],rax
;77

ENDM
.data

 
.code


cARRAY_get MACRO _this,index

;79
mov rcx,index
;80
imul rcx,8
;81
lea rdx,qword ptr _this+8
;82
add rdx,rcx
;83
mov rax,[rdx]
;84

ENDM
.data

 
 
;87

;88

;89

;90

;91

;92

;93

.code


