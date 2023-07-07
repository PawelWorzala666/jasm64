`
rollup(par) dostaje w par liczbe lub tekst ktory musi byc przerobiony tak ze zwroci fnc z headerem z unroll()
we 'abcd'
unroll - x(a,b)=>b+a
return x('ab','d')
ew... x(rollup('ab'),'d')
ale rollup 1 param nie jest konieczny
`;


const fs = require('fs')



function random_sort(a, b) {
    return Math.random() - 0.5;
}


class RollUP{
    constructor(){

    }
    static encrypt(text){

        return RollUP.rollup(text)

    }
    static rollup(text){

        if((typeof text=='string')&&(text.length==0)){
            return ''
        }

        //console.log(typeof text,text.length)

        //const count=RollUP.rules.length
    
        //const random = RollUP.random(0,count-1)
        

        const keys = Object.keys(RollUP.rules).sort(random_sort)

        //console.log(keys)

        

        //keys.sort(random_sort);

        for(const key of keys){

            const Rule = RollUP.rules[key]

            //console.log(Rule)

            if(Rule.verify(text)){

                    const result = Rule.rollup(text)

                    //console.log(result)

                    return result

            }

        }

        //console.log('Rule not found: ',text)
    
    }
    static rules = [
        {
            unroll(){

                return  n=(a,b)=>a+b

            },
            rollup:(text)=>{
                //    c(a,b) === text

                const rnd=RollUP.random(1,text.length-1)
                const part1=text.substring(0,rnd)
                const part2=text.substring(rnd)
                
                return  `n(`+RollUP.rollup(part1)+`,`+RollUP.rollup(part2)+`)`

            },
            verify(text){
                return (typeof text=='string')&&(text.length>=2)
            }
        },
        {
            unroll(){

                return      z=(a,b)=>b+a
                
            },
            rollup:(text)=>{
                //    c(a,b) === text

                const rnd=RollUP.random(1,text.length-1)
                const part1=text.substring(0,rnd)
                const part2=text.substring(rnd)

                if(!part1.length||!part2.length){
                    //console.log(text,rnd,part1,part2)
                }
                
                return  `z(`+RollUP.rollup(part2)+`,`+RollUP.rollup(part1)+`)`

            },
            verify(text){
                return   (typeof text=='string')&&(text.length>=2)
            }
        },
        /*{
            unroll(){

                return     q=(a)=>a
                //    c(a) === text
                //c(text) === text
                
            },
            rollup:(text)=>{

                return  `q(`+    RollUP.rollup(text)  +`)`

            },
            verify(text){
                return (typeof text=='string')&&(text.length==1)
            }
        },*/
        {
            unroll(){

                return     c=(a)=>String.fromCharCode(a)
                //    c(a,b) === text
                
            },
            rollup:(text)=>{

                var i=(text.charCodeAt(0))
                //console.log('i...',i)
                //if(Math.random()<0.7){
                //    i = RollUP.rollup(i)
                //}
                return  `c(`+    i  +`)`

            },
            verify(text){
                return (typeof text=='string')&&(text.length===1)
            }
        },
        /*{
            unroll(){

                return   l=(a)=>(a<<1)
                        //    c(a,b) === text
                
            },
            rollup:(text)=>{

                return `l(`+    (text>>1)     +`)`

            },
            verify(text){
                return typeof text=='number'
            }
        },*/
        /*{
            unroll(){

                return   r=(a)=>((a+64)>>1)
                        //    c(a,b) === text
                
            },
            rollup:(text)=>{

                return  `r(`+    ((text<<1)-64)       +`)`

            },
            verify(text){
                return typeof text=='number'
            }
        },*/
        /*{
            unroll(){

                return   t=(a,b)=>(a-b)
                         t=(a,b)=>text
                         text=(a-b)
                
            },
            rollup:(text)=>{//
                 
                let param2=RollUP.random(19,53)
                let param1=text+param2

                return  `t(`+    param1+`,`+param2   +`)`

            },
            verify(text){
                return typeof text=='number'
            }
        },*/
        /*{
            unroll(){

                return   s=(a,b)=>b+a
                        //    c(a,b) === text
                
            },
            rollup:(text)=>{

                let rnd=RollUP.random(1,text)
                let param1=text-rnd
                let param2 = rnd
                return   `s(`+param1+`,`+param2+`)`

            },
            verify(text){
                return (typeof text=='number')
            }
        },*/
        /*{
            unroll(){

                return   p=(a,b)=>(b*10+a)
                //    c(a,b) === text
                
            },
            rollup:(text)=>{

                const num = text.toString()
                return  `p(`+   num[1]   +`,`+ num[0]   +`)`

            },
            verify(text){
                return (typeof text=='number')&&(text<100)&&(text>9)
            }
        },*/
    ]
    static random(from,to){
        const range=to-from
        const rnd=Math.floor(Math.random()*range)
        return from+rnd
    }
    static decode(code){

        let functions=[]

        const keys = Object.keys(RollUP.rules).sort(random_sort)

        for(var key of keys){
            const Rule = RollUP.rules[key]
            functions.push(Rule.unroll().toString())
        }

        const fnc = functions.join('\n\n')

        return fnc

    }
    static getHeader(){

            
            let buff=[]

            for(const key of Object.keys(RollUP.rules)){
                buff.push(this.rules[key]).toString()

            }

            return buff.join('\n\n')

        }
    
    decode(encrypted){

        return eval(RollUP.getHeader()+';'+encrypted)

    }

}











function rollUP(source){








    /*
    const text=`Lorem Ipsum Dolor Sit Amet`
    console.log('text to CNVERT')
    console.log(text)

    const encrypted = RollUP.encrypt(text)
    console.log('CONVERTED')
    console.log(encrypted)

    console.log('Functions')
    console.log(RollUP.getHeader())


    console.log('DECODED eval(Functions + encrypted)')

    console.log('kuku');
    console.log('headers findeed');

    const keys = Object.keys(RollUP.rules)
    console.log(keys)

    const Headers=[]
    for(let key of keys){

        const Rule = RollUP.rules[key]
        console.log(Rule.unroll.toString())
        Headers.push(Rule.unroll.toString().replace('return','').replace('unroll(){',''))
        
    }*/



    //console.log(RollUP.rollup('test kodowania'));



    //const encodeed="n(z(z(n(q('o'),q('d')),n(n(q('s'),c(116)),n(q(' '),c(107)))),z(c(t(120,19)),c(t(163,47)))),z(z(z(q('a'),c(105)),n(q('a'),c(110))),z(c(s(28,91)),c(t(137,26)))))"

    var test=fs.readFileSync('./dist/index.min.js').toString()
    var encoded=RollUP.rollup(test)

    const code=`var n=(a,b)=>a+b
    ,z=(a,b)=>b+a
    ,c=a=>String.fromCharCode(a)
    eval(`+encoded+`)`/*
    ,q=(a)=>a


        t=(a,b)=>(a-b)
                


        s=(a,b)=>b+a
                


        p=(a,b)=>(b*10+a)
    `*/


    //const todecode = header+encodeed;


    //var test='dupa dziadzie'
    ///var test='Nazywam się Paweł Worzała i poszukuje zlecen. $specjalizuje sie obecnie w programowaniu modulowych webapp z uzyciem autorskiego kodu.';//fs.readFileSync('./rol.js').toString()


    //console.log('test do zakodowania:')
    //console.log(test)


    //enc=RollUP.rollup(enc)
    //enc=RollUP.rollup(enc)
    //enc=RollUP.rollup(enc)

    //console.log('zakodowane:')
    //console.log(encoded)

    //console.log('odkodowane:')
    //var code=header


    //if(eval(code)?true:false){
        //console.log(result)
        //fs.writeFileSync('./dist/index.pezz.js',code)
    //}

    return code

}


module.exports=rollUP