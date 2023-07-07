
.data
num2 dq 443.444
.code


;0

;1

;2

;5

;6

;7

;8

;9
.data?
;10
parray_array dq ?
;11
.data
;12
 parray_arrsize dq 0
;13
 parray_arrtotal dq 0
;14

;15

.code


parray_inir MACRO

;16
mov parray_array,alloc(128)
;17
mov rax,qword ptr 128
;18
mov parray_arrtotal,rax
;19

ENDM
.data

;20

;21
.code
parray_alloc PROC


;22
mov rax,qword ptr parray_arrsize
;23
mov rbx,parray_arrtotal
;24
sub rbx,1024
;25
cmp rax,rbx
;26
jg allocate11
;27
jmp endo11
;28
allocate11:
;29
mov rcx,8192
;30
mov parray_arrtotal,rcx
;31
mov rdx,parray_arrtotal
;32
add rbx,rcx
;33

;34

;35
mov parray_array,realloc(parray_array,rbx)
;36
mov parray_array,rax
;37
endo11:
;38

ret
parray_alloc ENDP
.data

;39

;40

.code


parray_print MACRO

;41
mov rax,qword ptr parray_arrtotal
;42
invoke printf, "array total: %i %s",rax,lf
;43
mov rax,qword ptr parray_arrsize
;44
invoke printf, "array size: %i %s",rax,lf
;45

ENDM
.data

;46

.code


parray_getSetPtr MACRO

;47
rcall parray_alloc
;48
add parray_arrsize,8
;49
mov rbx,parray_arrsize
;50
lea rcx,parray_array
;51

ENDM
.data

;52

.code


parray_pushN MACRO value

;53
parray_getSetPtr 
;54
mov rax,qword ptr value
;55
mov [rcx+rbx],rax
;56

ENDM
.data

;57

.code


parray_pushT MACRO value

;58
parray_getSetPtr 
;59
lea rax,value
;60
mov [rcx+rbx],rax
;61

ENDM
.data

;62

.code


parray_get MACRO index

;63
mov rcx,index
;64
imul rcx,8
;65
lea rdx,parray_array
;66
add rdx,rcx
;67
mov rax,qword ptr [rdx]
;68

ENDM
.data

;69

;70

;71

;72

;73

;74

;75

;76

;77

;78

.code


