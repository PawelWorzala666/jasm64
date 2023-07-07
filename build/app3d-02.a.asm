
.data
matrix1 dq 16 dup(0.0)
matrix2 dq 16 dup(0.0)
.code


;0

;1

;2

;3
include opengl/mat4s.a.asm
;4

;5
include utils/utils.a.asm
;6
include opengl/uniform.a.asm
;7
include utils/file.a.asm
;8
include opengl/texture.a.asm
;9
include opengl/shader.a.asm
;10

;11
include models/model-02.a.asm
;12
include opengl/font.a.asm
;13

;14

;15

;16
.data
;17
pModel label cMODEL
;18

;19
shader1 label cSHADER
;20

;21

;22

;23

;28

;29

;30

;31
.data?
;32

;33

;34

;36

;37

;55

;56

;57

;58

;59

;60
.data
;61
textTest1 db "Hello World",0
;62

;63

;64

;65
.code
;66

;67

;68

;69

.code


SystemInit MACRO

;70

;71
invoke FreeImage_Initialise
;72

;73
InitGLFunctions 
;74

;75

;76

;77

;78

;79

;80

;81
cSHADER_CreateShader shader1,"shaders\font.vert","shaders\font.frag"
;82

;83

;84

;85

;86
cMODEL_CreateGeometry pModel
;87

;88

;89

;90

;91

;92

;93

;94

;95
invoke glEnable,GL_DEPTH_TEST
;96
invoke glDepthFunc,GL_LEQUAL
;97
invoke glEnable,GL_TEXTURE_2D
;98

;99
invoke glEnable,GL_BLEND
;100
invoke glBlendFunc,GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA
;101

;102

;103

;104

;105

;106
movd	xmm3,coloralpha
;107
movd	xmm2,colorcomathree
;108
movd	xmm1,colorcmmasn
;109
movd	xmm0,colorcmmasn
;110
invoke glClearColor
;111

;112

;113

;114

;115

;116

;117

;118
mat4_identity matrix1
;119
PrintMatrix "mat4.identity",matrix1
;120

;121

;125

;126

;127

;131

;132

;133

ENDM
.data

;134

;135

;136

;137
 numLtr1 dq 0
;138

;139
 RDIptr dq 0
;140

;141

;142

;143

;144

.code


SystemRender MACRO

;145

;146

;147
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;148

;149

;150

;151

;152

;153

;154

;155
mov rax,qword ptr 1
add frameID,rax
;156

;157
cSHADER_Use shader1
;158

;159
cSHADER_SetUniform1i shader1,"frame",frameID
;160

;161

;162

;163

;164

;165

;166
mov rax,qword ptr troneptr1X
mov  qword ptr translate1[0],rax
;167
mov rax,qword ptr troneptr1Y
mov  qword ptr translate1[8],rax
;168

;169

;174

;175
PrintOutAllText textTest1
;176

;177

;178

;179

ENDM
.data

;180

;181

;182

.code


SystemDestroy MACRO

;183

;184

;185

ENDM
.data

;186

;187

;188

;189

;190

;191

;192
 frameID dq 0
;193

;194

;195

;196

;197

;198
colorcomathree dd 0.3
;199
colorcmmasevben dd 0.7
;200
colorcmmasn dd 0.25
;201
coloralpha dd 1.0
;202

;203

;204
projection dq 1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0
;205
camera dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-1.5300090086,1.0
;206
model dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0
;207

;208
scale1 dq 0.1,0.1,0.1
;209
translate1 dq-1.0,1.0,0.0
;210

;211

;212

;213

;214

;215

;216

;217
.data
;218
 wiid dq 0
;219

;220

;221

;222

;223
.data
;224
 tmpNumber11 dq 0
;225

;226

;227
