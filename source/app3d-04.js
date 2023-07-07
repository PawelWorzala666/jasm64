
    //::app:gl


    
    import 'utils/utils.js'
    import 'opengl/uniform.js'
    import 'utils/file.js'
    import 'opengl/texture.js'
    import 'opengl/shader.js'
    import 'models/model-04.js'





    .data
    var pModel = new cMODEL()

    var shader1 = new cSHADER()

    
    .data
    var fovy332 = 45.0
    var aspect112 = 1.0
    var near112 = 0.01
    var far112 = 1000.0
    
    

    var projection = [1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0]
    var camera = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,-2.310,-1.30,1.0]
    var model = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]

    var cameraPosition = [0.0,-2.310,-1.30]
    //.code



    function SystemInit(){

        invoke FreeImage_Initialise

        InitGLFunctions()


        SystemInitWorker()


        printf('before load shaders %s', EOL)

        shader1.CreateShader('shaders\default.vert','shaders\default.frag')

        printf('before geom laded %s', EOL)

        pModel.CreateGeometry()

        printf('shaders and geom laded %s', EOL)
        
		//LoadShader(ffrag,fvert)


        gl.Enable(gl.DEPTH_TEST)
        gl.DepthFunc(gl.LEQUAL)
        gl.Enable(gl.TEXTURE_2D)



        //printf('matrixes begin %s', EOL)
        
       
        printf('end init %s', EOL)


                        /*projection2 = mat4.create()
        mat4.identity(projection2)
        mat4.perspectiveNO(projection2, fovy332, aspect112, near112, far112)
        PrintMatrix('projection2',projection2)*/

        //model2 = mat4.create()
        //mat4.identity(model2)
        //PrintMatrix('model2',model2)

        
        /*camera2 = mat4.create()
        mat4.identity(camera2)
        mat4.translate(camera2,camera2,cameraPosition)*/
        //mat4.lookAt(camera11,eye233,center233,up233)
        //PrintMatrix('camera2',camera2)
        
    }

    //var eye233 = [0.0,-2.310,-5.0]
    //var center233 = [1.0,-2.310,-0.30]
    //var up233 = [0.0,1.0,0.0]






    //::proc
    function SystemInitWorker(){

        printf('SystemInitWorker %s',EOL)

    }
    //::endproc

    




    function SystemRender(){


        //gl.Enable(gl.DEPTH_TEST)

        //gl.ClearDepth(1)

        movd	xmm3,consta10
        movd	xmm2,constd07
        movd	xmm1,constd07
        movd	xmm0,constd07
        invoke	glClearColor

        gl.Clear(gl.COLOR_BUFFER_BIT or gl.DEPTH_BUFFER_BIT)












        frameID++
    
        shader1.Use()
    
        shader1.SetUniform1i('frame', frameID)
    
        shader1.SetUniformMatrix('projection', projection)
        shader1.SetUniformMatrix('camera', camera)
        shader1.SetUniformMatrix('model', model)
        


        pModel.ModelRender()


        //PrintMatrix('projection',projection)
        ///PrintMatrix('projection2',projection2)



    }



    var frameID = 0


    function SystemDestroy(){

    
        //invoke FreeImage_DeInit

    }



.data?
    var projection2
    var camera2
    var model2
.data

