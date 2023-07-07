
.data

.code


;0

;1
.data?
;2

;3

;4

;5

;6

;7

;8

;9

;10

;11

.code


LoadTexture MACRO texName,textureID1

;12
invoke FreeImage_GetFileType, texName,0
mov wFormat,rax
;13

;14
invoke FreeImage_Load, wFormat,texName,0
mov hDib,rax
;15

;16

;17

;18
invoke FreeImage_ConvertTo32Bits, hDib
mov hDib32,rax
;19

;20

;21

;22

;23
invoke FreeImage_GetBits, hDib32,NULL,0
mov lpBits,rax
;24

;25

;26
invoke FreeImage_GetWidth, hDib32
mov dwWidth,rax
;27

;28
invoke FreeImage_GetHeight, hDib32
mov dwHeight,rax
;29

;30

;31
invoke FreeImage_Unload, hDib
;32

;33

;34

;35
invoke glGenTextures,1,addr textureID1,0
;36
invoke glBindTexture,GL_TEXTURE_2D,textureID1
;37

;38
invoke glTexParameteri,GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR
;39
invoke glTexParameteri,GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR
;40

;41

;42

;43
invoke glTexImage2D,GL_TEXTURE_2D,0,GL_BGRA_EXT,dwWidth,dwHeight,0,GL_BGRA_EXT,GL_UNSIGNED_BYTE,lpBits
;44

;45

;46

ENDM
.data

;47

;48

;49

;93

;94
