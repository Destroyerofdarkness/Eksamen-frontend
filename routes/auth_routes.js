const router = require("express").Router();
const controller = require("../controllers/auth_controllers");

router.get("/signIn",controller.render_sign_in);

router.get("/signUp",controller.render_sign_up);

router.get("/createCookie/:token", controller.createCookie);

router.post("/signIn", controller.send_sign_in_req);

router.post("/signUp", controller.send_sign_up_req)

module.exports = router;