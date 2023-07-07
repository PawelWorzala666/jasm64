
.data
PI dq 3.141592653589793238
deg2rad dq 0.017453292519943295
.code


;0

;1

;2

;3
.data
;4

;5

;6

;7

;8
.daTA?
;9

;10

;11

;12

;13

;14

.code


Math_pomnoz MACRO aram11,aram22,aret33

;15
fld  aram11
;16
fmul  aram22
;17
fstp  aret33
;18

;19

;20

ENDM
.data

;21

;22

.code


Math_dodaj MACRO aram11,aram22,aret33

;23
fld  aram11
;24
fadd  aram22
;25
fstp  aret33
;26

;27

;28

ENDM
.data

;29

;30

.code


Math_podziel MACRO aram11,aram22,aret33

;31
fld  aram11
;32
fdiv  aram22
;33
fstp  aret33
;34

ENDM
.data

;35

;36

.code


Math_sin MACRO aram11,aret33

;37
fld  aram11
;38
fsin
;39
fstp  aret33
;40

ENDM
.data

;41

;42

.code


Math_cos MACRO aram11,aret33

;43
fld  aram11
;44
fcos
;45
fstp  aret33
;46

ENDM
.data

;47

;48

.code


Math_odejmnij MACRO aram11,aram22,aret33

;49
fld  aram11
;50
fsub  aram22
;51
fstp  aret33
;52

ENDM
.data

;53

;54

.code


Math_sqrt MACRO aram11,aret33

;55
fld  aram11
;56
fsqrt
;57
fstp  aret33
;58

ENDM
.data

;59

;60

;61

.code


Math_tan MACRO aram11,aret33

;62
Math_sin aram11,stp1
;63
Math_cos aram11,stp2
;64
fld  stp1
;65
fdiv  stp2
;66
fstp  aret33
;67

ENDM
.data

;68

;69

.code


Math_Deg2Rad MACRO aram11,aret33

;70
fld  aram11
;71
fmul  deg2rad
;72
fstp  aret33
;73

ENDM
.data

;74

;75

;86

;87

;88
