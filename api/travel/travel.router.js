const {
  SignUp,
  SignIn,
  GetAllPackeges,
  GetAllFeedBack,
  GetAllCustomers,
  GetUserDetailById,
  addUserDetail,
  SubmitFeedback,
} = require("./travel.controller");

const router = require("express").Router(); //Create Router object

router.post("/SignUp", SignUp); //POST API Registration
router.post("/SignIn", SignIn); //POST API Login
router.post("/GetUserDetailById", GetUserDetailById); //Get user detail by id
router.get("/GetAllPackeges", GetAllPackeges); //Get All Packages
router.get("/GetAllFeedBack", GetAllFeedBack); //Get All Feedback
router.get("/GetAllCustomers", GetAllCustomers);
router.post("/addUserDetail", addUserDetail);
router.post("/SubmitFeedback", SubmitFeedback);

console.log("Router Class");

module.exports = router;
