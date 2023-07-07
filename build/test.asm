
.data

.code


;0

;1

;2

;3

;4

;5

;6

;7

;8

;9

.code


Main MACRO

;10

;11

;12
invoke printf, "START %s",lf
;13

;14

;15

;16

;17

;24

;25
PrintOutAllText tekst,PrintLetter
;26

;27

;28

;29
invoke printf, "BEGIN %s",lf
;30

;31

;32
invoke printf, "END %s",lf
;33

;34

ENDM
.data

;35

;36

;37
.code
PrintLetter PROC char11


;38
invoke printf, "char %i %s",char11,lf
;39

ret
PrintLetter ENDP
.data

;40

;41

;42

.code


PrintOutAllText MACRO text11,callback11

;43

;44
mov rdi,0
;45

;46
.loop11:
;47
MOV RCX,offset text11
;48
ADD RCX,rdi
;49

;50
MOV DL,byte ptr [rcx]
;51
MOVZX RBX,DL
;52

;53
mov rax,qword ptr 0
;54
cmp RBX,rax
;55
je .endo11
;56

;57
mov rax,qword ptr rbx
;58

;59

;60
rcall callback11, rax
;61

;62

;63
add rdi,1
;64

;65
jmp .loop11
;66
.endo11:
;67

;68

ENDM
.data

;69

;70

.code


GetCharAtIndex MACRO index,text11

;71

;72
MOV RCX,offset text11
;73

;74
ADD RCX,index
;75
MOV DL,byte ptr [rcx]
;76

;77
MOVZX RBX,DL
;78

;79
mov rax,qword ptr rbx
;80

;81

ENDM
.data

;82

;83

;84
tekst db "ABC",0