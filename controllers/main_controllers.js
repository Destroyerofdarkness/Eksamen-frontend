const get_req = require("../handlers/getContentHandler");


const render_homepage = async(req,res)=> {
    try {
        const {Issues} = await get_req("/issue/categorize/Høy");
        res.render("homepage", {title:"Homepage", Issues});
    } catch (err) {
        res.status(500).send("Internal Server Error!!")
    }
}


const rende_guide = (req,res)=>{
    try {
        res.render("guide",{title:"Brukerveiledning"});
    } catch (err) {
        res.status(500).send("Internal Server Error!!")
    }
}

module.exports = { 
    render_homepage,
    rende_guide
}