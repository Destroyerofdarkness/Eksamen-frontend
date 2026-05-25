const get_req = require("../handlers/getContentHandler");

const authenticate = async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        const {success} = await get_req(`/auth/authenticate/${token}`);
        console.log(success);
        if(success){
            next()
        }else{
            res.redirect("/signIn");
        }
    }else{
        res.redirect("/signIn");
    }
}

const checkUser = async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        const {success, user} = await get_req(`/auth/authenticate/${token}`);
        console.log(success, user);
        if(success){
            res.locals.user = user;
            next();
        }else{
            res.locals.user = null;
            next();
        }
    }else{
        res.locals.user = null;
        next();
    };
};

module.exports = {authenticate, checkUser}