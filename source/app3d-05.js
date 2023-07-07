
    //::app:gl
    
    import 'opengl/mat4s.js'

    import 'utils/utils.js'
    import 'opengl/uniform.js'
    import 'utils/file.js'
    import 'opengl/texture.js'
    import 'opengl/shader.js'

    import 'models/model-05.js'



    .data
        var pModel = new cMODEL()

        var shader1 = new cSHADER()

    
    .data
        var fovy112 = 45.0
        var aspect112 = 1.0
        var near112 = 0.1
        var far112 = 100.0
    
    

    .data?
        matrix1 dq 16 dup(0.0)
        matrix2 dq 16 dup(0.0)
        projection1 dq 16 dup(0.0)
        camera11 dq 16 dup(0.0)

    .data

        var scale1 = [7.2,0.8,1.4]

        //var scale2

        var axisY = [0.0,1.0,0.0]
        //var rad1112 = 34.44

        //var angleY22 = 34.66
        //var radCC111 = 0.0

        var eye22 = [0.10,0.0310,0.80]
        var center22 = [0.10,0.30,\\-0.80]
        var up22 = [0.0,1.0,0.0]

        var projN1 = \\-2\\.0202020202020203
        var projN2 = \\-1\\.0

        tarnslate11 \\d\\q 0.0,\\-\\2.310,\\-\\1.30



    .code


    function SystemInit(){

        invoke FreeImage_Initialise

        InitGLFunctions()



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







        //matrix1 = mat4.create()
        mat4.identity(matrix1)
        PrintMatrix('mat4.identity',matrix1)

        mat4.identity(camera11)
        mat4.identity(matrix2)
        mat4.translate(camera11,matrix2,tarnslate11)
        PrintMatrix('mat4.translate',camera11)

        //Math.Deg2Rad(fovy33,radCC111)
        mat4.perspectiveNO(projection1, fovy112, aspect112, near112, far112)
        projection1[11] = projN2
        //projection1[14] = projN1
        PrintMatrix('mat4.perspectiveNO',projection1)


        /*mat_perspective()
        mat_camera()
        mat_model()*/
        
    }

    //var eye233 = [0.0,-2.310,-5.0]
    //var center233 = [1.0,-2.310,-0.30]
    //var up233 = [0.0,1.0,0.0]



    




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
    
        shader1.SetUniformMatrix('projection', projection1)
        shader1.SetUniformMatrix('camera', camera11)
        shader1.SetUniformMatrix('model', matrix1)
        


        pModel.ModelRender()


        //PrintMatrix('projection',projection)
        ///PrintMatrix('projection2',projection2)



    }



    var frameID = 0


    function SystemDestroy(){

    
        //invoke FreeImage_DeInit

    }


