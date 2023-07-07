
.data
fovy112 dq 45.0
aspect112 dq 1.0
near112 dq 0.1
far112 dq 100.0
matrix1 dq 16 dup(0.0)
matrix2 dq 16 dup(0.0)
projection1 dq 16 dup(0.0)
camera11 dq 16 dup(0.0)
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
include models/model-05.a.asm
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
tarnslate11 dq 0.0,-2.310,-1.30
;55

;56

;57

;58
.code
;59

;60

;61

.code


SystemInit MACRO

;62

;63
invoke FreeImage_Initialise
;64

;65
InitGLFunctions 
;66

;67

;68

;69
invoke printf, "before load shaders %s",lf
;70

;71
cSHADER_CreateShader shader1,"shaders\default.vert","shaders\default.frag"
;72

;73
invoke printf, "before geom laded %s",lf
;74

;75
cMODEL_CreateGeometry pModel
;76

;77
invoke printf, "shaders and geom laded %s",lf
;78

;79

;80

;81

;82
invoke glEnable,GL_DEPTH_TEST
;83
invoke glDepthFunc,GL_LEQUAL
;84
invoke glEnable,GL_TEXTURE_2D
;85

;86

;87

;88

;89

;90

;91
invoke printf, "end init %s",lf
;92

;93

;94

;95

;96

;97

;98

;99

;100
mat4_identity matrix1
;101
PrintMatrix "mat4.identity",matrix1
;102

;103
mat4_identity camera11
;104
mat4_identity matrix2
;105
mat4_translate camera11,matrix2,tarnslate11
;106
PrintMatrix "mat4.translate",camera11
;107

;108

;109
mat4_perspectiveNO projection1,fovy112,aspect112,near112,far112
;110
mov rax,qword ptr projN2
mov  qword ptr projection1[88],rax
;111

;112
PrintMatrix "mat4.perspectiveNO",projection1
;113

;114

;115

;118

;119

ENDM
.data

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

;132

.code


SystemRender MACRO

;133

;134

;135

;136

;137

;138

;139
movd	xmm3,consta10
;140
movd	xmm2,constd07
;141
movd	xmm1,constd07
;142
movd	xmm0,constd07
;143
invoke	glClearColor
;144

;145
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;146

;147

;148

;149

;150

;151

;152

;153

;154

;155

;156

;157

;158
mov rax,qword ptr 1
add frameID,rax
;159

;160
cSHADER_Use shader1
;161

;162
cSHADER_SetUniform1i shader1,"frame",frameID
;163

;164
cSHADER_SetUniformMatrix shader1,"projection",projection1
;165
cSHADER_SetUniformMatrix shader1,"camera",camera11
;166
cSHADER_SetUniformMatrix shader1,"model",matrix1
;167

;168

;169

;170
cMODEL_ModelRender pModel
;171

;172

;173

;174

;175

;176

;177

;178

ENDM
.data

;179

;180

;181

;182
 frameID dq 0
;183

;184

;185

.code


SystemDestroy MACRO

;186

;187

;188

;189

;190

ENDM
.data

;191

;192

;193
