const { SignUp, SignIn, GetAllPackeges } = require("./travel.controller");

const router = require("express").Router(); //Create Router object

router.post("/SignUp", SignUp); //POST API Registration
router.post("/SignIn", SignIn); //POST API Login
router.get("/GetAllPackeges", GetAllPackeges); //Get All Packages
console.log("Router Class");

module.exports = router;
