

const get_req= async(PATH)=>{

    const res = await fetch(`${process.env.API}${PATH}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", "Authorization": process.env.API_Key}
    })

    const data = await res.json()
    return data;
} 

module.exports = get_req