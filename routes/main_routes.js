const router = require("express").Router();
const controller = require("../controllers/main_controllers");
const {authenticate} = require("../middleware/authenticate");

router.get("/", authenticate ,controller.render_homepage);

router.get("/brukerveiledning", controller.rende_guide)

module.exports = router