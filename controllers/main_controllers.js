
const render_homepage = (req,res)=> {
    try {
        res.render("homepage", {title:"Homepage"});
    } catch (err) {
        res.status(500).send("Internal Server Error!!")
    }
}


module.exports = { render_homepage}