
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
.data?
;8

;9

;10

;11
.data
;12
 file1 db "numbers.bin",0
;13

;14

;15

.code


Main MACRO

;16

;17

;18
invoke printf, "START %s",lf
;19

;20

;21

;22

;23
invoke CreateFile, addr file1,GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE,0
mov handle,rax
;24

;25

;26
invoke GetFileSize, handle,0
mov fsize,rax
;27

;28
invoke printf, "size... %i %s",fsize,lf
;29

;30

;31
mov buffor1,alloc(fsize)
;32

;33

;34
invoke ReadFile, handle,buffor1,fsize,0,0
;35

;36

;37

;38
invoke CloseHandle, handle
;39

;40

;41

;42
lea rdi,buffor1
;43
mov rbx,[rdi+0]
;44

;45
mov rax,qword ptr [rbx+0]
;46
invoke printf, "number 1... %i %s",rax,lf
;47

;48
mov rax,qword ptr [rbx+8]
;49
invoke printf, "number 2... %i %s",rax,lf
;50

;51

;52

;53
invoke printf, "END %s",lf
;54

;55

ENDM
.data

;56

;57
