

var fs=require('fs')

var vertices = [1.0,1.0,0.0, 1.0,-1.0,0.0, -1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,1.0,0.0]

var arrayU64 = new Float64Array(vertices)

var array8 = new Uint8Array(arrayU64.buffer)




fs.writeFileSync('vertices3.bin',array8)


