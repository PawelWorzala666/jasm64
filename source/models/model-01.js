
.data?

var bufferID
var bufferCoordID
var VAO
var ptextureID1

.data

var projection = [1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0]
var camera = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-9.000090086,1.0]
var model = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]


.data?
var textures1

class cMODEL{
    constructor(){
        this.VAO = 0
        this.bufferID = 0
    }
    CreateGeometry(){



        
        LoadTexture('textures\girl.jpg', textures1)


        gl.GenVertexArrays(1, *VAO)
        gl.BindVertexArray(VAO)
    
        gl.GenBuffers(1,*bufferID)
        gl.BindBuffer(gl.ARRAY_BUFFER, bufferID)
        gl.BufferData(gl.ARRAY_BUFFER, 18*8, *vertices,gl.STATIC_DRAW)
    
        gl.EnableVertexAttribArray(0)
        gl.VertexAttribPointer(0,3,gl.DOUBLE,gl.FALSE, 3*8, 0)
    
        gl.GenBuffers(1,*bufferCoordID)
        gl.BindBuffer(gl.ARRAY_BUFFER, bufferCoordID)
        gl.BufferData(gl.ARRAY_BUFFER, 12*8, *coords,gl.STATIC_DRAW)
    
        gl.EnableVertexAttribArray(1)
        gl.VertexAttribPointer(1,2,gl.DOUBLE,gl.FALSE, 2*8, 0)


        //ptextureID1 = LoadTexture(*fileTex2)
    
    }
    ModelRender(){


        //frameID++

        //SetUniform1d(programID, 'frame', frameID)


        //SetUniformMatrix(programID, 'projection', projection)
        //SetUniformMatrix(programID, 'camera', camera)
        //SetUniformMatrix(programID, 'model', model)


        //gl.BindTexture(gl.TEXTURE_2D, ptextureID1)

        gl.ActiveTexture(gl.TEXTURE0);
        gl.BindTexture(gl.TEXTURE_2D, textures1)
        cSHADER_SetUniform1i(shader1, 'diffuseTexture', 0)
    

        gl.BindVertexArray(VAO)
    
        //gl.BindBuffer,gl.ELEMENT_ARRAY_BUFFER, *indID
    
        gl.DrawArrays(gl.TRIANGLES, 0, 6)
    
        //glDrawElements(gl.TRIANGLES, 3*2, gl.UNSIGNED_SHORT,0)
    
    }
}


    .data

    var frameID = 0
    var frmoneptr = 1

    //var fileTex2 = 'texture.jpg'
    .data?
    var hfile1
.data

var vertices = [1.0,1.0,0.0, 1.0,-1.0,0.0, -1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,1.0,0.0]
var coords   = [1.0,1.0, 1.0,0.0, 0.0,0.0, 1.0,1.0, 0.0,0.0, 0.0,1.0]


function SystemDestroy(){

    
}