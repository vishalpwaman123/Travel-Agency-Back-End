const { SignUp, SignIn, GetAllPackeges, GetAllFeedBack } = require("./travel.controller");

const router = require("express").Router(); //Create Router object

router.post("/SignUp", SignUp); //POST API Registration
router.post("/SignIn", SignIn); //POST API Login
router.get("/GetAllPackeges", GetAllPackeges); //Get All Packages
router.get("/GetAllFeedBack", GetAllFeedBack); //Get All Packages
console.log("Router Class");

module.exports = router;
