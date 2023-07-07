
.data
ppos_itions dq 1024 dup (?)
.code


;0

;1

;2
include opengl/uniform.a.asm
;3
include utils/file.a.asm
;4
include opengl/texture.a.asm
;5

;6
include opengl/shader.a.asm
;7

;8

;9

;10

;11

;12
.code
;13
cMESH STRUCT
 VAO dq 0
bufferID dq 0
bufferID2 dq 0
meshes dq 0
modelData dq 0
triangles dq 0
positions dq 0
posData dq 0
indices dq 0
indData dq 0
 cMESH ENDS
 
 
.code


cMESH_constructor MACRO _this

mov rax,qword ptr 0
mov qword ptr _this+8,rax

mov rax,qword ptr 0
mov qword ptr _this+16,rax

mov rax,qword ptr 0
mov qword ptr _this+162,rax

mov rax,qword ptr 0
mov qword ptr _this+32,rax

mov rax,qword ptr 0
mov qword ptr _this+40,rax

mov rax,qword ptr 0
mov qword ptr _this+48,rax

mov rax,qword ptr 0
mov qword ptr _this+56,rax

mov rax,qword ptr 0
mov qword ptr _this+64,rax

mov rax,qword ptr 0
mov qword ptr _this+72,rax

mov rax,qword ptr 0
mov qword ptr _this+80,rax

;15

;16

;17

;18

;19

;20

;21

;22

;23

;24

;25

;26

;27

;28

ENDM
.data

 
.code


cMESH_CreateGeometry MACRO _this

;30

;31

;32

;33
cSHADER_CreateShader shader1,"shaders\color.vert","shaders\color.frag"
;34

;35

;36

;37

;45

;46

;47

;48
cFILE_ReadFile file,"models\eline\model.bin",qword ptr _this+40
;49

;50
lea rdi,qword ptr _this+40
;51
mov rbx,[rdi+0]
;52

;53
mov rax,[rbx+0]
;54
mov qword ptr _this+32,rax
;55
invoke printf, "meshes 1... %i %s",rax,lf
;56

;57

;58

;59

;60
mov rax,[rbx+8]
;61
mov qword ptr _this+48,rax
;62
invoke printf, "triangles 1... %i %s",rax,lf
;63

;64
mov rax,[rbx+16]
;65
mov qword ptr _this+56,rax
;66
invoke printf, "positions 1... %i %s",rax,lf
;67

;68

;69

;70

;71
mov rax,[rbx+24]
;72
mov qword ptr _this+64,rax
;73

;74

;75

;76
mov rcx,qword ptr _this+56
;77
add rcx,24
;78
mov rax,[rbx+rcx]
;79
mov qword ptr _this+72,rax
;80
invoke printf, "in_dices 1... %i %s",rax,lf
;81

;82
mov rdi,qword ptr _this+56
;83
add rdi,32
;84
mov rax,[rbx+rdi]
;85
mov qword ptr _this+80,rax
;86

;87

;88

;89

;90

;91

;92

;93

;94

;95

;96
invoke printf, "shader loasd %s",lf
;97

;98

;99

;100
invoke glGenVertexArrays,1,addr qword ptr _this+8
;101
invoke glBindVertexArray,qword ptr _this+8
;102

;103
invoke glGenBuffers,1,addr pufferID
;104
invoke glBindBuffer,GL_ARRAY_BUFFER,pufferID
;105
invoke glBufferData,GL_ARRAY_BUFFER,144,addr vertices,GL_STATIC_DRAW
;106

;107
invoke glEnableVertexAttribArray,0
;108
invoke glVertexAttribPointer,0,3,GL_DOUBLE,GL_FALSE,24,0
;109

;110

;116

;117
invoke printf, "ELEMENT_ARRAY_BUFFER %s",lf
;118

;119

;120

;121

;122

;123

;124

;125

;126
invoke printf, "MESH CREATE %s",lf
;127

;128

ENDM
.data

 
.code


cMESH_ModelRender MACRO _this

;130

;131

;132

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

;147

;148

;149
invoke glBindVertexArray,qword ptr _this+8
;150

;151

;152

;153
invoke glDrawArrays,GL_TRIANGLES,0,6
;154

;155

;156

;157

ENDM
.data

 
 
;159
.data
;160
pmesh label cMESH
;161
.code
;162

;163

;164
cMODEL STRUCT
 ptr1 dq 0
 cMODEL ENDS
 
 
.code


cMODEL_constructor MACRO _this

mov rax,qword ptr 0
mov qword ptr _this+8,rax

;166

;167

;168

;169

ENDM
.data

 
.code


cMODEL_CreateGeometry MACRO _this

;171

;172

;173

;174

;219

;220

;221

;222

;223
cMESH_CreateGeometry pmesh
;224

;225

ENDM
.data

 
.code


cMODEL_ModelRender MACRO _this

;227

;228
cMESH_ModelRender pmesh
;229

;230

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

;241

;242

;243

;246

;247

;248

;249

;250

;251

;252

;253

;254

;255

;256

ENDM
.data

 
 
;258

;259

;260
.data
;261

;262

;263
 frmoneptr dq 1
;264

;265

;266
.data?
;267

;268

;269

;270

;271

;272

;273

;274

;275

;276

;277

;278
.data
;279

;280
pro_jection dq 1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0
;281
cam_era dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.60,-9.000090086,1.0
;282
am_odel11 dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0
;283

;284
vertices dq 1.0,1.0,0.0,1.0,-1.0,0.0,-1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,1.0,0.0
;285

;286
indices dq 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
;287

;288

;289

;290

;291

;292
shader1 label cSHADER
;293

;294

;295
.data?
;296

;297

;298
