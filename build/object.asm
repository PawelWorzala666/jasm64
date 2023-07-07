
.data

.code


;0

;1

;2

;3

;6

;7

;8
cTestObj STRUCT
 tfield1 dq 0
tfield2 dq 0
txt1 dq 0
 cTestObj ENDS
 
 .code
cTestObj_constructor PROC _this


mov rax,qword ptr 110
mov qword ptr _this+8,rax

mov rax,qword ptr 111
mov qword ptr _this+16,rax

mov rax,qword ptr txt1
mov qword ptr _this+24,rax

;10

;11

;12

;13

ret
cTestObj_constructor ENDP
.data

 .code
cTestObj_print11 PROC _this


;15
invoke printf, "obj print %i %s",qword ptr _this+8,lf
;16

ret
cTestObj_print11 ENDP
.data

 
 
;18

;19

;20
ptobj label cTestObj
;21

;22

;23

.code


Main MACRO

;24

;25

;26
invoke printf, "START %s",lf
;27

;28
rcall cTestObj_constructor,qword ptr ptobj
;29

;30
rcall cTestObj_print11,qword ptr ptobj
;31

;32

;33
invoke printf, "END %s",lf
;34

;35

ENDM
.data

;36

;37

;38
 txt1 db "test txt",0