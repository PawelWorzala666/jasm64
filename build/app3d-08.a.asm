
.data
fovy112 dq 45.0
aspect112 dq 1.0
near112 dq 0.1
far112 dq 100.0
matrix1 dq 16 dup(0.0)
matrix2 dq 16 dup(0.0)
projection1 dq 16 dup(0.0)
camera11 dq 16 dup(0.0)
angleY42 dq 193.0
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
include models/model-08.a.asm
;12

;13

;14

;15
.data
;16
pModel label cMODEL
;17

;18
shader1 label cSHADER
;19

;20

;21
.data
;22

;23

;24

;25

;26

;27

;28

;29
.data?
;30

;31

;32

;33

;34

;35
.data
;36

;37
scale1 dq 7.2,0.8,1.4
;38

;39

;40

;41
axisY dq 0.0,1.0,0.0
;42

;43

;44

;45

;46

;47
eye22 dq 0.10,0.0310,0.80
;48
center22 dq 0.10,0.30,-0.80
;49
up22 dq 0.0,1.0,0.0
;50

;51
 projN1 dq -2.0202020202020203
;52
 projN2 dq -1.0
;53

;54
tarnslate11 dq 0.0,-4.310,-5.30
;55

;56

;57

;58

;59
.code
;60

;61

;62

.code


SystemInit MACRO

;63

;64
invoke FreeImage_Initialise
;65

;66
InitGLFunctions 
;67

;68

;69

;70
invoke printf, "before load shaders %s",lf
;71

;72
cSHADER_CreateShader shader1,"shaders\color.vert","shaders\color.frag"
;73

;74
invoke printf, "before geom laded %s",lf
;75

;76
cMODEL_CreateGeometry pModel
;77

;78
invoke printf, "shaders and geom laded %s",lf
;79

;80

;81

;82

;83
invoke glEnable,GL_DEPTH_TEST
;84
invoke glDepthFunc,GL_LEQUAL
;85
invoke glEnable,GL_TEXTURE_2D
;86

;87

;88

;89

;90

;91

;92
invoke printf, "end init %s",lf
;93

;94

;95

;96

;97

;98

;99

;100

;101
mat4_identity matrix1
;102
mat4_identity matrix2
;103
Math_Deg2Rad angleY42,angleY42
;104
mat4_rotateY matrix1,matrix2,angleY42
;105
PrintMatrix "mat4.identity",matrix1
;106

;107
mat4_identity camera11
;108
mat4_identity matrix2
;109
mat4_translate camera11,matrix2,tarnslate11
;110
PrintMatrix "mat4.translate",camera11
;111

;112
Math_podziel screen.fwidth,screen.fheigth,aspect112
;113
mat4_perspectiveNO projection1,fovy112,aspect112,near112,far112
;114
mov rax,qword ptr projN2
mov  qword ptr projection1[88],rax
;115
mov rax,qword ptr projN1
mov  qword ptr projection1[112],rax
;116
PrintMatrix "mat4.perspectiveNO",projection1
;117

;118

;119

;122

;123

ENDM
.data

;124

;125

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

.code


SystemRender MACRO

;137

;138

;139

;140

;141

;142

;143
movd	xmm3,consta10
;144
movd	xmm2,constd07
;145
movd	xmm1,constd07
;146
movd	xmm0,constd07
;147
invoke	glClearColor
;148

;149
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;150

;151

;152

;153

;154

;155

;156

;157

;158

;159

;160

;161

;162
mov rax,qword ptr 1
add frameID,rax
;163

;164
cSHADER_Use shader1
;165

;166
cSHADER_SetUniform1i shader1,"frame",frameID
;167

;168
cSHADER_SetUniformMatrix shader1,"projection",projection1
;169
cSHADER_SetUniformMatrix shader1,"camera",camera11
;170
cSHADER_SetUniformMatrix shader1,"model",matrix1
;171

;172

;173

;174
cMODEL_ModelRender pModel
;175

;176

;177

;178

;179

;180

;181

;182

ENDM
.data

;183

;184

;185

;186
 frameID dq 0
;187

;188

;189

.code


SystemDestroy MACRO

;190

;191

;192

;193

;194

ENDM
.data

;195

;196

;197
