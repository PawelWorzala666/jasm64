
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
include models/model-09.a.asm
;12

;13

;14

;15
.data
;16

;17
shader1 label cSHADER
;18

;19

;20
.data
;21

;22

;23

;24

;25

;26

;27

;28
.data?
;29

;30

;31

;32

;33

;34
.data
;35

;36

;37

;38

;39

;40

;41

;42

;43

;44

;45

;46

;47

;48

;49

;50
 projN2 dq -1.0
;51

;52
tarnslate11 dq 0.0,-4.310,-5.30
;53

;54

;55

;56

;57
.code
;58

;59

;60

.code


SystemInit MACRO

;61

;62
invoke FreeImage_Initialise
;63

;64
InitGLFunctions 
;65

;66

;67

;68

;69

;70

;71

;72

;73
mat4_identity matrix1
;74
mat4_identity matrix2
;75
Math_Deg2Rad angleY42,angleY42
;76
mat4_rotateY matrix1,matrix2,angleY42
;77
PrintMatrix "mat4.identity",matrix1
;78

;79
mat4_identity camera11
;80
mat4_identity matrix2
;81
mat4_translate camera11,matrix2,tarnslate11
;82
PrintMatrix "mat4.translate",camera11
;83

;84

;85
Math_podziel screen.fwidth,screen.fheight,aspect112
;86
mat4_perspectiveNO projection1,fovy112,aspect112,near112,far112
;87
mov rax,qword ptr projN2
mov  qword ptr projection1[88],rax
;88

;89
PrintMatrix "mat4.perspectiveNO",projection1
;90

;91

;92

;95

;96

;97

;98

;99

;100

;101

;102

;103
invoke printf, "before load shaders %s",lf
;104

;105
cSHADER_CreateShader shader1,"shaders\color.vert","shaders\color.frag"
;106

;107
invoke printf, "before geom laded %s",lf
;108

;109
ModelCreateGeometry 
;110

;111
invoke printf, "shaders and geom laded %s",lf
;112

;113

;114

;115

;116
invoke glEnable,GL_DEPTH_TEST
;117
invoke glDepthFunc,GL_LEQUAL
;118
invoke glEnable,GL_TEXTURE_2D
;119

;120

;121

;122

;123

;124

;125
invoke printf, "end init %s",lf
;126

;127

;128

;129

;130

;131

;132

ENDM
.data

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

.code


SystemRender MACRO

;146

;147

;148
invoke printf, "SystemRender %s",lf
;149

;150

;151

;152

;153

;154
movd	xmm3,consta10
;155
movd	xmm2,constd07
;156
movd	xmm1,constd07
;157
movd	xmm0,constd07
;158
invoke	glClearColor
;159

;160
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
;161

;162

;163

;164

;165

;166

;167
invoke printf, "SystemRender %s",lf
;168

;169

;170

;171

;172

;173
mov rax,qword ptr 1
add frameID,rax
;174

;175
cSHADER_Use shader1
;176

;177
cSHADER_SetUniform1i shader1,"frame",frameID
;178

;179
cSHADER_SetUniformMatrix shader1,"projection",projection1
;180
cSHADER_SetUniformMatrix shader1,"camera",camera11
;181
cSHADER_SetUniformMatrix shader1,"model",matrix1
;182

;183

;184

;185
ModelRender 
;186

;187

;188

;189

;190

;191

;192

;193

ENDM
.data

;194

;195

;196

;197
 frameID dq 0
;198

;199

;200

.code


SystemDestroy MACRO

;201

;202

;203

;204

;205

ENDM
.data

;206

;207

;208
