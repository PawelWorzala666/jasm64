

async function POST(URL,DATA,type='text'){

    var promise = await fetch(URL,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(DATA)
    })

    var response = await promise[type]()

    return response

}

async function GET(URL,type='text'){

    var promise = await fetch(URL,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET"
    })

    var response = await promise[type]()

    return response

}

