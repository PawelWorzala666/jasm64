
.data
zeroptr11 dq 0.0
zeroneptr11 dq 1.0
nnonepttr222 dq 1.0
onyptr1 dq 1.0
twoonyptr1 dq 2.0
zzeroo dq 0.0
zeroop11 dq 0.0


mino11ne11 dq 1.0
plnone11 dq 1.0


minOnPt1 dq 1.0
fovy33 dq 45.0
fovy11 dq 45.0
aspect11 dq 1.0
near11 dq 0.1
far11 dq 100.0
rad1112 dq 34.44
angleY22 dq 34.66
radCC111 dq 0.0
.code


;0

;1

;2

;5

;6
include utils/utils.a.asm
;7
include utils/math.a.asm
;8

;9

;10

;11

;12
.data?
;13

;14
.data
;15

;16

;17

;18

;19

;20

.code






mat4_create MACRO

;21
mov ooout,alloc(128)
;22

;23

;39

;40
mov rax,qword ptr ooout
;41

ENDM
.data

;42

;43

.code






mat4_identity MACRO oout

;44
mov rax,qword ptr zeroneptr11
mov  qword ptr oout[0],rax
;45
mov rax,qword ptr zeroptr11
mov  qword ptr oout[8],rax
;46
mov rax,qword ptr zeroptr11
mov  qword ptr oout[16],rax
;47
mov rax,qword ptr zeroptr11
mov  qword ptr oout[24],rax
;48
mov rax,qword ptr zeroptr11
mov  qword ptr oout[32],rax
;49
mov rax,qword ptr zeroneptr11
mov  qword ptr oout[40],rax
;50
mov rax,qword ptr zeroptr11
mov  qword ptr oout[48],rax
;51
mov rax,qword ptr zeroptr11
mov  qword ptr oout[56],rax
;52
mov rax,qword ptr zeroptr11
mov  qword ptr oout[64],rax
;53
mov rax,qword ptr zeroptr11
mov  qword ptr oout[72],rax
;54
mov rax,qword ptr zeroneptr11
mov  qword ptr oout[80],rax
;55
mov rax,qword ptr zeroptr11
mov  qword ptr oout[88],rax
;56
mov rax,qword ptr zeroptr11
mov  qword ptr oout[96],rax
;57
mov rax,qword ptr zeroptr11
mov  qword ptr oout[104],rax
;58
mov rax,qword ptr zeroptr11
mov  qword ptr oout[112],rax
;59
mov rax,qword ptr zeroneptr11
mov  qword ptr oout[120],rax
;60
mov rax,qword ptr oout
;61

ENDM
.data

;62

;63

;64

.code












































































mat4_translate MACRO oout,a,v

;65

mov rax,qword ptr v[0]
mov x,rax
;66

mov rax,qword ptr v[8]
mov y,rax
;67

mov rax,qword ptr v[16]
mov z,rax
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
mov rax,qword ptr a[0]
mov a00,rax
;83
mov rax,qword ptr a[8]
mov a01,rax
;84
mov rax,qword ptr a[16]
mov a02,rax
;85
mov rax,qword ptr a[24]
mov a03,rax
;86
mov rax,qword ptr a[32]
mov a10,rax
;87
mov rax,qword ptr a[40]
mov a11,rax
;88
mov rax,qword ptr a[48]
mov a12,rax
;89
mov rax,qword ptr a[56]
mov a13,rax
;90
mov rax,qword ptr a[64]
mov a20,rax
;91
mov rax,qword ptr a[72]
mov a21,rax
;92
mov rax,qword ptr a[80]
mov a22,rax
;93
mov rax,qword ptr a[88]
mov a23,rax
;94

;95
mov rax,qword ptr a00
mov  qword ptr oout[0],rax
;96
mov rax,qword ptr a01
mov  qword ptr oout[8],rax
;97
mov rax,qword ptr a02
mov  qword ptr oout[16],rax
;98
mov rax,qword ptr a03
mov  qword ptr oout[24],rax
;99
mov rax,qword ptr a10
mov  qword ptr oout[32],rax
;100
mov rax,qword ptr a11
mov  qword ptr oout[40],rax
;101
mov rax,qword ptr a12
mov  qword ptr oout[48],rax
;102
mov rax,qword ptr a13
mov  qword ptr oout[56],rax
;103
mov rax,qword ptr a20
mov  qword ptr oout[64],rax
;104
mov rax,qword ptr a21
mov  qword ptr oout[72],rax
;105
mov rax,qword ptr a22
mov  qword ptr oout[80],rax
;106
mov rax,qword ptr a23
mov  qword ptr oout[88],rax
;107

;108

Math_pomnoz a20,z,pa20z

Math_pomnoz a10,y,pa10y

Math_pomnoz a00,x,pa00x

Math_dodaj pa20z,a[96],ppa20za

Math_dodaj pa10y,ppa20za,ppa10yppa20za

Math_dodaj pa00x,ppa10yppa20za,ppa00xppa10yppa20za
mov rax,qword ptr ppa00xppa10yppa20za
mov  qword ptr oout[96],rax
;109

Math_pomnoz a21,z,pa21z

Math_pomnoz a11,y,pa11y

Math_pomnoz a01,x,pa01x

Math_dodaj pa21z,a[104],ppa21za

Math_dodaj pa11y,ppa21za,ppa11yppa21za

Math_dodaj pa01x,ppa11yppa21za,ppa01xppa11yppa21za
mov rax,qword ptr ppa01xppa11yppa21za
mov  qword ptr oout[104],rax
;110

Math_pomnoz a22,z,pa22z

Math_pomnoz a12,y,pa12y

Math_pomnoz a02,x,pa02x

Math_dodaj pa22z,a[112],ppa22za

Math_dodaj pa12y,ppa22za,ppa12yppa22za

Math_dodaj pa02x,ppa12yppa22za,ppa02xppa12yppa22za
mov rax,qword ptr ppa02xppa12yppa22za
mov  qword ptr oout[112],rax
;111

Math_pomnoz a23,z,pa23z

Math_pomnoz a13,y,pa13y

Math_pomnoz a03,x,pa03x

Math_dodaj pa23z,a[120],ppa23za

Math_dodaj pa13y,ppa23za,ppa13yppa23za

Math_dodaj pa03x,ppa13yppa23za,ppa03xppa13yppa23za
mov rax,qword ptr ppa03xppa13yppa23za
mov  qword ptr oout[120],rax
;112

;113
mov rax,qword ptr oout
;114

ENDM
.data

;115

;116

;117

.code







mat4_scale MACRO oout,a,v

;118

;119

;120

;121

;122

;123

;124

Math_pomnoz a[0],v[0],pav
mov rax,qword ptr pav
mov  qword ptr oout[0],rax
;125

Math_pomnoz a[8],v[0],pav
mov rax,qword ptr pav
mov  qword ptr oout[8],rax
;126

Math_pomnoz a[16],v[0],pav
mov rax,qword ptr pav
mov  qword ptr oout[16],rax
;127

Math_pomnoz a[24],v[0],pav
mov rax,qword ptr pav
mov  qword ptr oout[24],rax
;128

Math_pomnoz a[32],v[8],pav
mov rax,qword ptr pav
mov  qword ptr oout[32],rax
;129

Math_pomnoz a[40],v[8],pav
mov rax,qword ptr pav
mov  qword ptr oout[40],rax
;130

Math_pomnoz a[48],v[8],pav
mov rax,qword ptr pav
mov  qword ptr oout[48],rax
;131

Math_pomnoz a[56],v[8],pav
mov rax,qword ptr pav
mov  qword ptr oout[56],rax
;132

Math_pomnoz a[64],v[16],pav
mov rax,qword ptr pav
mov  qword ptr oout[64],rax
;133

Math_pomnoz a[72],v[16],pav
mov rax,qword ptr pav
mov  qword ptr oout[72],rax
;134

Math_pomnoz a[80],v[16],pav
mov rax,qword ptr pav
mov  qword ptr oout[80],rax
;135

Math_pomnoz a[88],v[16],pav
mov rax,qword ptr pav
mov  qword ptr oout[88],rax
;136
mov rax,qword ptr a[96]
mov  qword ptr oout[96],rax
;137
mov rax,qword ptr a[104]
mov  qword ptr oout[104],rax
;138
mov rax,qword ptr a[112]
mov  qword ptr oout[112],rax
;139
mov rax,qword ptr a[120]
mov  qword ptr oout[120],rax
;140
mov rax,qword ptr oout
;141

ENDM
.data

;142

;143

;144

;145

.code




















































































































































































mat4_rotate MACRO oout,a,rad,axis

;146

mov rax,qword ptr axis[0]
mov x,rax
;147

mov rax,qword ptr axis[8]
mov y,rax
;148

mov rax,qword ptr axis[16]
mov z,rax
;149

;150

;151

Math_pomnoz z,z,pzz

Math_pomnoz y,y,pyy

Math_pomnoz x,x,pxx

Math_dodaj pyy,pzz,ppyypzz

Math_dodaj pxx,ppyypzz,ppxxppyypzz
mov rax,qword ptr ppxxppyypzz
mov sqr11,rax
;152
Math_sqrt sqr11,len11
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

;163

;164

;165

;166

;167

;168

;169

;170

;171

;172

;173

;174

;175

;176

;177

;178

;179

;180

;181

;182

;183

;184

Math_podziel nnonepttr222,len11,pnnonepttr222len11
mov rax,qword ptr pnnonepttr222len11
mov len11,rax
;185

Math_pomnoz x,len11,pxlen11
mov rax,qword ptr pxlen11
mov x,rax
;186

Math_pomnoz y,len11,pylen11
mov rax,qword ptr pylen11
mov y,rax
;187

Math_pomnoz z,len11,pzlen11
mov rax,qword ptr pzlen11
mov z,rax
;188

;189
Math_sin rad,s
;190
Math_cos rad,c
;191

Math_odejmnij nnonepttr222,c,pnnonepttr222c
mov rax,qword ptr pnnonepttr222c
mov t,rax
;192

;193
mov rax,qword ptr a[0]
mov a00,rax
;194
mov rax,qword ptr a[8]
mov a01,rax
;195
mov rax,qword ptr a[16]
mov a02,rax
;196
mov rax,qword ptr a[24]
mov a03,rax
;197
mov rax,qword ptr a[32]
mov a10,rax
;198
mov rax,qword ptr a[40]
mov a11,rax
;199
mov rax,qword ptr a[48]
mov a12,rax
;200
mov rax,qword ptr a[56]
mov a13,rax
;201
mov rax,qword ptr a[64]
mov a20,rax
;202
mov rax,qword ptr a[72]
mov a21,rax
;203
mov rax,qword ptr a[80]
mov a22,rax
;204
mov rax,qword ptr a[88]
mov a23,rax
;205

;206

;207

Math_pomnoz x,t,pxt

Math_pomnoz x,pxt,pxpxt

Math_dodaj pxpxt,c,ppxpxtc
mov rax,qword ptr ppxpxtc
mov b00,rax
;208

Math_pomnoz z,s,pzs

Math_pomnoz x,t,pxt

Math_pomnoz y,pxt,pypxt

Math_dodaj pypxt,pzs,ppypxtpzs
mov rax,qword ptr ppypxtpzs
mov b01,rax
;209

Math_pomnoz y,s,pys

Math_pomnoz x,t,pxt

Math_pomnoz z,pxt,pzpxt

Math_odejmnij pzpxt,pys,ppzpxtpys
mov rax,qword ptr ppzpxtpys
mov b02,rax
;210

Math_pomnoz z,s,pzs

Math_pomnoz y,t,pyt

Math_pomnoz x,pyt,pxpyt

Math_odejmnij pxpyt,pzs,ppxpytpzs
mov rax,qword ptr ppxpytpzs
mov b10,rax
;211

Math_pomnoz y,t,pyt

Math_pomnoz y,pyt,pypyt

Math_dodaj pypyt,c,ppypytc
mov rax,qword ptr ppypytc
mov b11,rax
;212

Math_pomnoz x,s,pxs

Math_pomnoz y,t,pyt

Math_pomnoz z,pyt,pzpyt

Math_dodaj pzpyt,pxs,ppzpytpxs
mov rax,qword ptr ppzpytpxs
mov b12,rax
;213

Math_pomnoz y,s,pys

Math_pomnoz z,t,pzt

Math_pomnoz x,pzt,pxpzt

Math_dodaj pxpzt,pys,ppxpztpys
mov rax,qword ptr ppxpztpys
mov b20,rax
;214

Math_pomnoz x,s,pxs

Math_pomnoz z,t,pzt

Math_pomnoz y,pzt,pypzt

Math_odejmnij pypzt,pxs,ppypztpxs
mov rax,qword ptr ppypztpxs
mov b21,rax
;215

Math_pomnoz z,t,pzt

Math_pomnoz z,pzt,pzpzt

Math_dodaj pzpzt,c,ppzpztc
mov rax,qword ptr ppzpztc
mov b22,rax
;216

;217

;218

Math_pomnoz a20,b02,pa20b02

Math_pomnoz a10,b01,pa10b01

Math_pomnoz a00,b00,pa00b00

Math_dodaj pa10b01,pa20b02,ppa10b01pa20b02

Math_dodaj pa00b00,ppa10b01pa20b02,ppa00b00ppa10b01pa20b02
mov rax,qword ptr ppa00b00ppa10b01pa20b02
mov  qword ptr oout[0],rax
;219

Math_pomnoz a21,b02,pa21b02

Math_pomnoz a11,b01,pa11b01

Math_pomnoz a01,b00,pa01b00

Math_dodaj pa11b01,pa21b02,ppa11b01pa21b02

Math_dodaj pa01b00,ppa11b01pa21b02,ppa01b00ppa11b01pa21b02
mov rax,qword ptr ppa01b00ppa11b01pa21b02
mov  qword ptr oout[8],rax
;220

Math_pomnoz a22,b02,pa22b02

Math_pomnoz a12,b01,pa12b01

Math_pomnoz a02,b00,pa02b00

Math_dodaj pa12b01,pa22b02,ppa12b01pa22b02

Math_dodaj pa02b00,ppa12b01pa22b02,ppa02b00ppa12b01pa22b02
mov rax,qword ptr ppa02b00ppa12b01pa22b02
mov  qword ptr oout[16],rax
;221

Math_pomnoz a23,b02,pa23b02

Math_pomnoz a13,b01,pa13b01

Math_pomnoz a03,b00,pa03b00

Math_dodaj pa13b01,pa23b02,ppa13b01pa23b02

Math_dodaj pa03b00,ppa13b01pa23b02,ppa03b00ppa13b01pa23b02
mov rax,qword ptr ppa03b00ppa13b01pa23b02
mov  qword ptr oout[24],rax
;222

Math_pomnoz a20,b12,pa20b12

Math_pomnoz a10,b11,pa10b11

Math_pomnoz a00,b10,pa00b10

Math_dodaj pa10b11,pa20b12,ppa10b11pa20b12

Math_dodaj pa00b10,ppa10b11pa20b12,ppa00b10ppa10b11pa20b12
mov rax,qword ptr ppa00b10ppa10b11pa20b12
mov  qword ptr oout[32],rax
;223

Math_pomnoz a21,b12,pa21b12

Math_pomnoz a11,b11,pa11b11

Math_pomnoz a01,b10,pa01b10

Math_dodaj pa11b11,pa21b12,ppa11b11pa21b12

Math_dodaj pa01b10,ppa11b11pa21b12,ppa01b10ppa11b11pa21b12
mov rax,qword ptr ppa01b10ppa11b11pa21b12
mov  qword ptr oout[40],rax
;224

Math_pomnoz a22,b12,pa22b12

Math_pomnoz a12,b11,pa12b11

Math_pomnoz a02,b10,pa02b10

Math_dodaj pa12b11,pa22b12,ppa12b11pa22b12

Math_dodaj pa02b10,ppa12b11pa22b12,ppa02b10ppa12b11pa22b12
mov rax,qword ptr ppa02b10ppa12b11pa22b12
mov  qword ptr oout[48],rax
;225

Math_pomnoz a23,b12,pa23b12

Math_pomnoz a13,b11,pa13b11

Math_pomnoz a03,b10,pa03b10

Math_dodaj pa13b11,pa23b12,ppa13b11pa23b12

Math_dodaj pa03b10,ppa13b11pa23b12,ppa03b10ppa13b11pa23b12
mov rax,qword ptr ppa03b10ppa13b11pa23b12
mov  qword ptr oout[56],rax
;226

Math_pomnoz a20,b22,pa20b22

Math_pomnoz a10,b21,pa10b21

Math_pomnoz a00,b20,pa00b20

Math_dodaj pa10b21,pa20b22,ppa10b21pa20b22

Math_dodaj pa00b20,ppa10b21pa20b22,ppa00b20ppa10b21pa20b22
mov rax,qword ptr ppa00b20ppa10b21pa20b22
mov  qword ptr oout[64],rax
;227

Math_pomnoz a21,b22,pa21b22

Math_pomnoz a11,b21,pa11b21

Math_pomnoz a01,b20,pa01b20

Math_dodaj pa11b21,pa21b22,ppa11b21pa21b22

Math_dodaj pa01b20,ppa11b21pa21b22,ppa01b20ppa11b21pa21b22
mov rax,qword ptr ppa01b20ppa11b21pa21b22
mov  qword ptr oout[72],rax
;228

Math_pomnoz a22,b22,pa22b22

Math_pomnoz a12,b21,pa12b21

Math_pomnoz a02,b20,pa02b20

Math_dodaj pa12b21,pa22b22,ppa12b21pa22b22

Math_dodaj pa02b20,ppa12b21pa22b22,ppa02b20ppa12b21pa22b22
mov rax,qword ptr ppa02b20ppa12b21pa22b22
mov  qword ptr oout[80],rax
;229

Math_pomnoz a23,b22,pa23b22

Math_pomnoz a13,b21,pa13b21

Math_pomnoz a03,b20,pa03b20

Math_dodaj pa13b21,pa23b22,ppa13b21pa23b22

Math_dodaj pa03b20,ppa13b21pa23b22,ppa03b20ppa13b21pa23b22
mov rax,qword ptr ppa03b20ppa13b21pa23b22
mov  qword ptr oout[88],rax
;230

;231

;232

;233
mov rax,qword ptr a[96]
mov  qword ptr oout[96],rax
;234
mov rax,qword ptr a[104]
mov  qword ptr oout[104],rax
;235
mov rax,qword ptr a[112]
mov  qword ptr oout[112],rax
;236
mov rax,qword ptr a[120]
mov  qword ptr oout[120],rax
;237

;238
mov rax,qword ptr oout
;239

ENDM
.data

;240

;241

;242

;250

.code












































mat4_rotateX MACRO oout,a,rad

;251

;252
Math_sin rad,s
;253

;254
Math_cos rad,c
;255

mov rax,qword ptr a[32]
mov a10,rax
;256

mov rax,qword ptr a[40]
mov a11,rax
;257

mov rax,qword ptr a[48]
mov a12,rax
;258

mov rax,qword ptr a[56]
mov a13,rax
;259

mov rax,qword ptr a[64]
mov a20,rax
;260

mov rax,qword ptr a[72]
mov a21,rax
;261

mov rax,qword ptr a[80]
mov a22,rax
;262

mov rax,qword ptr a[88]
mov a23,rax
;263

;264

;265

;266
mov rax,qword ptr a[0]
mov  qword ptr oout[0],rax
;267
mov rax,qword ptr a[8]
mov  qword ptr oout[8],rax
;268
mov rax,qword ptr a[16]
mov  qword ptr oout[16],rax
;269
mov rax,qword ptr a[24]
mov  qword ptr oout[24],rax
;270
mov rax,qword ptr a[96]
mov  qword ptr oout[96],rax
;271
mov rax,qword ptr a[104]
mov  qword ptr oout[104],rax
;272
mov rax,qword ptr a[112]
mov  qword ptr oout[112],rax
;273
mov rax,qword ptr a[120]
mov  qword ptr oout[120],rax
;274

;275

;276

;277

Math_pomnoz a20,s,pa20s

Math_pomnoz a10,c,pa10c

Math_dodaj pa10c,pa20s,ppa10cpa20s
mov rax,qword ptr ppa10cpa20s
mov  qword ptr oout[32],rax
;278

Math_pomnoz a21,s,pa21s

Math_pomnoz a11,c,pa11c

Math_dodaj pa11c,pa21s,ppa11cpa21s
mov rax,qword ptr ppa11cpa21s
mov  qword ptr oout[40],rax
;279

Math_pomnoz a22,s,pa22s

Math_pomnoz a12,c,pa12c

Math_dodaj pa12c,pa22s,ppa12cpa22s
mov rax,qword ptr ppa12cpa22s
mov  qword ptr oout[48],rax
;280

Math_pomnoz a23,s,pa23s

Math_pomnoz a13,c,pa13c

Math_dodaj pa13c,pa23s,ppa13cpa23s
mov rax,qword ptr ppa13cpa23s
mov  qword ptr oout[56],rax
;281

Math_pomnoz a10,s,pa10s

Math_pomnoz a20,c,pa20c

Math_odejmnij pa20c,pa10s,ppa20cpa10s
mov rax,qword ptr ppa20cpa10s
mov  qword ptr oout[64],rax
;282

Math_pomnoz a11,s,pa11s

Math_pomnoz a21,c,pa21c

Math_odejmnij pa21c,pa11s,ppa21cpa11s
mov rax,qword ptr ppa21cpa11s
mov  qword ptr oout[72],rax
;283

Math_pomnoz a12,s,pa12s

Math_pomnoz a22,c,pa22c

Math_odejmnij pa22c,pa12s,ppa22cpa12s
mov rax,qword ptr ppa22cpa12s
mov  qword ptr oout[80],rax
;284

Math_pomnoz a13,s,pa13s

Math_pomnoz a23,c,pa23c

Math_odejmnij pa23c,pa13s,ppa23cpa13s
mov rax,qword ptr ppa23cpa13s
mov  qword ptr oout[88],rax
;285
mov rax,qword ptr oout
;286

ENDM
.data

;287

;288

;296

.code




































mat4_rotateY MACRO oout,a,rad

;297

;298
Math_sin rad,s
;299

;300
Math_cos rad,c
;301

mov rax,qword ptr a[0]
mov a00,rax
;302

mov rax,qword ptr a[8]
mov a01,rax
;303

mov rax,qword ptr a[16]
mov a02,rax
;304

mov rax,qword ptr a[24]
mov a03,rax
;305

mov rax,qword ptr a[64]
mov a20,rax
;306

mov rax,qword ptr a[72]
mov a21,rax
;307

mov rax,qword ptr a[80]
mov a22,rax
;308

mov rax,qword ptr a[88]
mov a23,rax
;309

;310

;311

;312
mov rax,qword ptr a[32]
mov  qword ptr oout[32],rax
;313
mov rax,qword ptr a[40]
mov  qword ptr oout[40],rax
;314
mov rax,qword ptr a[48]
mov  qword ptr oout[48],rax
;315
mov rax,qword ptr a[56]
mov  qword ptr oout[56],rax
;316
mov rax,qword ptr a[96]
mov  qword ptr oout[96],rax
;317
mov rax,qword ptr a[104]
mov  qword ptr oout[104],rax
;318
mov rax,qword ptr a[112]
mov  qword ptr oout[112],rax
;319
mov rax,qword ptr a[120]
mov  qword ptr oout[120],rax
;320

;321

;322

;323

Math_pomnoz a20,s,pa20s

Math_pomnoz a00,c,pa00c

Math_odejmnij pa00c,pa20s,ppa00cpa20s
mov rax,qword ptr ppa00cpa20s
mov  qword ptr oout[0],rax
;324

Math_pomnoz a21,s,pa21s

Math_pomnoz a01,c,pa01c

Math_odejmnij pa01c,pa21s,ppa01cpa21s
mov rax,qword ptr ppa01cpa21s
mov  qword ptr oout[8],rax
;325

Math_pomnoz a22,s,pa22s

Math_pomnoz a02,c,pa02c

Math_odejmnij pa02c,pa22s,ppa02cpa22s
mov rax,qword ptr ppa02cpa22s
mov  qword ptr oout[16],rax
;326

Math_pomnoz a23,s,pa23s

Math_pomnoz a03,c,pa03c

Math_odejmnij pa03c,pa23s,ppa03cpa23s
mov rax,qword ptr ppa03cpa23s
mov  qword ptr oout[24],rax
;327

Math_pomnoz a20,c,pa20c

Math_pomnoz a00,s,pa00s

Math_dodaj pa00s,pa20c,ppa00spa20c
mov rax,qword ptr ppa00spa20c
mov  qword ptr oout[64],rax
;328

Math_pomnoz a21,c,pa21c

Math_pomnoz a01,s,pa01s

Math_dodaj pa01s,pa21c,ppa01spa21c
mov rax,qword ptr ppa01spa21c
mov  qword ptr oout[72],rax
;329

Math_pomnoz a22,c,pa22c

Math_pomnoz a02,s,pa02s

Math_dodaj pa02s,pa22c,ppa02spa22c
mov rax,qword ptr ppa02spa22c
mov  qword ptr oout[80],rax
;330

Math_pomnoz a23,c,pa23c

Math_pomnoz a03,s,pa03s

Math_dodaj pa03s,pa23c,ppa03spa23c
mov rax,qword ptr ppa03spa23c
mov  qword ptr oout[88],rax
;331
mov rax,qword ptr oout
;332

ENDM
.data

;333

;334

;342

.code













mat4_rotateZ MACRO oout,a,rad

;343

;344
Math_sin rad,s
;345

;346
Math_cos rad,c
;347

mov rax,qword ptr a[0]
mov a00,rax
;348

mov rax,qword ptr a[8]
mov a01,rax
;349

mov rax,qword ptr a[16]
mov a02,rax
;350

mov rax,qword ptr a[24]
mov a03,rax
;351

mov rax,qword ptr a[32]
mov a10,rax
;352

mov rax,qword ptr a[40]
mov a11,rax
;353

mov rax,qword ptr a[48]
mov a12,rax
;354

mov rax,qword ptr a[56]
mov a13,rax
;355

;356

;357

;358
mov rax,qword ptr a[64]
mov  qword ptr oout[64],rax
;359
mov rax,qword ptr a[72]
mov  qword ptr oout[72],rax
;360
mov rax,qword ptr a[80]
mov  qword ptr oout[80],rax
;361
mov rax,qword ptr a[88]
mov  qword ptr oout[88],rax
;362
mov rax,qword ptr a[96]
mov  qword ptr oout[96],rax
;363
mov rax,qword ptr a[104]
mov  qword ptr oout[104],rax
;364
mov rax,qword ptr a[112]
mov  qword ptr oout[112],rax
;365
mov rax,qword ptr a[120]
mov  qword ptr oout[120],rax
;366

;367

;368

;369

Math_pomnoz a10,s,pa10s

Math_pomnoz a00,c,pa00c

Math_dodaj pa00c,pa10s,ppa00cpa10s
mov rax,qword ptr ppa00cpa10s
mov  qword ptr oout[0],rax
;370

Math_pomnoz a11,s,pa11s

Math_pomnoz a01,c,pa01c

Math_dodaj pa01c,pa11s,ppa01cpa11s
mov rax,qword ptr ppa01cpa11s
mov  qword ptr oout[8],rax
;371

Math_pomnoz a12,s,pa12s

Math_pomnoz a02,c,pa02c

Math_dodaj pa02c,pa12s,ppa02cpa12s
mov rax,qword ptr ppa02cpa12s
mov  qword ptr oout[16],rax
;372

Math_pomnoz a13,s,pa13s

Math_pomnoz a03,c,pa03c

Math_dodaj pa03c,pa13s,ppa03cpa13s
mov rax,qword ptr ppa03cpa13s
mov  qword ptr oout[24],rax
;373

Math_pomnoz a00,s,pa00s

Math_pomnoz a10,c,pa10c

Math_odejmnij pa10c,pa00s,ppa10cpa00s
mov rax,qword ptr ppa10cpa00s
mov  qword ptr oout[32],rax
;374

Math_pomnoz a01,s,pa01s

Math_pomnoz a11,c,pa11c

Math_odejmnij pa11c,pa01s,ppa11cpa01s
mov rax,qword ptr ppa11cpa01s
mov  qword ptr oout[40],rax
;375

Math_pomnoz a02,s,pa02s

Math_pomnoz a12,c,pa12c

Math_odejmnij pa12c,pa02s,ppa12cpa02s
mov rax,qword ptr ppa12cpa02s
mov  qword ptr oout[48],rax
;376

Math_pomnoz a03,s,pa03s

Math_pomnoz a13,c,pa13c

Math_odejmnij pa13c,pa03s,ppa13cpa03s
mov rax,qword ptr ppa13cpa03s
mov  qword ptr oout[56],rax
;377
mov rax,qword ptr oout
;378

ENDM
.data

;379

;380

;381

;382

;383
 mintwoonyptr1 dq -2.0
;384
 mnsonyptr1 dq -1.0
;385

;386

;387

;388

;389

.code





























mat4_perspectiveNO MACRO oout,vfovy,vaspect,vnear,vfar

;390

;391

;392

;393

;394

;395

;396
Math_podziel vfovy,twoonyptr1,ff5
;397

;398
Math_tan ff5,ff2
;399

;400

;401

Math_podziel onyptr1,ff2,ponyptr1ff2
mov rax,qword ptr ponyptr1ff2
mov f,rax
;402

Math_podziel f,vaspect,pfvaspect
mov rax,qword ptr pfvaspect
mov  qword ptr oout[0],rax
;403
mov rax,qword ptr zzeroo
mov  qword ptr oout[8],rax
;404
mov rax,qword ptr zzeroo
mov  qword ptr oout[16],rax
;405
mov rax,qword ptr zzeroo
mov  qword ptr oout[24],rax
;406
mov rax,qword ptr zzeroo
mov  qword ptr oout[32],rax
;407
mov rax,qword ptr f
mov  qword ptr oout[40],rax
;408
mov rax,qword ptr zzeroo
mov  qword ptr oout[48],rax
;409
mov rax,qword ptr zzeroo
mov  qword ptr oout[56],rax
;410
mov rax,qword ptr zzeroo
mov  qword ptr oout[64],rax
;411
mov rax,qword ptr zzeroo
mov  qword ptr oout[72],rax
;412
mov rax,qword ptr mnsonyptr1
mov  qword ptr oout[88],rax
;413
mov rax,qword ptr zzeroo
mov  qword ptr oout[96],rax
;414
mov rax,qword ptr zzeroo
mov  qword ptr oout[104],rax
;415
mov rax,qword ptr zzeroo
mov  qword ptr oout[120],rax
;416

;417

;418

Math_odejmnij vnear,vfar,pvnearvfar
mov rax,qword ptr pvnearvfar
mov vnff2,rax
;419

;420

Math_podziel onyptr1,vnff2,ponyptr1vnff2
mov rax,qword ptr ponyptr1vnff2
mov nf,rax
;421

;422

Math_dodaj vfar,vnear,pvfarvnear
mov rax,qword ptr pvfarvnear
mov ffnn343,rax
;423

Math_pomnoz ffnn343,nf,pffnn343nf
mov rax,qword ptr pffnn343nf
mov  qword ptr oout[80],rax
;424

Math_pomnoz vnear,nf,pvnearnf

Math_pomnoz vfar,pvnearnf,pvfarpvnearnf

Math_pomnoz twoonyptr1,pvfarpvnearnf,ptwoonyptr1pvfarpvnearnf
mov rax,qword ptr ptwoonyptr1pvfarpvnearnf
mov  qword ptr oout[112],rax
;425

;426

;430

;431
mov rax,qword ptr minOnPt1
mov  qword ptr oout[88],rax
;432

;433
mov rax,qword ptr oout
;434

ENDM
.data

;435

;436
.data
;437

;438

;439

;440

;441

;442

;443

.code












































































































































mat4_lookAt MACRO oout,eye,center,up

;444

;445

;446

;447

;448

;449

;450

;451

;452

;453

;454

mov rax,qword ptr eye[0]
mov eyex,rax
;455

mov rax,qword ptr eye[8]
mov eyey,rax
;456

mov rax,qword ptr eye[16]
mov eyez,rax
;457

mov rax,qword ptr up[0]
mov upx,rax
;458

mov rax,qword ptr up[8]
mov upy,rax
;459

mov rax,qword ptr up[16]
mov upz,rax
;460

mov rax,qword ptr center[0]
mov centerx,rax
;461

mov rax,qword ptr center[8]
mov centery,rax
;462

mov rax,qword ptr center[16]
mov centerz,rax
;463

;464

;471

;472

Math_odejmnij eyex,centerx,peyexcenterx
mov rax,qword ptr peyexcenterx
mov z0,rax
;473

Math_odejmnij eyey,centery,peyeycentery
mov rax,qword ptr peyeycentery
mov z1,rax
;474

Math_odejmnij eyez,centerz,peyezcenterz
mov rax,qword ptr peyezcenterz
mov z2,rax
;475

;476

;477

;478

Math_pomnoz z2,z2,pz2z2

Math_pomnoz z1,z1,pz1z1

Math_pomnoz z0,z0,pz0z0

Math_dodaj pz1z1,pz2z2,ppz1z1pz2z2

Math_dodaj pz0z0,ppz1z1pz2z2,ppz0z0ppz1z1pz2z2
mov rax,qword ptr ppz0z0ppz1z1pz2z2
mov rr2,rax
;479
Math_sqrt rr2,rr1
;480

Math_podziel plnone11,rr1,pplnone11rr1
mov rax,qword ptr pplnone11rr1
mov len21,rax
;481

Math_pomnoz z0,len21,pz0len21
mov rax,qword ptr pz0len21
mov z0,rax
;482

Math_pomnoz z1,len21,pz1len21
mov rax,qword ptr pz1len21
mov z1,rax
;483

Math_pomnoz z2,len21,pz2len21
mov rax,qword ptr pz2len21
mov z2,rax
;484

;485

Math_pomnoz upz,z1,pupzz1

Math_pomnoz upy,z2,pupyz2

Math_odejmnij pupyz2,pupzz1,ppupyz2pupzz1
mov rax,qword ptr ppupyz2pupzz1
mov x0,rax
;486

Math_pomnoz upx,z2,pupxz2

Math_pomnoz upz,z0,pupzz0

Math_odejmnij pupzz0,pupxz2,ppupzz0pupxz2
mov rax,qword ptr ppupzz0pupxz2
mov x1,rax
;487

Math_pomnoz upy,z0,pupyz0

Math_pomnoz upx,z1,pupxz1

Math_odejmnij pupxz1,pupyz0,ppupxz1pupyz0
mov rax,qword ptr ppupxz1pupyz0
mov x2,rax
;488

Math_pomnoz x2,x2,px2x2

Math_pomnoz x1,x1,px1x1

Math_pomnoz x0,x0,px0x0

Math_dodaj px1x1,px2x2,ppx1x1px2x2

Math_dodaj px0x0,ppx1x1px2x2,ppx0x0ppx1x1px2x2
mov rax,qword ptr ppx0x0ppx1x1px2x2
mov rr2,rax
;489
Math_sqrt rr2,len21
;490

;491

;492

;497

Math_podziel plnone11,len21,pplnone11len21
mov rax,qword ptr pplnone11len21
mov len21,rax
;498

Math_pomnoz x0,len21,px0len21
mov rax,qword ptr px0len21
mov x0,rax
;499

Math_pomnoz x1,len21,px1len21
mov rax,qword ptr px1len21
mov x1,rax
;500

Math_pomnoz x2,len21,px2len21
mov rax,qword ptr px2len21
mov x2,rax
;501

;502

;503

Math_pomnoz z2,x1,pz2x1

Math_pomnoz z1,x2,pz1x2

Math_odejmnij pz1x2,pz2x1,ppz1x2pz2x1
mov rax,qword ptr ppz1x2pz2x1
mov y0,rax
;504

Math_pomnoz z0,x2,pz0x2

Math_pomnoz z2,x0,pz2x0

Math_odejmnij pz2x0,pz0x2,ppz2x0pz0x2
mov rax,qword ptr ppz2x0pz0x2
mov y1,rax
;505

Math_pomnoz z1,x0,pz1x0

Math_pomnoz z0,x1,pz0x1

Math_odejmnij pz0x1,pz1x0,ppz0x1pz1x0
mov rax,qword ptr ppz0x1pz1x0
mov y2,rax
;506

;507

;508

Math_pomnoz y2,y2,py2y2

Math_pomnoz y1,y1,py1y1

Math_pomnoz y0,y0,py0y0

Math_dodaj py1y1,py2y2,ppy1y1py2y2

Math_dodaj py0y0,ppy1y1py2y2,ppy0y0ppy1y1py2y2
mov rax,qword ptr ppy0y0ppy1y1py2y2
mov ssqq11,rax
;509
Math_sqrt ssqq11,len21
;510

;515

Math_podziel plnone11,len21,pplnone11len21
mov rax,qword ptr pplnone11len21
mov len21,rax
;516

Math_pomnoz x0,len21,px0len21
mov rax,qword ptr px0len21
mov x0,rax
;517

Math_pomnoz x1,len21,px1len21
mov rax,qword ptr px1len21
mov x1,rax
;518

Math_pomnoz x2,len21,px2len21
mov rax,qword ptr px2len21
mov x2,rax
;519

;520

;521

;522
mov rax,qword ptr x0
mov  qword ptr oout[0],rax
;523
mov rax,qword ptr y0
mov  qword ptr oout[8],rax
;524
mov rax,qword ptr z0
mov  qword ptr oout[16],rax
;525
mov rax,qword ptr zeroop11
mov  qword ptr oout[24],rax
;526
mov rax,qword ptr x1
mov  qword ptr oout[32],rax
;527
mov rax,qword ptr y1
mov  qword ptr oout[40],rax
;528
mov rax,qword ptr z1
mov  qword ptr oout[48],rax
;529
mov rax,qword ptr zeroop11
mov  qword ptr oout[56],rax
;530
mov rax,qword ptr x2
mov  qword ptr oout[64],rax
;531
mov rax,qword ptr y2
mov  qword ptr oout[72],rax
;532
mov rax,qword ptr z2
mov  qword ptr oout[80],rax
;533
mov rax,qword ptr zeroop11
mov  qword ptr oout[88],rax
;534

;535

Math_pomnoz x2,eyez,px2eyez

Math_pomnoz x1,eyey,px1eyey

Math_pomnoz x0,eyex,px0eyex

Math_dodaj px1eyey,px2eyez,ppx1eyeypx2eyez

Math_dodaj px0eyex,ppx1eyeypx2eyez,ppx0eyexppx1eyeypx2eyez
mov rax,qword ptr ppx0eyexppx1eyeypx2eyez
mov tt1,rax
;536

Math_pomnoz mino11ne11,tt1,pmino11ne11tt1
mov rax,qword ptr pmino11ne11tt1
mov  qword ptr oout[96],rax
;537

;538

Math_pomnoz y2,eyez,py2eyez

Math_pomnoz y1,eyey,py1eyey

Math_pomnoz y0,eyex,py0eyex

Math_dodaj py1eyey,py2eyez,ppy1eyeypy2eyez

Math_dodaj py0eyex,ppy1eyeypy2eyez,ppy0eyexppy1eyeypy2eyez
mov rax,qword ptr ppy0eyexppy1eyeypy2eyez
mov tt2,rax
;539

Math_pomnoz mino11ne11,tt2,pmino11ne11tt2
mov rax,qword ptr pmino11ne11tt2
mov  qword ptr oout[104],rax
;540

;541

Math_pomnoz z2,eyez,pz2eyez

Math_pomnoz z1,eyey,pz1eyey

Math_pomnoz z0,eyex,pz0eyex

Math_dodaj pz1eyey,pz2eyez,ppz1eyeypz2eyez

Math_dodaj pz0eyex,ppz1eyeypz2eyez,ppz0eyexppz1eyeypz2eyez
mov rax,qword ptr ppz0eyexppz1eyeypz2eyez
mov tt3,rax
;542

Math_pomnoz mino11ne11,tt3,pmino11ne11tt3
mov rax,qword ptr pmino11ne11tt3
mov  qword ptr oout[112],rax
;543
mov rax,qword ptr plnone11
mov  qword ptr oout[120],rax
;544

;545
mov rax,qword ptr oout
;546

ENDM
.data

;547

;548

;549

;550

;551

;552

;553

;554

;555

.code






