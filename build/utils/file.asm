
.data

.code


;0

;1

;2

;3
.daTA?
;4

;5

;6

;7
cFILE STRUCT
 handle dq 0
fs_ize dq 0
 cFILE ENDS
 
 
.code


cFILE_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

mov rax,qword ptr 0
mov  qword ptr _this+16,rax

;9

;10

;11

ENDM
.data

 
.code


cFILE_ReadFile MACRO _this,file1,buffor1

;13

;14

;15
invoke CreateFile, file1,GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL,0
mov  qword ptr _this+8,rax
;16

;17

;18

;19
invoke GetFileSize,  qword ptr _this+8,0
mov _fsize1,rax
;20

;21

;22

;23
invoke printf, "_fsize1... %i %s",_fsize1,lf
;24

;25

;26

;27

;28

;29
mov buffor1,alloc(_fsize1)
;30

;31

;32

;33
invoke ReadFile,  qword ptr _this+8,buffor1,_fsize1,0,0
;34

;35

;36

;37
invoke CloseHandle,  qword ptr _this+8
;38

ENDM
.data

 
.code


cFILE_GetSize MACRO _this

;40
mov rax,qword ptr _fsize1
;41

ENDM
.data

 
 
;43
.data
;44
file label cFILE
;45

;46
