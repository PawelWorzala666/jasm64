
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


