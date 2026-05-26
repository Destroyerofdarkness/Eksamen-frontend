const post_req = require("../handlers/postContentHandler");

//Server side render
const render_issue_publish_page = (req, res) => {
  try {
    res.render("publishIssue", { title: "Anmeld Hendelse" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};


const render_admin_page = (req,res)=>{
    try{
        res.render("administration", {title:"Administrasjon"});
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error!!")
    }
}


//API request controllers
const send_issue_publish_req = async (req, res) => {
  try {
    const {success, errors} = await post_req("/issue/publish", req.body);
    if(success){
        res.status(200).json({success});
    }else{
        res.status(400).json({errors, success});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({err, success:false});
  }
};

module.exports = { 
    render_issue_publish_page,
    send_issue_publish_req,
    render_admin_page
 };
