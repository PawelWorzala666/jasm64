
.data
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
    
    
    
            file.ReadFile('models\beach\modelNums.bin', modelNums1)
            //printf('nums1... %i, %s', word ptr modelNums1\\+0*2,EOL)
    
    
            hfile1 = CreateFile('models\beach\model.bin', GENERIC_READ or GENERIC_WRITE,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_ARCHIVE, 0)
    
            mov texturesSys, alloc(4*8)
            mov textures, alloc(32*8)
            mov meshes, alloc(32*8)
    

            LoadTexture('models\beach\textures\T_Beach_rock.png', textures[1])
LoadTexture('models\beach\textures\T_Beach_forest.png', textures[2])
LoadTexture('models\beach\textures\T_Beach_island.png', textures[3])
LoadTexture('models\beach\textures\T_Beach_rock.png', textures[4])
LoadTexture('models\beach\textures\T_Beach_sky.png', textures[5])
LoadTexture('models\beach\textures\T_Beach_SkyUP.png', textures[6])
LoadTexture('models\beach\textures\T_Beach_wood.png', textures[7])
LoadTexture('models\beach\textures\T_Beach_city.png', textures[8])
LoadTexture('models\beach\textures\T_Beach_city_light.png', textures[9])
LoadTexture('models\beach\textures\T_Beach_coast.png', textures[10])
LoadTexture('models\beach\textures\T_Beach_moon.png', textures[11])
LoadTexture('models\beach\textures\T_Beach_sea.png', textures[12])
LoadTexture('models\beach\textures\T_Beach_wave_cX.png', textures[13])

    
    
            LoadTexture('textures\normal.png', texturesSys[1])
    


            cMESH_CreateGeometry(meshes[1], 45264, 45264, 60352, 30176, 36564)
cMESH_CreateGeometry(meshes[2], 265356, 265356, 353808, 176904, 237744)
cMESH_CreateGeometry(meshes[3], 4968, 4968, 6624, 3312, 3876)
cMESH_CreateGeometry(meshes[4], 30816, 30816, 41088, 20544, 20388)
cMESH_CreateGeometry(meshes[5], 1800, 1800, 2400, 1200, 1440)
cMESH_CreateGeometry(meshes[6], 2124, 2124, 2832, 1416, 1872)
cMESH_CreateGeometry(meshes[7], 310752, 310752, 414336, 207168, 193512)
cMESH_CreateGeometry(meshes[8], 384, 384, 512, 256, 96)
cMESH_CreateGeometry(meshes[9], 576, 576, 768, 384, 144)
cMESH_CreateGeometry(meshes[10], 5592, 5592, 7456, 3728, 3792)
cMESH_CreateGeometry(meshes[11], 96, 96, 128, 64, 24)
cMESH_CreateGeometry(meshes[12], 4488, 4488, 5984, 2992, 2208)
cMESH_CreateGeometry(meshes[13], 2448, 2448, 3264, 1632, 1800)

      
    
            CloseHandle(hfile1)
        
        }
        ModelRender(){
    
            //frameID++
    
            //cSHADER_Use(shader1)
    
            //cSHADER_SetUniform1i(shader1, 'frame', frameID)
    
            //cSHADER_SetUniformMatrix(shader1, '_projection', projection)
            //cSHADER_SetUniformMatrix(shader1, '_camera', camera)
            //cSHADER_SetUniformMatrix(shader1, '_model', model)


            cMESH_ModelRender(meshes[1], 18282, 0, 14)
cMESH_ModelRender(meshes[2], 118872, 1, 14)
cMESH_ModelRender(meshes[3], 1938, 2, 14)
cMESH_ModelRender(meshes[4], 10194, 0, 14)
cMESH_ModelRender(meshes[5], 720, 4, 14)
cMESH_ModelRender(meshes[6], 936, 5, 14)
cMESH_ModelRender(meshes[7], 96756, 6, 14)
cMESH_ModelRender(meshes[8], 48, 7, 14)
cMESH_ModelRender(meshes[9], 72, 8, 14)
cMESH_ModelRender(meshes[10], 1896, 9, 14)
cMESH_ModelRender(meshes[11], 12, 10, 14)
cMESH_ModelRender(meshes[12], 1104, 11, 14)
cMESH_ModelRender(meshes[13], 900, 12, 14)

            
        
        }
    }
    
    //var frameID = 0
