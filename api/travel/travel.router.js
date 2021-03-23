const { SignUp, SignIn } = require("./travel.controller");

const router = require("express").Router(); //Create Router object

router.post("/SignUp", SignUp); //POST API Registration
router.post("/SignIn", SignIn); //POST API Login
console.log("Router Class");

module.exports = router;
