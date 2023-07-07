


    .data?
    var bufferID
    var bufferID11
    
    hfile1 dq ?

    

        function MeshCreateBuffer(count1, arrayType1){
            gl.GenBuffers(1,*bufferID)
            gl.BindBuffer(arrayType1, bufferID)

            meshData = alloc(count1)
            ReadFile(hfile1, meshData, count1, 0, 0)
            gl.BufferData(arrayType1, count1, meshData,gl.STATIC_DRAW)
        }
        function MeshCreateGeometry(numPtr11,numPtr12,numPtr13,numPtr14,numPtr15){
            gl.GenVertexArrays(1, *pVAO)
            gl.BindVertexArray(pVAO)
    
    
            MeshCreateBuffer(numPtr11, gl.ARRAY_BUFFER)
            gl.EnableVertexAttribArray(0)
            gl.VertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 3*4, 0)
    
    
            MeshCreateBuffer(numPtr12, gl.ARRAY_BUFFER)
            gl.EnableVertexAttribArray(1)
            gl.VertexAttribPointer(1, 3, gl.FLOAT, gl.FALSE, 3*4, 0)
    
    
            MeshCreateBuffer(numPtr13, gl.ARRAY_BUFFER)
            gl.EnableVertexAttribArray(2)
            gl.VertexAttribPointer(2, 3, gl.FLOAT, gl.FALSE, 3*4, 0)
        
    
            MeshCreateBuffer(numPtr14, gl.ARRAY_BUFFER)
            gl.EnableVertexAttribArray(3)
            gl.VertexAttribPointer(3, 2, gl.FLOAT, gl.FALSE, 2*4, 0)
    
    
            MeshCreateBuffer(numPtr15, gl.ELEMENT_ARRAY_BUFFER)

            mov rax,pVAO
        }
        function MeshRender(nVAO,count1,diffuse1,normal1){
    
            gl.ActiveTexture(gl.TEXTURE0);
            gl.BindTexture(gl.TEXTURE_2D, diffuse1)
            cSHADER_SetUniform1i(shader1, 'diffuseTexture', 0)
    
            /*gl.ActiveTexture(gl.TEXTURE1);
            gl.BindTexture(gl.TEXTURE_2D, normal1)
            cSHADER_SetUniform1i(shader1, 'normalTexture', 1)**/
        
            gl.BindVertexArray(nVAO)
        
            gl.DrawElements(gl.TRIANGLES, count1, gl.UNSIGNED_SHORT,0)
    
        }
    
    
    .data?
        var texID11
        var texturesSys
        var textures
        var meshes
        var modelNums1
        var pmodelNums1
        var numPtr1

        var handle12
        var fsize12

        var pnumPtr11
        var pnumPtr12
        var pnumPtr13
        var pnumPtr14
        var pnumPtr15

        var trris

        var meshptr1
        var trrooptr2


        var pVAO
        var vvAO
        var cCNT


        .data
        var ReadData8offset = 0
        var Readoffset = 0
        var TriisOffset = 0

        .code
        function ReadData8(){
            mov rcx,Readoffset
            mov rax,[rbx\\+rcx]
            //printf('number 1... %i %s',rax,EOL)
            add Readoffset,8
        }

        .data

        texturePath d\\b(512) dup\\(0)
        var modelpath = 'models\eline2\'

      .data?      
//var bbVAO
//var coumnt332
var VAOS
var TRIANGLES
var TEXTRURESS
var pVAO
var pTRI
var TEXSS
var texturesSysID
var TEXX
var handle13
var fsize13
var pmodelNums3
var textuCount
var ffsize
var tmpTEX22
var TEXTURESBUFF
var ssPP
.code
    
   // class cMODEL{
        ///(){
       //     this.mesh = 0
      //  }
     function ModelCreateGeometry(){
    

        handle13 = CreateFile('models\eline2\images.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)    
        fsize13 = GetFileSize(handle13, 0)
        printf('size... %i %s',fsize13,EOL)
            
    
            handle12 = CreateFile('models\eline2\modelNums.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)    
            fsize12 = GetFileSize(handle12, 0)
            printf('size... %i %s',fsize12,EOL)
            pmodelNums1 = alloc(fsize12)
            ReadFile(handle12, pmodelNums1, fsize12, 0, 0)
            CloseHandle(handle12)

            printf('CloseHandle... %s',EOL)
    
    
            hfile1 = CreateFile('models\eline2\model.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)
    
            printf('eline2... %s',EOL)


            //mov texturesSys, alloc(4*8)
            //mov textures, alloc(32*8)
            mov VAOS, alloc(32*8)
            mov TRIANGLES, alloc(32*8)
            mov TEXTRURESS, alloc(32*8)
            

            printf('eline2 44... %s',EOL)
    

            //LoadTexture('models\eline2\textures\bg.jpg', textures[0])
            //LoadTexture('models\eline2\textures\red.jpg', textures[1])
            //LoadTexture('models\eline2\textures\skin.jpg', textures[2])

            printf('textures[2] %i %s',textures[2],EOL)

            
            LoadTexture('textures\normal.png', texturesSysID)


            printf('eline2 55... %s',EOL)


            

            printf('reqad... %s',EOL)

            mov Readoffset,0

            lea rdi, pmodelNums1
            mov rbx,[rdi\\+0]

            
            ReadData8()
           
            


            printf('loop... %s',EOL)


            mov rdi,0

            loop11:

                add rdi,8

                printf('step ... %i %s',rdi,EOL)

                pnumPtr11 = ReadData8()
                pnumPtr12 = ReadData8()
                pnumPtr13 = ReadData8()
                pnumPtr14 = ReadData8()
                pnumPtr15 = ReadData8()

                MeshCreateGeometry(pnumPtr11, pnumPtr12, pnumPtr13, pnumPtr14, pnumPtr15)

                mov rcx, VAOS
                mov [rcx\\+rdi], rax
              
                printf('VAO %i %s',rax,EOL)

                ReadData8()
                mov rcx, TRIANGLES
                mov [rcx\\+rdi], rax

                printf('TRIGLE %i %s',rax,EOL)

                ReadData8()

                mov ssPP,rax
                //printf('txx %i %s',rax,EOL)
                //mov rcx, TEXTRURESS
                //printf('txx %i %s',rax,EOL)
                //mov [rcx\\+rdi], rax

                //printf('TEXTRE %i %s',rax,EOL)

                //mov rdi,rax

                add ssPP,1
                printf('rcx %i %s',ssPP,EOL)
                pmodelNums3 = alloc(ssPP)
                printf('rcx %i %s',ssPP,EOL)
                sub ssPP,1
                printf('rcx %i %s',ssPP,EOL)
                ReadFile(handle13, pmodelNums3, ssPP, 0, 0)

                printf('TEXTRE name %s %s',pmodelNums3,EOL)

                LoadTexture(pmodelNums3, tmpTEX22)
                
                printf('tmpTEX22 44 %i %s',tmpTEX22,EOL)
                
                mov rax,tmpTEX22

                mov rcx, TEXTRURESS
                mov [rcx\\+rdi], rax

                /*mov rcx, textures
                printf('TEXSS SS %i %s',rcx,EOL)
                lea rdx,[rax\\+rcx]
                printf('TEXSS S %i %s',rax,EOL)
                mov TEXSS,rdx

                printf('TEXSS 42 %i %s',TEXSS,EOL)

                mov rcx, TEXTRURESS
                printf('TEXSS 54 %i %s',TEXSS,EOL)
                mov [rcx\\+rdi]\\,rdx*/

                //printf('TEXSS 54 %i %s',rdx,EOL)

                mov rax,29*8
                cmp rdi,rax
                je endo11

                jmp loop11

            endo11:


            printf(' end loop... %s',EOL)



            /*ReadData8()

            mov textuCount,rax

            printf('images count %i %s',rax,EOL)


            handle13 = CreateFile('models\eline2\images.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)    
            fsize13 = GetFileSize(handle13, 0)
            printf('size... %i %s',fsize13,EOL)
            
            mov rdi,0
            loop33:
                add rdi,1


                ReadData8()
                //mov textuCount,rax
                mov ffsize,rax
                printf('image length %i %s',ffsize,EOL)

                add ffsize,1
                pmodelNums3 = alloc(ffsize)
                sub ffsize,1
                ReadFile(handle13, pmodelNums3, ffsize, 0, 0)

                printf('image name %s %s',pmodelNums3,EOL)

                //xor tmpTEX22,tmpTEX22

                LoadTexture(pmodelNums3, tmpTEX22)

                printf('LoadTexture %i %s',tmpTEX22,EOL)

                
                mov rcx, TEXTURESBUFF
                mov rax,rdi
                imul rax,8
                mov rdx,tmpTEX22
                printf('423543 ..... %s',EOL)
                lea rax,[rcx\\+rax]
                mov rax,rdx

                printf('LoadTexture ..... %s',EOL)

            
                mov rax,textuCount
                cmp rdi,rax
                je endo33

                jmp loop33

            endo33:*/

            
            CloseHandle(handle13)




            CloseHandle(hfile1)




      
    
        
        }

        function ModelRender(){

            printf('ModelRender %i %s',4,EOL)




            mov rdi,0

            loop22:

                add rdi,8

                printf('step ... %i %s',rdi,EOL)

                mov rcx, VAOS
                mov rax,[rcx\\+rdi]
                mov pVAO,rax

                printf('pVAO ... %i %s',pVAO,EOL)

                mov rcx, TRIANGLES
                mov rax,[rcx\\+rdi]
                mov pTRI,rax

                printf('pTRI ... %i %s',pTRI,EOL)

                
                mov rcx, TEXTRURESS
                mov rdx, [rcx\\+rdi]
                mov TEXSS,rdx

                //printf('TEXX ID rdx... %i %s',rdx,EOL)

                //mov rbx,TEXSS
               /* imul rdx,8
                mov rcx, TEXTURESBUFF

                mov rbx,[rcx\\+rdx]
                //mov tmpTEX22,rax

                printf('tmpTEX22 id %i %s',rbx,EOL)*/



                MeshRender(pVAO, pTRI,TEXSS,texturesSysID)


                mov rax,29*8
                cmp rdi,rax
                je endo22

                jmp loop22

            endo22:


        
        }
