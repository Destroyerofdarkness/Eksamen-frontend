
const render_issue_publish_page = (req,res)=>{
    try {
        res.render("publishIssue", {title: "Anmeld Hendelse"});
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {render_issue_publish_page}