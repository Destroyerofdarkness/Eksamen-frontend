const router = require("express").Router();
const controller = require("../controllers/issue_controller");
const {authenticate} = require("../middleware/authenticate");

//Server side render
router.get("/anmeld", authenticate, controller.render_issue_publish_page);

//API requests
router.post("/anmeld", authenticate, controller.send_issue_publish_req);


module.exports = router;
