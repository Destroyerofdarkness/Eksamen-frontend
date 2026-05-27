const post_req = require("../handlers/postContentHandler");
const get_req = require("../handlers/getContentHandler");
const put_req = require("../handlers/updateContentHandler")

//Server side render
const render_issue_publish_page = (req, res) => {
  try {
    res.render("publishIssue", { title: "Anmeld Hendelse" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};


const render_admin_page = async(req,res)=>{
    try{
        const {Issues} = await get_req("/issue/get");
        res.render("administration", {title:"Administrasjon", Issues});
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

const update_issue_logg_req = async (req,res)=>{
  try {
    const {success} = await put_req("/issue/update/logg",req.body)
    if(success){
      res.status(200).json({success});
    }else{
      res.status(400).json({success});
    }
  } catch (err) {
      console.log(err);
      res.status(500).json({success:false});
  }
}


const update_issue_criticality_req = async(req,res)=>{
  try {
    const {success} = await put_req("/issue/update/criticality",req.body)
    if(success){
      res.status(200).json({success});
    }else{
      res.status(400).json({success});
    }
  } catch (error) {
      console.log(err);
      res.status(500).json({success:false});
  }
}
module.exports = { 
    render_issue_publish_page,
    send_issue_publish_req,
    render_admin_page,
    update_issue_logg_req,
    update_issue_criticality_req
 };
