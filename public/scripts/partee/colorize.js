function colorizeText(pre,code){

    //var pre = document.querySelector('#editor pre')
    pre.innerHTML = Colorize(code)

}

function Colorize(code){

    function r(match,replace){
        code = code.replace(match,replace)
    }

    r(/(\/\/.*)$/gm,'<comment>$1</comment>')
    r(/(\/\*[\s\S]+?\*\/)/gm,'<comment>$1</comment>')

    r(/(\-?[0-9\.])/gm,'<num>$1</num>')

    r(/([\w]+)\(/gm,'<func>$1(</func>')
    r(/\'([\s\S]+?)\'/gm,"<text>'$1'</text>")
    r(/\"([\s\S]+?)\"/gm,'<text>"$1"</text>')

    r(/(.*\.)/gm,'<obj>$1</obj>')


    return code

}
