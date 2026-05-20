const update_req= async(PATH, BODY)=>{

    const res = await fetch(`${process.env.API}${PATH}`,{
        method: "PUT",
        body:   JSON.stringify({BODY}),
        headers: {"Content-Type": "application/json", "Authorization": process.env.API_Key}
    })

    const data = await res.json()
    return data;
} 

module.exports = update_req