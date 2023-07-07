
.data
fovy332 dq 45.0
aspect112 dq 1.0
near112 dq 0.01
far112 dq 1000.0
.code


;0

;1

;2

;3

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
include models/model-04.a.asm
;11

;12

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
.data
;23

;24

;25

;26

;27

;28

;29

;30
projection dq 1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0
;31
camera dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,-2.310,-1.30,1.0
;32
model dq 1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0
;33

;34
cameraPosition dq 0.0,-2.310,-1.30
;35

;36

;37

;38

;39

.code


SystemInit MACRO

;40

;41
invoke FreeImage_Initialise
;42

;43
InitGLFunctions 
;44

;45

;46
rcall SystemInitWorker
;47

;48

;49
invoke printf, "before load shaders %s",lf
;50

;51
cSHADER_CreateShader shader1,"shaders\default.vert","shaders\default.frag"
;52

;53
invoke printf, "before geom laded %s",lf
;54

;55
cMODEL_CreateGeometry pModel
;56

;57
invoke printf, "shaders and geom laded %s",lf
;58

;59

;60

;61

;62
invoke glEnable,GL_DEPTH_TEST
;63
invoke glDepthFunc,GL_LEQUAL
;64
invoke glEnable,GL_TEXTURE_2D
;65

;66

;67

;68

;69

;70

;71
invoke printf, "end init %s",lf
;72

;73

;74

;78

;79

;80

;81

;82

;83

;84

;87

;88

;89

;90

ENDM
.data

;91

;92

;93

;94

;95

;96

;97

;98

;99

;100

;101

;102
.code
SystemInitWorker PROC


;103

;104
invoke printf, "SystemInitWorker %s",lf
;105

;106

ret
SystemInitWorker ENDP
.data

;107

;108

;109

;110

;111

;112

;113

;114

.code


SystemRender MACRO

;115

;116

;117

;118

;119

;120

;121
movd	xmm3,consta10
;122
movd	xmm2,constd07
;123
movd	xmm1,constd07
;124
movd	xmm0,constd07
;125
invoke	glClearColor
;126

;127
invoke glClear,GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT
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

;139

;140
mov rax,qword ptr 1
add frameID,rax
;141

;142
cSHADER_Use shader1
;143

;144
cSHADER_SetUniform1i shader1,"frame",frameID
;145

;146
cSHADER_SetUniformMatrix shader1,"projection",projection
;147
cSHADER_SetUniformMatrix shader1,"camera",camera
;148
cSHADER_SetUniformMatrix shader1,"model",model
;149

;150

;151

;152
cMODEL_ModelRender pModel
;153

;154

;155

;156

;157

;158

;159

;160

ENDM
.data

;161

;162

;163

;164
 frameID dq 0
;165

;166

;167

.code


SystemDestroy MACRO

;168

;169

;170

;171

;172

ENDM
.data

;173

;174

;175

;176
.data?
;177

;178

;179

;180
.data
;181

;182
