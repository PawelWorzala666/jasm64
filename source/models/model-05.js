

.data?
var bufferID
var bufferID11

hfile1 dq ?


class cMESH{
    constructor(){
        this.VAO = 0
    }
    CreateBuffer(count1, arrayType1){
        gl.GenBuffers(1,*bufferID)
        gl.BindBuffer(arrayType1, bufferID)

        meshData = alloc(count1)
        ReadFile(hfile1, meshData, count1, 0, 0)
        gl.BufferData(arrayType1, count1, meshData,gl.STATIC_DRAW)

        return bufferID
    }
    CreateGeometry(numPtr11,numPtr12,numPtr13,numPtr14,numPtr15){
        gl.GenVertexArrays(1, *this.VAO)
        gl.BindVertexArray(this.VAO)


        bufferID11 = cMESH_CreateBuffer(this, numPtr11, gl.ARRAY_BUFFER)
        gl.EnableVertexAttribArray(0)
        gl.VertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 3*4, 0)


        bufferID11 = cMESH_CreateBuffer(this, numPtr12, gl.ARRAY_BUFFER)
        gl.EnableVertexAttribArray(1)
        gl.VertexAttribPointer(1, 3, gl.FLOAT, gl.FALSE, 3*4, 0)


        bufferID11 = cMESH_CreateBuffer(this, numPtr13, gl.ARRAY_BUFFER)
        gl.EnableVertexAttribArray(2)
        gl.VertexAttribPointer(2, 3, gl.FLOAT, gl.FALSE, 3*4, 0)
    

        bufferID11 = cMESH_CreateBuffer(this, numPtr14, gl.ARRAY_BUFFER)
        gl.EnableVertexAttribArray(3)
        gl.VertexAttribPointer(3, 2, gl.FLOAT, gl.FALSE, 2*4, 0)


        bufferID11 = cMESH_CreateBuffer(this, numPtr15, gl.ELEMENT_ARRAY_BUFFER)
    }
    ModelRender(count1,diffuse1,normal1){

        gl.ActiveTexture(gl.TEXTURE0);
        gl.BindTexture(gl.TEXTURE_2D, diffuse1)
        cSHADER_SetUniform1i(shader1, 'diffuseTexture', 0)

        gl.ActiveTexture(gl.TEXTURE1);
        gl.BindTexture(gl.TEXTURE_2D, normal1)
        cSHADER_SetUniform1i(shader1, 'normalTexture', 1)
    
        gl.BindVertexArray(this.VAO)
    
        gl.DrawElements(gl.TRIANGLES, count1, gl.UNSIGNED_SHORT,0)

    }
}

.data?
    var texID11
    var texturesSys
    var textures
    var meshes
    var modelNums1


class cMODEL{
    constructor(){
        this.mesh = 0
    }
    CreateGeometry(){



        file.ReadFile('models\modelNums.bin', modelNums1)
        //printf('nums1... %i, %s', word ptr modelNums1\\+0*2,EOL)


        hfile1 = CreateFile('models\icarusmmo\model.bin', GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE, 0)

        mov texturesSys, alloc(4*8)
        mov textures, alloc(12*8)
        mov meshes, alloc(8*8)

        

        LoadTexture('models\icarusmmo\textures\hw_inner.png', textures[1])
        LoadTexture('models\icarusmmo\textures\shose.png', textures[2])
        LoadTexture('models\icarusmmo\textures\2_ar0_000.png', textures[3])
        LoadTexture('models\icarusmmo\textures\hw_eye_005.png', textures[4])
        LoadTexture('models\icarusmmo\textures\hw_face_001.png', textures[5])
        LoadTexture('models\icarusmmo\textures\hw_hair_001.png', textures[6])

        LoadTexture('models\icarusmmo\textures\bumpmap_flat.png', textures[7])
        LoadTexture('models\icarusmmo\textures\hw_inner_nomal.png', textures[8])
        LoadTexture('models\icarusmmo\textures\2_ar0_000_ddn.png', textures[9])
        LoadTexture('models\icarusmmo\textures\hw_face_001_ddn.png', textures[10])


        LoadTexture('textures\normal.png', texturesSys[1])

        

        cMESH_CreateGeometry(meshes[1], 5928, 5928, 7904, 3952, 3816)
        cMESH_CreateGeometry(meshes[2], 8088, 8088, 10784, 5392, 5556)
        cMESH_CreateGeometry(meshes[3], 13800, 13800, 18400, 9200, 6744)
        cMESH_CreateGeometry(meshes[4], 43956, 43956, 58608, 29304, 37212)
        cMESH_CreateGeometry(meshes[5], 1368, 1368, 1824, 912, 1176)
        cMESH_CreateGeometry(meshes[6], 19272, 19272, 25696, 12848, 17712)
        cMESH_CreateGeometry(meshes[7], 25248, 25248, 33664, 16832, 13494)
        cMESH_CreateGeometry(meshes[8], 2880, 2880, 3840, 1920, 2406)
  

        CloseHandle(hfile1)
    
    }
    ModelRender(){

        //frameID++

        //cSHADER_Use(shader1)

        //cSHADER_SetUniform1i(shader1, 'frame', frameID)

        //cSHADER_SetUniformMatrix(shader1, '_projection', projection)
        //cSHADER_SetUniformMatrix(shader1, '_camera', camera)
        //cSHADER_SetUniformMatrix(shader1, '_model', model)


        cMESH_ModelRender(meshes[1], 1908, 1, 7)
        cMESH_ModelRender(meshes[2], 2778, 1, 7)
        cMESH_ModelRender(meshes[3], 3372, 2, 8)
        cMESH_ModelRender(meshes[4], 18606, 3, 9)
        cMESH_ModelRender(meshes[5], 588, 4, 11)
        cMESH_ModelRender(meshes[6], 8856, 5, 10)
        cMESH_ModelRender(meshes[7], 6747, 6, 10)
        cMESH_ModelRender(meshes[8], 1203, 4, 11)
        
    
    }
}
//.data
//var frameID = 0
