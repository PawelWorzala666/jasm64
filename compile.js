
const util = require('util')
const exec = util.promisify(require('child_process').exec)





async function runCommand(command) {
    const { stdout, stderr, error } = await exec(command);
    if(stderr){console.error('stderr:', stderr);}
    if(error){console.error('error:', error);}
    return stdout;
}

async function runCmd(cmd){
    var result = await runCommand(cmd)
    result = result.length>0?result:cmd
    return result
}










var execSync = async function(cmd){

    const { stdout, stderr, error } = await exec(cmd, {silent:false});
    return stdout + stderr + error

}
















;(async function(){




    //console.log(await execSync("test.bat"))

    console.log(await execSync("node compile/index.js test"))


    var msg = await execSync("call makeit.bat test")

    
    var ERRORS = []
    msg=msg.replace(/^(.*)error([\s\S]+?)LINK : fatal error/gm,match=>{
        console.log('M1..',match)
        match = match.replace(/\:\ error([\s\S]+?)Main Line Code/gm,mmm=>{
            console.log('M22..',mmm)
            var params = mmm.split(':')
            //console.log('params..',params)
            //var rers = /\:\ ([\w]+)[\ \n]*([\w]+\([0-9]+\))\:.*[\s\S]+?Main/gm.exec(mmm)
            //console.log('KKK:::::',rers)
            var source = mmm.split(' Called From')[1].split(': ')[0].trim()
            var func = params[3].trim().split('\r\n')[1].trim()
            ERRORS.push({
                kind: params[2].trim(),
                word: params[3].trim().split('\r\n')[0].trim(),
                source:source.split('(')[0],
                func:func.split('(')[0],
                line: source.split('(')[1].split(')')[0].trim(),
                inline: func.split('(')[1].split(')')[0].trim()
            })
            return mmm
        })
        return match
    })

    console.log(msg)
    console.log('ERRORS',ERRORS)





    process.exit(1)


    


})();