

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
    
    
    
            file.ReadFile('models\eline2\modelNums.bin', modelNums1)
            //printf('nums1... %i, %s', word ptr modelNums1\\+0*2,EOL)
    
    
            hfile1 = CreateFile('models\eline2\model.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)
    
            mov texturesSys, alloc(4*8)
            mov textures, alloc(32*8)
            mov meshes, alloc(32*8)
    

            LoadTexture('models\eline2\textures\bg.jpg', textures[1])
LoadTexture('models\eline2\textures\red.jpg', textures[2])
LoadTexture('models\eline2\textures\skin.jpg', textures[3])
LoadTexture('models\eline2\textures\bg.jpg', textures[4])
LoadTexture('models\eline2\textures\bg.jpg', textures[5])
LoadTexture('models\eline2\textures\red.jpg', textures[6])
LoadTexture('models\eline2\textures\skin.jpg', textures[7])
LoadTexture('models\eline2\textures\bg.jpg', textures[8])
LoadTexture('models\eline2\textures\skin.jpg', textures[9])
LoadTexture('models\eline2\textures\bg.jpg', textures[10])
LoadTexture('models\eline2\textures\red.jpg', textures[11])
LoadTexture('models\eline2\textures\red.jpg', textures[12])
LoadTexture('models\eline2\textures\red.jpg', textures[13])
LoadTexture('models\eline2\textures\bg.jpg', textures[14])
LoadTexture('models\eline2\textures\bg.jpg', textures[15])
LoadTexture('models\eline2\textures\skin.jpg', textures[16])
LoadTexture('models\eline2\textures\bg.jpg', textures[17])
LoadTexture('models\eline2\textures\bg.jpg', textures[18])
LoadTexture('models\eline2\textures\bg.jpg', textures[19])
LoadTexture('models\eline2\textures\bg.jpg', textures[20])
LoadTexture('models\eline2\textures\bg.jpg', textures[21])
LoadTexture('models\eline2\textures\skin.jpg', textures[22])
LoadTexture('models\eline2\textures\skin.jpg', textures[23])
LoadTexture('models\eline2\textures\skin.jpg', textures[24])
LoadTexture('models\eline2\textures\skin.jpg', textures[25])
LoadTexture('models\eline2\textures\skin.jpg', textures[26])
LoadTexture('models\eline2\textures\bg.jpg', textures[27])

    
    
            LoadTexture('textures\normal.png', texturesSys[1])
    

            

            cMESH_CreateGeometry(meshes[1], 36144, 36144, 48192, 24096, 34272)
cMESH_CreateGeometry(meshes[2], 3480, 3480, 4640, 2320, 3072)
cMESH_CreateGeometry(meshes[3], 21444, 21444, 28592, 14296, 20832)
cMESH_CreateGeometry(meshes[4], 18192, 18192, 24256, 12128, 17088)
cMESH_CreateGeometry(meshes[5], 6468, 6468, 8624, 4312, 5376)
cMESH_CreateGeometry(meshes[6], 14592, 14592, 19456, 9728, 12096)
cMESH_CreateGeometry(meshes[7], 78252, 78252, 104336, 52168, 76224)
cMESH_CreateGeometry(meshes[8], 33204, 33204, 44272, 22136, 27840)
cMESH_CreateGeometry(meshes[9], 5376, 5376, 7168, 3584, 4608)
cMESH_CreateGeometry(meshes[10], 174756, 174756, 233008, 116504, 166560)
cMESH_CreateGeometry(meshes[11], 9084, 9084, 12112, 6056, 8160)
cMESH_CreateGeometry(meshes[12], 47508, 47508, 63344, 31672, 44160)
cMESH_CreateGeometry(meshes[13], 47508, 47508, 63344, 31672, 44160)
cMESH_CreateGeometry(meshes[14], 24600, 24600, 32800, 16400, 22656)
cMESH_CreateGeometry(meshes[15], 50064, 50064, 66752, 33376, 46944)
cMESH_CreateGeometry(meshes[16], 1944, 1944, 2592, 1296, 1536)
cMESH_CreateGeometry(meshes[17], 9984, 9984, 13312, 6656, 9216)
cMESH_CreateGeometry(meshes[18], 20052, 20052, 26736, 13368, 18432)
cMESH_CreateGeometry(meshes[19], 43560, 43560, 58080, 29040, 40320)
cMESH_CreateGeometry(meshes[20], 60456, 60456, 80608, 40304, 51840)
cMESH_CreateGeometry(meshes[21], 33180, 33180, 44240, 22120, 27840)
cMESH_CreateGeometry(meshes[22], 153084, 153084, 204112, 102056, 148320)
cMESH_CreateGeometry(meshes[23], 786756, 786756, 1049008, 524504, 437346)
cMESH_CreateGeometry(meshes[24], 337884, 337884, 450512, 225256, 188766)
cMESH_CreateGeometry(meshes[25], 786528, 786528, 1048704, 524352, 430812)
cMESH_CreateGeometry(meshes[26], 198000, 198000, 264000, 132000, 188448)
cMESH_CreateGeometry(meshes[27], 175764, 175764, 234352, 117176, 96468)
cMESH_CreateGeometry(meshes[28], 10068, 10068, 13424, 6712, 9312)
cMESH_CreateGeometry(meshes[29], 91296, 91296, 121728, 60864, 88608)

      
    
            CloseHandle(hfile1)
        
        }
        ModelRender(){
    


            cMESH_ModelRender(meshes[1], 17136, 1, 28)
cMESH_ModelRender(meshes[2], 1536, 2, 28)
cMESH_ModelRender(meshes[3], 10416, 3, 28)
cMESH_ModelRender(meshes[4], 8544, 1, 28)
cMESH_ModelRender(meshes[5], 2688, 1, 28)
cMESH_ModelRender(meshes[6], 6048, 2, 28)
cMESH_ModelRender(meshes[7], 38112, 3, 28)
cMESH_ModelRender(meshes[8], 13920, 1, 28)
cMESH_ModelRender(meshes[9], 2304, 3, 28)
cMESH_ModelRender(meshes[10], 83280, 1, 28)
cMESH_ModelRender(meshes[11], 4080, 2, 28)
cMESH_ModelRender(meshes[12], 22080, 2, 28)
cMESH_ModelRender(meshes[13], 22080, 2, 28)
cMESH_ModelRender(meshes[14], 11328, 1, 28)
cMESH_ModelRender(meshes[15], 23472, 1, 28)
cMESH_ModelRender(meshes[16], 768, 3, 28)
cMESH_ModelRender(meshes[17], 4608, 1, 28)
cMESH_ModelRender(meshes[18], 9216, 1, 28)
cMESH_ModelRender(meshes[19], 20160, 1, 28)
cMESH_ModelRender(meshes[20], 25920, 1, 28)
cMESH_ModelRender(meshes[21], 13920, 1, 28)
cMESH_ModelRender(meshes[22], 74160, 3, 28)
cMESH_ModelRender(meshes[23], 218673, 3, 28)
cMESH_ModelRender(meshes[24], 94383, 3, 28)
cMESH_ModelRender(meshes[25], 215406, 3, 28)
cMESH_ModelRender(meshes[26], 94224, 3, 28)
cMESH_ModelRender(meshes[27], 48234, 3, 28)
cMESH_ModelRender(meshes[28], 4656, 3, 28)
cMESH_ModelRender(meshes[29], 44304, 1, 28)

            
        
        }
    }
    

