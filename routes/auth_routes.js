const router = require("express").Router();
const controller = require("../controllers/auth_controllers")

router.get("/signIn",controller.render_sign_in);

router.get("/signUp",controller.render_sign_up);

router.post("/signIn", controller.send_sign_in_req);

module.exports = router;