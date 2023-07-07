
.data


.code


;0

;1

;2

;5

;6
.data?
;7

;8

;9
.data
;10
 threadsCount dq 0
;11
.code
;12
TestThread PROC

;13

;14
mov rax,qword ptr 1
add threadsCount,rax
;15

;16
invoke printf, "THREAD %s",lf
;17
mov rax,qword ptr threadsCount
mov rbx,16
cmp rax,rbx
jl .if1
jmp .endif1
.if1:

;18

;19
mov hThread,rv(CreateThread,0,0,ADDR TestThread,ADDR arr,0,0)
;20
fn SleepEx,1,0
;21

.endif1:
;22
invoke printf, "ENDo THREADa %s",lf
;23
ret
;24
TestThread ENDP
;25

;26

;27

;28

.code


Main MACRO

;29

;30
invoke printf, "START %s",lf
;31

;32
rcall TestThread
;33

;34
fn SleepEx,8000,0
;35

;36
invoke printf, "error %s",lf
;37

;38

ENDM
.data

;39

;40

;41

;42

;43

;44

;70

;71
