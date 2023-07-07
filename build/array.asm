
.data
num2 dq 443.444
.code


;0

;1

;2

;5

;6

;7
cARRAY STRUCT
;8
parray QWORD ?
;9
arrsize QWORD 0
;10
arrtotal QWORD 0
;11
cARRAY ENDS
;12

;13

;14

;15
narry LABEL cARRAY
;16

;17

;18

;19

;20

;21

;22

;23

;24

;25

;26

;27

;28
.data?
;29

;30
.data
;31
 parrsize dq 0
;32
 parrtotal dq 0
;33

;34

.code


parray_alloc MACRO

;35
mov parray11,alloc(1024)
;36

ENDM
.data

;37

.code


parray_pushN MACRO value

;38
add parrsize,8
;39
mov rbx,parrsize
;40
lea rcx,parray11
;41
mov rax,qword ptr value
;42
mov [rcx+rbx],rax
;43

ENDM
.data

;44

.code


parray_pushT MACRO value

;45
add parrsize,8
;46
mov rbx,parrsize
;47
lea rcx,parray11
;48
lea rax,value
;49
mov [rcx+rbx],rax
;50

ENDM
.data

;51

.code


parray_get MACRO index

;52
mov rcx,index
;53
imul rcx,8
;54
lea rdx,parray11
;55
add rdx,rcx
;56
mov rax,qword ptr [rdx]
;57

ENDM
.data

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

.code


Main MACRO

;72
invoke printf, "started %s",lf
;73

;74

;75

;76
parray_alloc 
;77

;78
parray_pushN num2
;79
invoke printf, "push 0: %f %s",rax,lf
;80
parray_pushT ptext1a
;81
invoke printf, "push 1: %s %s",rax,lf
;82

;83

;84
parray_get 1
;85
invoke printf, "get 0: %f %s",rax,lf
;86
parray_get 2
;87
invoke printf, "get 1: %s %s",rax,lf
;88

;89

;90

;91

;106

;107

;108

;109

;110
invoke printf, "end %s",lf
;111

ENDM
.data

;112

;113

;114

;115

;116

;117

;118

;119

;120
 ptext1a db "hello world",0
;121
