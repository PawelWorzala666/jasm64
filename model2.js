fs = require('fs')
sharp = require('sharp')
sizeOf = require('image-size')

function degToRad(deg) {
    return deg * Math.PI / 180;
}

function glTypedArray(val){
    return {
        '5120': Int8Array,
        '5121': Uint8Array,
        '5122': Int16Array,
        '5123': Uint16Array,
        '5124': Int32Array,
        '5125': Uint32Array,
        '5126': Float32Array
    }[val]
}

function NumSize(val){
    return {
        'SCALAR': 1,
        'VEC2': 2,
        'VEC3': 3,
        'VEC4': 4,
        'MAT2': 4,
        'MAT3': 9,
        'MAT4': 16
    }[val]
}


function loadGLTF(path,gl,shader){

    //this.source.rotation[0]=degToRad(45)

   // const {gl,engine} = this

    //let shader = await new Shader(engine,"default")
    //await shader.load("default")

    //var shader = this.shader??await new Shader(engine,"default")

    const gltf = JSON.parse(fs.readFileSync(path).toString())

    path=path.replace(path.split('/').pop(),'')

    //console.log(gltf)

    for(const key of Object.keys(gltf['buffers'])){
        const url=path+'/'+gltf['buffers'][key]['uri']
        gltf.buffers[key]=fs.readFileSync(url).buffer
    }

    gltf['data']=gltf['accessors'].map(accessor=>{
        const bufferView=gltf['bufferViews'][accessor['bufferView']]
        const TypedArray = glTypedArray(accessor['componentType'])
        return new TypedArray(
            gltf.buffers[bufferView['buffer']],
            bufferView['byteOffset'],//+ (accessor.byteOffset || 0),
            accessor['count']* NumSize(accessor['type']))
    })

    if(gltf['images']){
        gltf.images=gltf.images.map(image=>{
            return image['uri']
        })
    }

    if(gltf['textures']){
        gltf.textures=gltf.textures.map(texture=>{
            return gltf.images[texture['source']]
        })
    }

    if(gltf.materials){
        gltf['materials']=gltf.materials.map(material=>{
            const returnMaterial={}
            if(material['pbrMetallicRoughness']){
                const mat = material['pbrMetallicRoughness']
                if(mat['baseColorFactor']){
                    returnMaterial.diffuse = mat['baseColorFactor']
                }
                if(mat['baseColorTexture']){
                    returnMaterial.diffuseTexture = gltf.textures[mat.baseColorTexture['index']]
                }
            }
            if(material.normalTexture){
                returnMaterial.normalTexture = gltf.textures[material['normalTexture']['index']]
            }
            if(material.emissiveTexture){
                returnMaterial.emissiveTexture = gltf.textures[material['emissiveTexture']['index']]
            }
            return returnMaterial
        })
    }

    gltf['__meshes'] = gltf['meshes']

    gltf['meshes']=gltf.meshes.map(mesh=>{
        let buff={geometry:{}}
        const set=(name,param)=>{
            let geom=gltf['data'][mesh['primitives'][0]['attributes'][param]]
            if(geom){
                buff.geometry[name]=geom
            }
        }
        set('tangents','TANGENT')
        set('coords','TEXCOORD_0')
        set('positions','POSITION')
        set('normals','NORMAL')
        buff.geometry['indices']=gltf['data'][mesh['primitives'][0]['indices']]
        //const material = gltf.materials[mesh.primitives[0]['material']]

        if(gltf.materials){
            buff.material = gltf.materials[mesh.primitives[0]['material']]
        }
        return buff
    })

    const skinNodes = []
    const nodes=[]
    for(const node of gltf.nodes){
        //let scene
        if(typeof node['mesh']!='undefined'){
            const mesh=gltf['meshes'][node.mesh]
            
            var scene = {}
            //await scene.load(mesh.geometry)
            scene.uniforms=mesh.material

            if(node.skin!==undefined) {
                skinNodes.push({node, mesh: scene, skinNdx: node.skin})
            }
        }else{
            var scene={}
        }
        //scene.matrix = node.matrix
        Object.assign(scene,node)
        nodes.push(scene)
    }
    gltf._nodes = gltf.nodes
    gltf.nodes = nodes

    if(gltf.skins){
        gltf.skinsA = gltf.skins.map((skin) => {
            //const joints = skin.joints.map(ndx => gltf.nodes[ndx])
            //const {stride, array} = getAccessorTypedArrayAndStride(gl, gltf, skin.inverseBindMatrices)
            //const bufferView=gltf['bufferViews'][skin.inverseBindMatrices]
            return gltf['data'][skin.inverseBindMatrices]
        })
    }

    for (const {node, mesh, skinNdx} of skinNodes) {
        //var scene = mesh//new Mesh(gl,shader)
        //mesh.setSkin(gltf.skins[node.skin].joints, gltf.skinsA[skinNdx])
        //node.drawables.push(new SkinRenderer(mesh, gltf.skins[skinNdx]))
    }


    function childrens(node){

        node.children = (node.children??[]).map(index=>{
            node = gltf.nodes[index]
            childrens(node)
            return node
        })

    }
    gltf.children = []
    gltf._scenes=[]
    gltf.scenes.map(scene=>{
        scene.nodes.map(node=>{
            var root = gltf.nodes[node]
            //gltf.children.push(root)
            childrens(root)
            gltf._scenes.push(root)
        })
    })

    //gltf.children = []
    //childrens(gltf.childrens[])
    //gltf.scenes[0].nodes.map(idx=>gltf.childrens.push(...childrens(gltf.nodes[idx])))

    //console.log('gltf...',gltf)
    //console.log(gltf.nodes)
    //console.log(gltf.scenes)
    //console.log(gltf.children)

    return gltf
}

function addChildren(nodes, node, childIndices) {
    childIndices.forEach((childNdx) => {
        const child = nodes[childNdx];
        //child.setParent(node);
        if(node&&node.parent){
            if(node.parent.indexOf(child)>-1){
                node.parent.children.splice(this.parent.indexOf(child),1)
            }
            node.parent = null
        }
        if (child) {
            child.childrens.push(child)
            child.parent = node
        }
    })
  }


  var gltf

async function loadModel(path, modelName, destiny, nsize=undefined){



    gltf = loadGLTF('c:/models/jasm64/export/'+path+'/'+modelName+'.gltf')




    function addNumsU8(array,_data){
        if(!array.length){
            array = [array]
        }
        array.map(p=>_data.push(p))
    }
    function addNumsUI32(array,_data){
        if(!array.length){
            array = [array]
        }
        var array8 = new Uint8Array(new Uint32Array(array).buffer)
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }
    function addNumsUI64(array,_data){
        if(!array.length){
            array = [array]
        }
        var array8 = new Uint8Array(new BigInt64Array([...array].map(n=>BigInt(n))).buffer)
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }
    function addNumsF32(array,_data){
        if(!array.length){
            array = [array]
        }
        var array8 = new Uint8Array(new Float32Array(array).buffer)
        //console.log('array8',array8)
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }
    function addNumsF64(array,_data){
        if(!array.length){
            array = [array]
        }
        var array8 = new Uint8Array(new Float64Array(array).buffer)
        //console.log('array8',array8)
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }
    function addNumsUI16(array,_data){
        if(!array.length){
            array = [array]
        }
        var array8 = new Uint8Array(new Uint16Array(array).buffer)
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }
    function addString(string,_data){
        var array8 = new Uint8Array(string.split('').map(c=>c.charCodeAt(0)))
        //_data.push(...array8)
        array8.map(p=>_data.push(p))
    }

    var index = 1






    const modelData = []

    var imagesDATA = ''
    
    //addNumsUI32(gltf.images.length,modelData)

    //console.log(gltf.images.length)

try{
    fs.mkdirSync('./dist/models/'+destiny+'/')
}catch(e){}
if(gltf.images){
try{
    fs.mkdirSync('./dist/models/'+destiny+'/textures/')
}catch(e){}


    for(const texture of gltf.images){

        //console.log('nnsize',nnsize)

        /*if(nsize){
            var buffer = await sharp('c:/models/jasm64/export/'+path+'/'+texture)
                .resize(nnsize,nnsize)
                .png()
            .toBuffer()
        }else{
            var buffer = await sharp('c:/models/jasm64/export/'+path+'/'+texture)
                .raw()
                .toBuffer()
        }
        
        console.log('buffer.length',buffer.length)

        var array8 = []
        if(width*height*3==buffer.length){
            for(let index=0;index<buffer.length;index+=3){
                array8.push(buffer[index+0],buffer[index+1],buffer[index+2])
            }
        }else{
            for(let index=0;index<buffer.length;index+=4){
                array8.push(buffer[index+0],buffer[index+1],buffer[index+2])
            }
        }*/
        //var texData = new Uint8Array(fs.readFileSync('c:/models/jasm64/export/'+path+'/'+texture).buffer)

        //addNumsUI32(texData.length, modelData)

        //console.log('array8.length',array8.length)
        //addNumsU8(array8,  modelData)


        var dtta = fs.readFileSync('c:/models/jasm64/export/'+path+'/'+texture)
        fs.writeFileSync('./dist/models/'+destiny+'/'+texture,dtta)

    }
}




    var dataDD = []


    addNumsUI64(gltf.meshes.length,dataDD)



    console.log('gltf.meshes.length',gltf.meshes.length)

    var meshID=0

    for(const mesh of gltf.meshes){


        const data = []


        


        

        addNumsUI64(mesh.geometry.positions.length*4,dataDD)
        addNumsF32(mesh.geometry.positions,data)
        console.log('positions',mesh.geometry.positions.length)

        addNumsUI64(mesh.geometry.normals.length*4,dataDD)
        addNumsF32(mesh.geometry.normals,data)
        console.log('normals',mesh.geometry.normals.length)

        addNumsUI64(mesh.geometry.tangents.length*4,dataDD)
        addNumsF32(mesh.geometry.tangents,data)
        console.log('tangents',mesh.geometry.tangents.length)

        addNumsUI64(mesh.geometry.coords.length*4,dataDD)
        addNumsF32(mesh.geometry.coords,data)
        console.log('coords',mesh.geometry.coords.length)

        addNumsUI64(mesh.geometry.indices.length*2,dataDD)
        addNumsUI16(mesh.geometry.indices,data)
        console.log('indices',mesh.geometry.indices.length)


        addNumsUI64(mesh.geometry.indices.length,dataDD)

        //var diffuseTexture = gltf.images.indexOf(mesh.material.diffuseTexture)
        //console.log('diffuseTexture',diffuseTexture)
        //addNumsUI64(diffuseTexture,dataDD)

        

        var mpath= 'models\\'+destiny+'\\'    
        var ffflen=mpath.length
        addNumsUI64(mesh.material.diffuseTexture.length+ffflen,dataDD)
        imagesDATA+='models\\'+destiny+'\\'+mesh.material.diffuseTexture.replace('/','\\')
        

        console.log('mesh.material',mesh.material)

        data.map(d=>modelData.push(d))

        console.log('MESH ID', (meshID++))
    }


    //addNumsUI64(gltf.images.length,dataDD)

    var mpath= 'models\\'+destiny+'\\'


    gltf.images.map(image=>{
        console.log('igm...',image)
        //addNumsUI64(image.length+ffflen,dataDD)
        //imagesDATA+='models\\'+destiny+'\\'+image.replace('/','\\')
    })

   /* console.log(Object.keys(gltf))
    console.log(gltf._nodes)
    console.log(gltf.textures)
    console.log(gltf.images)*/


    

    
    fs.writeFileSync('./dist/models/'+destiny+'/model.bin',new Uint8Array(modelData))
    fs.writeFileSync('./dist/models/'+destiny+'/modelNums.bin',new Uint8Array(dataDD))
    fs.writeFileSync('./dist/models/'+destiny+'/images.bin',imagesDATA)

    //saveNewModel(destiny)
}
/*

function saveNewModel(destiny){

    var terxturesJS = ``
    var txindex = 1
    if(gltf.textures){
        gltf.textures.map(texture=>{
            terxturesJS+=`LoadTexture('models\\${destiny}\\textures\\${texture.replace('textures/','')}', textures[${(txindex++)}])\n`
        })
    }


    var loadsJS = ''
    var index = 1
    for(const mesh of gltf.meshes){
        loadsJS+='cMESH_CreateGeometry(meshes['+(index++)+'], '+mesh.geometry.positions.length*4+', '+
            mesh.geometry.normals.length*4+', '+
            mesh.geometry.tangents.length*4+', '+
            mesh.geometry.coords.length*4+', '+
            mesh.geometry.indices.length*2+')\n'
    }

    var renderJS = ''
    var index = 1
    //txindex++
    for(const mesh of gltf.meshes){
        //var color=(mesh.material.diffuse??[0.0,0.0,0.0,0.0]).join(',')
        renderJS+='cMESH_ModelRender(meshes['+(index++)+'], '+mesh.geometry.indices.length+', '+
            (gltf.textures?(gltf.textures.indexOf(mesh.material.diffuseTexture)+1):0)+', '+txindex+')\n'
    }



    fs.writeFileSync('./source/model'+destiny+'.js',`

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
    
    
    
            file.ReadFile('models\\${destiny}\\modelNums.bin', modelNums1)
            //printf('nums1... %i, %s', word ptr modelNums1\\\\+0*2,EOL)
    
    
            hfile1 = CreateFile('models\\${destiny}\\model.bin', GENERIC_READ,0,0,OPEN_EXISTING,FILE_ATTRIBUTE_NORMAL, 0)
    
            mov texturesSys, alloc(4*8)
            mov textures, alloc(32*8)
            mov meshes, alloc(32*8)
    

            ${terxturesJS}
    
    
            LoadTexture('textures\\normal.png', texturesSys[1])
    

            

            ${loadsJS}
      
    
            CloseHandle(hfile1)
        
        }
        ModelRender(){
    


            ${renderJS}
            
        
        }
    }
    

`)
*/

//}

loadModel('eline', 'scene', 'eline2')