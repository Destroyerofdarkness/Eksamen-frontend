const router = require("express").Router();
const controller = require("../controllers/auth_controllers");
const limit = require("../config/rateLimit")

//Server side Routes
router.get("/signIn", controller.render_sign_in);

router.get("/signUp",controller.render_sign_up);

router.get("/createCookie/:token",limit, controller.createCookie);

router.get("/logOut", controller.log_out);

//API requests side routes
router.post("/signIn",limit, controller.send_sign_in_req);

router.post("/signUp",limit, controller.send_sign_up_req);

module.exports = router;