const post_req = require("../handlers/postContentHandler")


const render_sign_up = (req,res)=>{
    try {
       res.render("signUp", {title: "Sign Up"}) 
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error!!");
    }
}

const render_sign_in = (req,res)=>{
    try {
       res.render("signIn", {title: "Sign In"}) 
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error!!");
    }
}


const send_sign_in_req = async(req,res)=>{
    try {
        const {success, errors, token} = await post_req("/auth/signIn", req.body);
        if(token){
            res.status(200).json({token, success});
        }else{
            res.status(400).json({errors, success});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({err, success:false});
    };
};

const send_sign_up_req = async(req,res)=>{
    try {
        const {token, success, errors} = await post_req("/auth/signUp", req.body);
        if(token){
            res.status(200).json({token, success});
        }else{
            res.status(400).json({errors, success});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({err})
    }
}

const createCookie = async(req,res)=>{
    const token = req.params.token;
    try {
        res.cookie("jwt", token, { httpOnly:true ,maxAge: 10 *60*60 });
        res.redirect("/")
    } catch (err) {
        res.status(500).send("Internal Server Error!!");
    }
}

module.exports = {
    render_sign_in,
    render_sign_up,
    send_sign_in_req,
    send_sign_up_req,
    createCookie
}