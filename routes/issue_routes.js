const router = require("express").Router();
const controller = require("../controllers/issue_controller");
const {authenticate} = require("../middleware/authenticate");

router.get("/anmeld", authenticate, controller.render_issue_publish_page);


module.exports = router;
