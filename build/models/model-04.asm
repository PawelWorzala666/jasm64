
.data

.code


;0

;1
.data
;2

;3

;4

;5

;6

;7

;8
cMESH STRUCT
 VAO dq 0
 cMESH ENDS
 
 
.code


cMESH_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;10

;11

ENDM
.data

 
.code


cMESH_CreateBuffer MACRO _this,count1,arrayType1

;13
invoke glGenBuffers,1,addr bufferID
;14
invoke glBindBuffer,arrayType1,bufferID
;15

;16
mov meshData,alloc(count1)
;17
invoke ReadFile, hfile1,meshData,count1,0,0
;18
invoke glBufferData,arrayType1,count1,meshData,GL_STATIC_DRAW
;19

;20
mov rax,qword ptr bufferID
;21

ENDM
.data

 
.code


cMESH_CreateGeometry MACRO _this,numPtr11,numPtr12,numPtr13,numPtr14,numPtr15

;23
invoke glGenVertexArrays,1,addr  qword ptr _this+8
;24
invoke glBindVertexArray, qword ptr _this+8
;25

;26

;27
cMESH_CreateBuffer _this,numPtr11,GL_ARRAY_BUFFER
mov bufferID11,rax
;28
invoke glEnableVertexAttribArray,0
;29
invoke glVertexAttribPointer,0,3,GL_FLOAT,GL_FALSE,12,0
;30

;31

;32
cMESH_CreateBuffer _this,numPtr12,GL_ARRAY_BUFFER
mov bufferID11,rax
;33
invoke glEnableVertexAttribArray,1
;34
invoke glVertexAttribPointer,1,3,GL_FLOAT,GL_FALSE,12,0
;35

;36

;37
cMESH_CreateBuffer _this,numPtr13,GL_ARRAY_BUFFER
mov bufferID11,rax
;38
invoke glEnableVertexAttribArray,2
;39
invoke glVertexAttribPointer,2,3,GL_FLOAT,GL_FALSE,12,0
;40

;41

;42
cMESH_CreateBuffer _this,numPtr14,GL_ARRAY_BUFFER
mov bufferID11,rax
;43
invoke glEnableVertexAttribArray,3
;44
invoke glVertexAttribPointer,3,2,GL_FLOAT,GL_FALSE,8,0
;45

;46

;47
cMESH_CreateBuffer _this,numPtr15,GL_ELEMENT_ARRAY_BUFFER
mov bufferID11,rax
;48

ENDM
.data

 
.code


cMESH_ModelRender MACRO _this,count1,diffuse1,normal1

;50

;51
invoke glActiveTexture,GL_TEXTURE0
;52
invoke glBindTexture,GL_TEXTURE_2D,diffuse1
;53
cSHADER_SetUniform1i shader1,"diffuseTexture",0
;54

;55
invoke glActiveTexture,GL_TEXTURE1
;56
invoke glBindTexture,GL_TEXTURE_2D,normal1
;57
cSHADER_SetUniform1i shader1,"normalTexture",1
;58

;59
invoke glBindVertexArray, qword ptr _this+8
;60

;61
invoke glDrawElements,GL_TRIANGLES,count1,GL_UNSIGNED_SHORT,0
;62

;63

ENDM
.data

 
 
;65

;66
.data?
;67

;68

;69

;70

;71

;72

;73

;74
cMODEL STRUCT
 mesh dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov  qword ptr _this+8,rax

;76

;77

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;79

;80

;81

;82
cFILE_ReadFile file,"models\beach\modelNums.bin",modelNums1
;83

;84

;85

;86
invoke CreateFile, "models\beach\model.bin",GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE,0
mov hfile1,rax
;87

;88
mov texturesSys,alloc(32)
;89
mov textures,alloc(256)
;90
mov meshes,alloc(256)
;91

;92

;93
LoadTexture "models\beach\textures\T_Beach_rock.png", qword ptr textures[8]
;94
LoadTexture "models\beach\textures\T_Beach_forest.png", qword ptr textures[16]
;95
LoadTexture "models\beach\textures\T_Beach_island.png", qword ptr textures[24]
;96
LoadTexture "models\beach\textures\T_Beach_rock.png", qword ptr textures[32]
;97
LoadTexture "models\beach\textures\T_Beach_sky.png", qword ptr textures[40]
;98
LoadTexture "models\beach\textures\T_Beach_SkyUP.png", qword ptr textures[48]
;99
LoadTexture "models\beach\textures\T_Beach_wood.png", qword ptr textures[56]
;100
LoadTexture "models\beach\textures\T_Beach_city.png", qword ptr textures[64]
;101
LoadTexture "models\beach\textures\T_Beach_city_light.png", qword ptr textures[72]
;102
LoadTexture "models\beach\textures\T_Beach_coast.png", qword ptr textures[80]
;103
LoadTexture "models\beach\textures\T_Beach_moon.png", qword ptr textures[88]
;104
LoadTexture "models\beach\textures\T_Beach_sea.png", qword ptr textures[96]
;105
LoadTexture "models\beach\textures\T_Beach_wave_cX.png", qword ptr textures[104]
;106

;107

;108

;109
LoadTexture "textures\normal.png", qword ptr texturesSys[8]
;110

;111

;112

;113
cMESH_CreateGeometry  qword ptr meshes[8],45264,45264,60352,30176,36564
;114
cMESH_CreateGeometry  qword ptr meshes[16],265356,265356,353808,176904,237744
;115
cMESH_CreateGeometry  qword ptr meshes[24],4968,4968,6624,3312,3876
;116
cMESH_CreateGeometry  qword ptr meshes[32],30816,30816,41088,20544,20388
;117
cMESH_CreateGeometry  qword ptr meshes[40],1800,1800,2400,1200,1440
;118
cMESH_CreateGeometry  qword ptr meshes[48],2124,2124,2832,1416,1872
;119
cMESH_CreateGeometry  qword ptr meshes[56],310752,310752,414336,207168,193512
;120
cMESH_CreateGeometry  qword ptr meshes[64],384,384,512,256,96
;121
cMESH_CreateGeometry  qword ptr meshes[72],576,576,768,384,144
;122
cMESH_CreateGeometry  qword ptr meshes[80],5592,5592,7456,3728,3792
;123
cMESH_CreateGeometry  qword ptr meshes[88],96,96,128,64,24
;124
cMESH_CreateGeometry  qword ptr meshes[96],4488,4488,5984,2992,2208
;125
cMESH_CreateGeometry  qword ptr meshes[104],2448,2448,3264,1632,1800
;126

;127

;128

;129
invoke CloseHandle, hfile1
;130

;131

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;133

;134

;135

;136

;137

;138

;139

;140

;141

;142

;143

;144

;145
cMESH_ModelRender  qword ptr meshes[8],18282,0,14
;146
cMESH_ModelRender  qword ptr meshes[16],118872,1,14
;147
cMESH_ModelRender  qword ptr meshes[24],1938,2,14
;148
cMESH_ModelRender  qword ptr meshes[32],10194,0,14
;149
cMESH_ModelRender  qword ptr meshes[40],720,4,14
;150
cMESH_ModelRender  qword ptr meshes[48],936,5,14
;151
cMESH_ModelRender  qword ptr meshes[56],96756,6,14
;152
cMESH_ModelRender  qword ptr meshes[64],48,7,14
;153
cMESH_ModelRender  qword ptr meshes[72],72,8,14
;154
cMESH_ModelRender  qword ptr meshes[80],1896,9,14
;155
cMESH_ModelRender  qword ptr meshes[88],12,10,14
;156
cMESH_ModelRender  qword ptr meshes[96],1104,11,14
;157
cMESH_ModelRender  qword ptr meshes[104],900,12,14
;158

;159

;160

;161

ENDM
.data

 
 
;163

;164

;165
