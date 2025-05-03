const { googleLogin, logout } = require("../controllers/authController");

const router = require("express").Router();

router.get("/google", googleLogin);
router.post("/logout", logout);

module.exports = router;
