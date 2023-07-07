
.data

.code


;0

;1

;2
.data?
;3

;4

;5

;6

;7

;8

;9
cMESH STRUCT
 VAO dq 0
 cMESH ENDS
 
 
.code


cMESH_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;11

;12

ENDM
.data

 
.code


cMESH_CreateBuffer MACRO _this,count1,arrayType1

;14
invoke glGenBuffers,1,addr bufferID
;15
invoke glBindBuffer,arrayType1,bufferID
;16

;17
mov meshData,alloc(count1)
;18
invoke ReadFile, hfile1,meshData,count1,0,0
;19
invoke glBufferData,arrayType1,count1,meshData,GL_STATIC_DRAW
;20

;21
mov rax,qword ptr bufferID
;22

ENDM
.data

 
.code


cMESH_CreateGeometry MACRO _this,numPtr11,numPtr12,numPtr13,numPtr14,numPtr15

;24
invoke glGenVertexArrays,1,addr  qword ptr _this+8
;25
invoke glBindVertexArray, qword ptr _this+8
;26

;27

;28
cMESH_CreateBuffer _this,numPtr11,GL_ARRAY_BUFFER
mov bufferID11,rax
;29
invoke glEnableVertexAttribArray,0
;30
invoke glVertexAttribPointer,0,3,GL_FLOAT,GL_FALSE,12,0
;31

;32

;33
cMESH_CreateBuffer _this,numPtr12,GL_ARRAY_BUFFER
mov bufferID11,rax
;34
invoke glEnableVertexAttribArray,1
;35
invoke glVertexAttribPointer,1,3,GL_FLOAT,GL_FALSE,12,0
;36

;37

;38
cMESH_CreateBuffer _this,numPtr13,GL_ARRAY_BUFFER
mov bufferID11,rax
;39
invoke glEnableVertexAttribArray,2
;40
invoke glVertexAttribPointer,2,3,GL_FLOAT,GL_FALSE,12,0
;41

;42

;43
cMESH_CreateBuffer _this,numPtr14,GL_ARRAY_BUFFER
mov bufferID11,rax
;44
invoke glEnableVertexAttribArray,3
;45
invoke glVertexAttribPointer,3,2,GL_FLOAT,GL_FALSE,8,0
;46

;47

;48
cMESH_CreateBuffer _this,numPtr15,GL_ELEMENT_ARRAY_BUFFER
mov bufferID11,rax
;49

ENDM
.data

 
.code


cMESH_ModelRender MACRO _this,count1,diffuse1,normal1

;51

;52
invoke glActiveTexture,GL_TEXTURE0
;53
invoke glBindTexture,GL_TEXTURE_2D,diffuse1
;54
cSHADER_SetUniform1i shader1,"diffuseTexture",0
;55

;56
invoke glActiveTexture,GL_TEXTURE1
;57
invoke glBindTexture,GL_TEXTURE_2D,normal1
;58
cSHADER_SetUniform1i shader1,"normalTexture",1
;59

;60
invoke glBindVertexArray, qword ptr _this+8
;61

;62
invoke glDrawElements,GL_TRIANGLES,count1,GL_UNSIGNED_SHORT,0
;63

;64

ENDM
.data

 
 
;66

;67
.data?
;68

;69

;70

;71

;72

;73

;74

;75
cMODEL STRUCT
 mesh dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;77

;78

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;80

;81

;82

;83
cFILE_ReadFile file,"models\modelNums.bin",modelNums1
;84

;85

;86

;87
invoke CreateFile, "models\icarusmmo\model.bin",GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE,0
mov hfile1,rax
;88

;89
mov texturesSys,alloc(32)
;90
mov textures,alloc(96)
;91
mov meshes,alloc(64)
;92

;93

;94

;95
LoadTexture "models\icarusmmo\textures\hw_inner.png", qword ptr textures[8]
;96
LoadTexture "models\icarusmmo\textures\shose.png", qword ptr textures[16]
;97
LoadTexture "models\icarusmmo\textures\2_ar0_000.png", qword ptr textures[24]
;98
LoadTexture "models\icarusmmo\textures\hw_eye_005.png", qword ptr textures[32]
;99
LoadTexture "models\icarusmmo\textures\hw_face_001.png", qword ptr textures[40]
;100
LoadTexture "models\icarusmmo\textures\hw_hair_001.png", qword ptr textures[48]
;101

;102
LoadTexture "models\icarusmmo\textures\bumpmap_flat.png", qword ptr textures[56]
;103
LoadTexture "models\icarusmmo\textures\hw_inner_nomal.png", qword ptr textures[64]
;104
LoadTexture "models\icarusmmo\textures\2_ar0_000_ddn.png", qword ptr textures[72]
;105
LoadTexture "models\icarusmmo\textures\hw_face_001_ddn.png", qword ptr textures[80]
;106

;107

;108
LoadTexture "textures\normal.png", qword ptr texturesSys[8]
;109

;110

;111

;112
cMESH_CreateGeometry  qword ptr meshes[8],5928,5928,7904,3952,3816
;113
cMESH_CreateGeometry  qword ptr meshes[16],8088,8088,10784,5392,5556
;114
cMESH_CreateGeometry  qword ptr meshes[24],13800,13800,18400,9200,6744
;115
cMESH_CreateGeometry  qword ptr meshes[32],43956,43956,58608,29304,37212
;116
cMESH_CreateGeometry  qword ptr meshes[40],1368,1368,1824,912,1176
;117
cMESH_CreateGeometry  qword ptr meshes[48],19272,19272,25696,12848,17712
;118
cMESH_CreateGeometry  qword ptr meshes[56],25248,25248,33664,16832,13494
;119
cMESH_CreateGeometry  qword ptr meshes[64],2880,2880,3840,1920,2406
;120

;121

;122
invoke CloseHandle, hfile1
;123

;124

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;126

;127

;128

;129

;130

;131

;132

;133

;134

;135

;136

;137

;138
cMESH_ModelRender  qword ptr meshes[8],1908,1,7
;139
cMESH_ModelRender  qword ptr meshes[16],2778,1,7
;140
cMESH_ModelRender  qword ptr meshes[24],3372,2,8
;141
cMESH_ModelRender  qword ptr meshes[32],18606,3,9
;142
cMESH_ModelRender  qword ptr meshes[40],588,4,11
;143
cMESH_ModelRender  qword ptr meshes[48],8856,5,10
;144
cMESH_ModelRender  qword ptr meshes[56],6747,6,10
;145
cMESH_ModelRender  qword ptr meshes[64],1203,4,11
;146

;147

;148

ENDM
.data

 
 
;150

;151

;152
