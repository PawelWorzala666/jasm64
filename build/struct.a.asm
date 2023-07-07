
.data
UUID dq 0
num11 dq 34.34
.code


;0

;1

;2

;3

;6

;7

;8
ELEMENT STRUCT
;9
uuid QWORD 0
;10
data QWORD 0
;11
total QWORD 0
;12
childs QWORD 0
;13
ELEMENT ENDS
;14

;15

;16

;17
.data?
;18
LAST dq ?
;19

;20
.code
;21

;22
CreteStruct PROC data:ptr QWORD
LOCAL obj :ELEMENT
;23

;24

;25

;26
add UUID,1
;27

;28

;29

;30
mov rax,UUID
;31
mov obj.uuid,rax
;32

;33
mov rax,qword ptr obj.uuid
;34
invoke printf, "uuid %i %s",rax,lf
;35

;36
mov rax,data
;37
mov obj.data,rax
;38

;39
invoke printf, "data %f %s",obj.data,lf
;40

;41

;42

;43
mov rax,qword ptr obj
;44
mov LAST,rax
;45

;46

;47

;48
ret
;49
CreteStruct ENDP
;50

;51
.data?
;52
FIRST dq ?
;53

;54
.code
;55

;56
PrintUuid PROC elem:ELEMENT

;57

;58

;59
invoke printf, "uuid %i %s",elem.uuid,lf
;60

;61

;62
invoke printf, "data %f %s",elem.data,lf
;63

;64
ret
;65
PrintUuid ENDP
;66

;67

;68

;69

.code


