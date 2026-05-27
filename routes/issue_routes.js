const router = require("express").Router();
const controller = require("../controllers/issue_controller");
const {authenticate} = require("../middleware/authenticate");
const {checkAdmin} = require("../middleware/authorize")

//Server side render
router.get("/anmeld", authenticate, controller.render_issue_publish_page);

router.get("/administrasjon", authenticate,checkAdmin ,controller.render_admin_page);

//API requests
router.post("/anmeld", authenticate, controller.send_issue_publish_req);

router.put("/oppdater/logg", authenticate,checkAdmin, controller.update_issue_logg_req);

router.put("/oppdater/kritiskNiva", authenticate, checkAdmin, controller.update_issue_criticality_req);

router.put("/oppdater/ansvarlig", authenticate, checkAdmin, controller.update_issue_authorized_req);


module.exports = router;
