const get_req = require("../handlers/getContentHandler");

const checkAdmin = async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        const {success, user} = await get_req(`/auth/authenticate/${token}`);
        console.log(success, user);
        if(success){
            if(user.authorization === "admin"){
                next()
            }else{
                res.redirect("/")
            }
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    };
};


module.exports = {checkAdmin}