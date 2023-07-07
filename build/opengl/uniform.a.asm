
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

;10

;11

;12

;13

;14

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

;29

;30

;31

;32

;33

;34

;35
.code
;36

;37

;38

;39

.code


LoadGLFunc MACRO nname,prop

;40
invoke wglGetProcAddress, nname
mov prop,rax
;41

ENDM
.data

;42

;43

;44

;45

.code


InitGLFunctions MACRO

;46

;47
LoadGLFunc "glGenBuffers",glGenBuffers
LoadGLFunc "glCreateShader",glCreateShader
LoadGLFunc "glCreateProgram",glCreateProgram
LoadGLFunc "glShaderSource",glShaderSource
LoadGLFunc "glCompileShader",glCompileShader
LoadGLFunc "glAttachShader",glAttachShader
LoadGLFunc "glLinkProgram",glLinkProgram
LoadGLFunc "glUseProgram",glUseProgram
LoadGLFunc "glGetUniformLocation",glGetUniformLocation
LoadGLFunc "glUniform4f",glUniform4f
LoadGLFunc "glUniform4d",glUniform4d
LoadGLFunc "glUniform1d",glUniform1d
LoadGLFunc "glUniform1i",glUniform1i
LoadGLFunc "glUniform3dv",glUniform3dv
LoadGLFunc "glUniformMatrix4dv",glUniformMatrix4dv
LoadGLFunc "glBindBuffer",glBindBuffer
LoadGLFunc "glBufferData",glBufferData
LoadGLFunc "glVertexAttribPointer",glVertexAttribPointer
LoadGLFunc "glEnableVertexAttribArray",glEnableVertexAttribArray
LoadGLFunc "glGenVertexArrays",glGenVertexArrays
LoadGLFunc "glBindVertexArray",glBindVertexArray
LoadGLFunc "glDeleteShader",glDeleteShader
LoadGLFunc "glCreateFramebuffers",glCreateFramebuffers
LoadGLFunc "glBindFramebuffer",glBindFramebuffer
LoadGLFunc "glFramebufferTexture2D",glFramebufferTexture2D
LoadGLFunc "glValidateProgram",glValidateProgram
LoadGLFunc "glActiveTexture",glActiveTexture
LoadGLFunc "glGenerateMipmap",glGenerateMipmap
LoadGLFunc "glUniform4fv",glUniform4fv
LoadGLFunc "glUniform1iv",glUniform1iv
LoadGLFunc "glUniform4dv",glUniform4dv
;48

;49

ENDM
.data

;50

;51

;52

;53

;54
