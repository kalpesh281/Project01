const { googleLogin } = require("../controllers/authController");

const router = require("express").Router();

router.post("/google", googleLogin);

module.exports = router;