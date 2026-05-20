
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

module.exports = {
    render_sign_in,
    render_sign_up
}