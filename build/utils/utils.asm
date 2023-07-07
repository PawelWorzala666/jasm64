
.data

.code


;0

;1

;2

;3

;4

;5

.code


PrintMatrix MACRO plabel1,amatrix1

;6

;7

;8
invoke printf, "%s %s",plabel1,lf
;9

;10
invoke printf, "%f,", qword ptr amatrix1[0]
;11
invoke printf, "%f,", qword ptr amatrix1[8]
;12
invoke printf, "%f,", qword ptr amatrix1[16]
;13
invoke printf, "%f,", qword ptr amatrix1[24]
;14
invoke printf, "%s",lf
;15

;16
invoke printf, "%f,", qword ptr amatrix1[32]
;17
invoke printf, "%f,", qword ptr amatrix1[40]
;18
invoke printf, "%f,", qword ptr amatrix1[48]
;19
invoke printf, "%f,", qword ptr amatrix1[56]
;20
invoke printf, "%s",lf
;21

;22
invoke printf, "%f,", qword ptr amatrix1[64]
;23
invoke printf, "%f,", qword ptr amatrix1[72]
;24
invoke printf, "%f,", qword ptr amatrix1[80]
;25
invoke printf, "%f,", qword ptr amatrix1[88]
;26
invoke printf, "%s",lf
;27

;28
invoke printf, "%f,", qword ptr amatrix1[96]
;29
invoke printf, "%f,", qword ptr amatrix1[104]
;30
invoke printf, "%f,", qword ptr amatrix1[112]
;31
invoke printf, "%f,", qword ptr amatrix1[120]
;32
invoke printf, "%s",lf
;33

;34

;35

;36

ENDM
.data

;37

;38

;39

.code


FromWordToDQ MACRO

;40
movzx rax,word ptr  qword ptr lParam[0]
;41
mov mouse.posX,rax
;42

ENDM
.data

;43

;44

;45
