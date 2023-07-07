
.data

.code


;0

;1

;2

;3
.data?
;4

;5

;6

;7

;8

;9

;10

;11

.code


MeshCreateBuffer MACRO count1,arrayType1

;12
invoke glGenBuffers,1,addr bufferID
;13
invoke glBindBuffer,arrayType1,bufferID
;14

;15
mov meshData,alloc(count1)
;16
invoke ReadFile, hfile1,meshData,count1,0,0
;17
invoke glBufferData,arrayType1,count1,meshData,GL_STATIC_DRAW
;18

ENDM
.data

;19

.code


MeshCreateGeometry MACRO numPtr11,numPtr12,numPtr13,numPtr14,numPtr15

;20
invoke glGenVertexArrays,1,addr pVAO
;21
invoke glBindVertexArray,pVAO
;22

;23

;24
MeshCreateBuffer numPtr11,GL_ARRAY_BUFFER
;25
invoke glEnableVertexAttribArray,0
;26
invoke glVertexAttribPointer,0,3,GL_FLOAT,GL_FALSE,12,0
;27

;28

;29
MeshCreateBuffer numPtr12,GL_ARRAY_BUFFER
;30
invoke glEnableVertexAttribArray,1
;31
invoke glVertexAttribPointer,1,3,GL_FLOAT,GL_FALSE,12,0
;32

;33

;34
MeshCreateBuffer numPtr13,GL_ARRAY_BUFFER
;35
invoke glEnableVertexAttribArray,2
;36
invoke glVertexAttribPointer,2,3,GL_FLOAT,GL_FALSE,12,0
;37

;38

;39
MeshCreateBuffer numPtr14,GL_ARRAY_BUFFER
;40
invoke glEnableVertexAttribArray,3
;41
invoke glVertexAttribPointer,3,2,GL_FLOAT,GL_FALSE,8,0
;42

;43

;44
MeshCreateBuffer numPtr15,GL_ELEMENT_ARRAY_BUFFER
;45

;46
mov rax,qword ptr pVAO
;47

ENDM
.data

;48

.code


MeshRender MACRO nVAO,count1,diffuse1,normal1

;49

;50
invoke glActiveTexture,GL_TEXTURE0
;51
invoke glBindTexture,GL_TEXTURE_2D,diffuse1
;52
cSHADER_SetUniform1i shader1,"diffuseTexture",0
;53

;54

;57

;58
invoke glBindVertexArray,nVAO
;59

;60
invoke glDrawElements,GL_TRIANGLES,count1,GL_UNSIGNED_SHORT,0
;61

;62

ENDM
.data

;63

;64

;65
.data?
;66

;67

;68

;69

;70

;71

;72

;73

;74

;75

;76

;77

;78

;79

;80

;81

;82

;83

;84

;85

;86

;87

;88

;89

;90

;91

;92

;93

;94
.data
;95
 ReadData8offset dq 0
;96
 Readoffset dq 0
;97
 TriisOffset dq 0
;98

;99
.code
;100

.code


ReadData8 MACRO

;101
mov rcx,Readoffset
;102
mov rax,qword ptr [rbx+rcx]
;103

;104
add Readoffset,8
;105

ENDM
.data

;106

;107
.data
;108

;109
texturePath db(512) dup(0)
;110
 modelpath db "models\eline2\",0
;111

;112
.data? 
;113

;114

;115

;116

;117

;118

;119

;120

;121

;122

;123

;124

;125

;126

;127

;128

;129

;130

;131
.code
;132

;133

;134

;135

;136

;137

.code


ModelCreateGeometry MACRO

;138

;139

;140
invoke CreateFile, "models\eline2\images.bin",GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL,0 
mov handle13,rax
;141
invoke GetFileSize, handle13,0
mov fsize13,rax
;142
invoke printf, "size... %i %s",fsize13,lf
;143

;144

;145
invoke CreateFile, "models\eline2\modelNums.bin",GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL,0 
mov handle12,rax
;146
invoke GetFileSize, handle12,0
mov fsize12,rax
;147
invoke printf, "size... %i %s",fsize12,lf
;148
mov pmodelNums1,alloc(fsize12)
;149
invoke ReadFile, handle12,pmodelNums1,fsize12,0,0
;150
invoke CloseHandle, handle12
;151

;152
invoke printf, "CloseHandle... %s",lf
;153

;154

;155
invoke CreateFile, "models\eline2\model.bin",GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL,0
mov hfile1,rax
;156

;157
invoke printf, "eline2... %s",lf
;158

;159

;160

;161

;162
mov VAOS,alloc(256)
;163
mov TRIANGLES,alloc(256)
;164
mov TEXTRURESS,alloc(256)
;165

;166

;167
invoke printf, "eline2 44... %s",lf
;168

;169

;170

;171

;172

;173

;174
invoke printf, " qword ptr textures[16] %i %s", qword ptr textures[16],lf
;175

;176

;177
LoadTexture "textures\normal.png",texturesSysID
;178

;179

;180
invoke printf, "eline2 55... %s",lf
;181

;182

;183

;184

;185
invoke printf, "reqad... %s",lf
;186

;187
mov Readoffset,0
;188

;189
lea rdi,pmodelNums1
;190
mov rbx,[rdi+0]
;191

;192

;193
ReadData8 
;194

;195

;196

;197

;198
invoke printf, "loop... %s",lf
;199

;200

;201
mov rdi,0
;202

;203
loop11:
;204

;205
add rdi,8
;206

;207
invoke printf, "step ... %i %s",rdi,lf
;208

;209
ReadData8 
mov pnumPtr11,rax
;210
ReadData8 
mov pnumPtr12,rax
;211
ReadData8 
mov pnumPtr13,rax
;212
ReadData8 
mov pnumPtr14,rax
;213
ReadData8 
mov pnumPtr15,rax
;214

;215
MeshCreateGeometry pnumPtr11,pnumPtr12,pnumPtr13,pnumPtr14,pnumPtr15
;216

;217
mov rcx,VAOS
;218
mov [rcx+rdi],rax
;219

;220
invoke printf, "VAO %i %s",rax,lf
;221

;222
ReadData8 
;223
mov rcx,TRIANGLES
;224
mov [rcx+rdi],rax
;225

;226
invoke printf, "TRIGLE %i %s",rax,lf
;227

;228
ReadData8 
;229

;230
mov ssPP,rax
;231

;232

;233

;234

;235

;236

;237

;238

;239

;240
add ssPP,1
;241
invoke printf, "rcx %i %s",ssPP,lf
;242
mov pmodelNums3,alloc(ssPP)
;243
invoke printf, "rcx %i %s",ssPP,lf
;244
sub ssPP,1
;245
invoke printf, "rcx %i %s",ssPP,lf
;246
invoke ReadFile, handle13,pmodelNums3,ssPP,0,0
;247

;248
invoke printf, "TEXTRE name %s %s",pmodelNums3,lf
;249

;250
LoadTexture pmodelNums3,tmpTEX22
;251

;252
invoke printf, "tmpTEX22 44 %i %s",tmpTEX22,lf
;253

;254
mov rax,qword ptr tmpTEX22
;255

;256
mov rcx,TEXTRURESS
;257
mov [rcx+rdi],rax
;258

;259

;270

;271

;272

;273
mov rax,qword ptr 232
;274
cmp rdi,rax
;275
je endo11
;276

;277
jmp loop11
;278

;279
endo11:
;280

;281

;282
invoke printf, " end loop... %s",lf
;283

;284

;285

;286

;339

;340

;341
invoke CloseHandle, handle13
;342

;343

;344

;345

;346
invoke CloseHandle, hfile1
;347

;348

;349

;350

;351

;352

;353

;354

ENDM
.data

;355

;356

.code


ModelRender MACRO

;357

;358
invoke printf, "ModelRender %i %s",4,lf
;359

;360

;361

;362

;363
mov rdi,0
;364

;365
loop22:
;366

;367
add rdi,8
;368

;369
invoke printf, "step ... %i %s",rdi,lf
;370

;371
mov rcx,VAOS
;372
mov rax,qword ptr [rcx+rdi]
;373
mov pVAO,rax
;374

;375
invoke printf, "pVAO ... %i %s",pVAO,lf
;376

;377
mov rcx,TRIANGLES
;378
mov rax,qword ptr [rcx+rdi]
;379
mov pTRI,rax
;380

;381
invoke printf, "pTRI ... %i %s",pTRI,lf
;382

;383

;384
mov rcx,TEXTRURESS
;385
mov rdx,[rcx+rdi]
;386
mov TEXSS,rdx
;387

;388

;389

;390

;391

;398

;399

;400

;401
MeshRender pVAO,pTRI,TEXSS,texturesSysID
;402

;403

;404
mov rax,qword ptr 232
;405
cmp rdi,rax
;406
je endo22
;407

;408
jmp loop22
;409

;410
endo22:
;411

;412

;413

;414

ENDM
.data

;415
