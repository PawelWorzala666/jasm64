
    //::app:gl

    import 'opengl/mat4s.js'
 
    import 'utils/utils.js'
    import 'opengl/uniform.js'
    import 'utils/file.js'
    import 'opengl/texture.js'
    import 'opengl/shader.js'

    import 'models/model-02.js'
    import 'opengl/font.js'



    .data
    var pModel = new cMODEL()

    var shader1 = new cSHADER()



    /*.data
        var fovy112 = 45.0
        var aspect112 = 1.0
        var near112 = 0.1
        var far112 = 100.0*/
    
    

    .data?
        matrix1 dq 16 dup(0.0)
        matrix2 dq 16 dup(0.0)
        /*projection1 dq 16 dup(0.0)
        camera11 dq 16 dup(0.0)*/

    /*.data

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
        var projN2 = \\-1\\.0*/

        //tarnslate11 \\d\\q 0.0,0.0,\\-1\\.500090086



    .data
    textTest1 d\\b 'Hello World',0


    
.code



    function SystemInit(){

        invoke FreeImage_Initialise

        InitGLFunctions()





        

        shader1.CreateShader('shaders\font.vert','shaders\font.frag')

        
        
        
        pModel.CreateGeometry()





        


        gl.Enable(gl.DEPTH_TEST)
        gl.DepthFunc(gl.LEQUAL)
        gl.Enable(gl.TEXTURE_2D)

        gl.Enable(gl.BLEND);
        gl.BlendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    
        //TestThread()


        movd	xmm3,coloralpha
        movd	xmm2,colorcomathree
        movd	xmm1,colorcmmasn
        movd	xmm0,colorcmmasn
        invoke glClearColor//(float dword 0.3, dword 0.3, dword 0.3, dword 1.0)






        //matrix1 = mat4.create()
        mat4.identity(matrix1)
        PrintMatrix('mat4.identity',matrix1)

        /*mat4.identity(camera11)
        mat4.identity(matrix2)
        mat4.translate(camera11,matrix2,tarnslate11)
        PrintMatrix('mat4.translate',camera11)*/

        //Math.Deg2Rad(fovy33,radCC111)
        /*mat4.perspectiveNO(projection1, fovy112, aspect112, near112, far112)
        projection1[11] = projN2
        projection1[14] = projN1
        PrintMatrix('mat4.perspectiveNO',projection1)*/


    }



    var numLtr1 = 0
   
    var RDIptr = 0
    



    function SystemRender(){


        gl.Clear(gl.COLOR_BUFFER_BIT or gl.DEPTH_BUFFER_BIT)







        frameID++
    
        shader1.Use()
    
        shader1.SetUniform1i('frame', frameID)






        translate1[0] = troneptr1X
        translate1[1] = troneptr1Y

        /*DrawLetter(65)
        DrawLetter(66)
        DrawLetter(67)
        DrawLetter(68)
        DrawLetter(69)*/

        PrintOutAllText(textTest1)

        

    }


    function SystemDestroy(){

    
    }






    var frameID = 0
    
 

        

    colorcomathree dd 0.3
    colorcmmasevben dd 0.7
    colorcmmasn dd 0.25
    coloralpha dd 1.0


    var projection = [1.3737387097273113,0.0,0.0,0.0,0.0,1.3737387097273113,0.0,0.0,0.0,0.0,-1.02020202020202,-1.0,0.0,0.0,-2.0202020202020203,0.0]
    var camera = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,-1.5300090086,1.0]
    var model = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]

    var scale1 = [0.1,0.1,0.1]
    var translate1 = [-\\1.0,1.0,0.0]







        .data
        var wiid = 0
    



.data
    var tmpNumber11 = 0

    
