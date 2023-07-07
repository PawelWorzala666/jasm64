
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

;56

;57

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
cFILE_ReadFile file,"models\eline\modelNums.bin",modelNums1
;83

;84

;85

;86
invoke CreateFile, "models\eline\model.bin",GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE,0
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
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[8]
;94
LoadTexture "models\eline\textures\red.jpg", qword ptr textures[16]
;95
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[24]
;96
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[32]
;97
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[40]
;98
LoadTexture "models\eline\textures\red.jpg", qword ptr textures[48]
;99
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[56]
;100
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[64]
;101
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[72]
;102
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[80]
;103
LoadTexture "models\eline\textures\red.jpg", qword ptr textures[88]
;104
LoadTexture "models\eline\textures\red.jpg", qword ptr textures[96]
;105
LoadTexture "models\eline\textures\red.jpg", qword ptr textures[104]
;106
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[112]
;107
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[120]
;108
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[128]
;109
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[136]
;110
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[144]
;111
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[152]
;112
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[160]
;113
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[168]
;114
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[176]
;115
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[184]
;116
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[192]
;117
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[200]
;118
LoadTexture "models\eline\textures\skin.jpg", qword ptr textures[208]
;119
LoadTexture "models\eline\textures\bg.jpg", qword ptr textures[216]
;120

;121

;122

;123
LoadTexture "textures\normal.png", qword ptr texturesSys[8]
;124

;125

;126

;127
cMESH_CreateGeometry  qword ptr meshes[8],36144,36144,48192,24096,34272
;128
cMESH_CreateGeometry  qword ptr meshes[16],3480,3480,4640,2320,3072
;129
cMESH_CreateGeometry  qword ptr meshes[24],21444,21444,28592,14296,20832
;130
cMESH_CreateGeometry  qword ptr meshes[32],18192,18192,24256,12128,17088
;131
cMESH_CreateGeometry  qword ptr meshes[40],6468,6468,8624,4312,5376
;132
cMESH_CreateGeometry  qword ptr meshes[48],14592,14592,19456,9728,12096
;133
cMESH_CreateGeometry  qword ptr meshes[56],78252,78252,104336,52168,76224
;134
cMESH_CreateGeometry  qword ptr meshes[64],33204,33204,44272,22136,27840
;135
cMESH_CreateGeometry  qword ptr meshes[72],5376,5376,7168,3584,4608
;136
cMESH_CreateGeometry  qword ptr meshes[80],174756,174756,233008,116504,166560
;137
cMESH_CreateGeometry  qword ptr meshes[88],9084,9084,12112,6056,8160
;138
cMESH_CreateGeometry  qword ptr meshes[96],47508,47508,63344,31672,44160
;139
cMESH_CreateGeometry  qword ptr meshes[104],47508,47508,63344,31672,44160
;140
cMESH_CreateGeometry  qword ptr meshes[112],24600,24600,32800,16400,22656
;141
cMESH_CreateGeometry  qword ptr meshes[120],50064,50064,66752,33376,46944
;142
cMESH_CreateGeometry  qword ptr meshes[128],1944,1944,2592,1296,1536
;143
cMESH_CreateGeometry  qword ptr meshes[136],9984,9984,13312,6656,9216
;144
cMESH_CreateGeometry  qword ptr meshes[144],20052,20052,26736,13368,18432
;145
cMESH_CreateGeometry  qword ptr meshes[152],43560,43560,58080,29040,40320
;146
cMESH_CreateGeometry  qword ptr meshes[160],60456,60456,80608,40304,51840
;147
cMESH_CreateGeometry  qword ptr meshes[168],33180,33180,44240,22120,27840
;148
cMESH_CreateGeometry  qword ptr meshes[176],153084,153084,204112,102056,148320
;149
cMESH_CreateGeometry  qword ptr meshes[184],786756,786756,1049008,524504,437346
;150
cMESH_CreateGeometry  qword ptr meshes[192],337884,337884,450512,225256,188766
;151
cMESH_CreateGeometry  qword ptr meshes[200],786528,786528,1048704,524352,430812
;152
cMESH_CreateGeometry  qword ptr meshes[208],198000,198000,264000,132000,188448
;153
cMESH_CreateGeometry  qword ptr meshes[216],175764,175764,234352,117176,96468
;154
cMESH_CreateGeometry  qword ptr meshes[224],10068,10068,13424,6712,9312
;155
cMESH_CreateGeometry  qword ptr meshes[232],91296,91296,121728,60864,88608
;156

;157

;158

;159
invoke CloseHandle, hfile1
;160

;161

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;163

;164

;165

;166
cMESH_ModelRender  qword ptr meshes[8],17136,1,28
;167
cMESH_ModelRender  qword ptr meshes[16],1536,2,28
;168
cMESH_ModelRender  qword ptr meshes[24],10416,3,28
;169
cMESH_ModelRender  qword ptr meshes[32],8544,1,28
;170
cMESH_ModelRender  qword ptr meshes[40],2688,1,28
;171
cMESH_ModelRender  qword ptr meshes[48],6048,2,28
;172
cMESH_ModelRender  qword ptr meshes[56],38112,3,28
;173
cMESH_ModelRender  qword ptr meshes[64],13920,1,28
;174
cMESH_ModelRender  qword ptr meshes[72],2304,3,28
;175
cMESH_ModelRender  qword ptr meshes[80],83280,1,28
;176
cMESH_ModelRender  qword ptr meshes[88],4080,2,28
;177
cMESH_ModelRender  qword ptr meshes[96],22080,2,28
;178
cMESH_ModelRender  qword ptr meshes[104],22080,2,28
;179
cMESH_ModelRender  qword ptr meshes[112],11328,1,28
;180
cMESH_ModelRender  qword ptr meshes[120],23472,1,28
;181
cMESH_ModelRender  qword ptr meshes[128],768,3,28
;182
cMESH_ModelRender  qword ptr meshes[136],4608,1,28
;183
cMESH_ModelRender  qword ptr meshes[144],9216,1,28
;184
cMESH_ModelRender  qword ptr meshes[152],20160,1,28
;185
cMESH_ModelRender  qword ptr meshes[160],25920,1,28
;186
cMESH_ModelRender  qword ptr meshes[168],13920,1,28
;187
cMESH_ModelRender  qword ptr meshes[176],74160,3,28
;188
cMESH_ModelRender  qword ptr meshes[184],218673,3,28
;189
cMESH_ModelRender  qword ptr meshes[192],94383,3,28
;190
cMESH_ModelRender  qword ptr meshes[200],215406,3,28
;191
cMESH_ModelRender  qword ptr meshes[208],94224,3,28
;192
cMESH_ModelRender  qword ptr meshes[216],48234,3,28
;193
cMESH_ModelRender  qword ptr meshes[224],4656,3,28
;194
cMESH_ModelRender  qword ptr meshes[232],44304,1,28
;195

;196

;197

;198

ENDM
.data

 
 
;200

;201

;202
