
    //::app:gl
    /*
    ::config={
        proc: false,
        bbs: false,
        pointers: false,
    }
    */

 
    import 'opengl/uniform.js'
    import 'utils/file.js'
    import 'opengl/texture.js'
    import 'opengl/shader.js'
    import 'models/model-01.js'




    .data
    var pModel = new cMODEL()

    var shader1 = new cSHADER()




    function SystemInit(){

        invoke FreeImage_Initialise

        InitGLFunctions()





        

        shader1.CreateShader('shaders\draw2d.vert','shaders\draw2d.frag')

        
        
        
        pModel.CreateGeometry()





        


        gl.Enable(gl.DEPTH_TEST)
        gl.DepthFunc(gl.LEQUAL)
        gl.Enable(gl.TEXTURE_2D)


    
        TestThread()


        movd	xmm3,coloralpha
        movd	xmm2,colorcomathree
        movd	xmm1,colorcmmasn
        movd	xmm0,colorcmmasn
        invoke glClearColor//(float dword 0.3, dword 0.3, dword 0.3, dword 1.0)


    }


    colorcomathree dd 0.3
    colorcmmasevben dd 0.7
    colorcmmasn dd 0.25
    coloralpha dd 1.0


    function SystemRender(){


        gl.Clear(gl.COLOR_BUFFER_BIT or gl.DEPTH_BUFFER_BIT)

        

        pModel.ModelRender()

        

    }

    async function TestThread(){

        printf('THREAD %s',EOL)
    
    }
