const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/rigister", userCtrl.rigister);

module.exports = router;
