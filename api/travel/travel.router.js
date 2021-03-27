const {
  SignUp,
  SignIn,
  GetAllPackeges,
  GetAllFeedBack,
  GetAllCustomers,
  GetUserDetailById,
  addUserDetail,
  SubmitFeedback,
  GetUserBuyPackages,
  GetAllUserByPackages,
  AddBuyUserPackages,
  AddNewPackagesDetail,
  AdminRestriction,
} = require("./travel.controller");

const router = require("express").Router(); //Create Router object

router.post("/SignUp", SignUp); //POST API Registration
router.post("/SignIn", SignIn); //POST API Login
router.post("/GetUserDetailById", GetUserDetailById); //Get user detail by id
router.get("/GetAllPackeges", GetAllPackeges); //Get All Packages
router.get("/GetAllFeedBack", GetAllFeedBack); //Get All Feedback
router.get("/GetAllCustomers", GetAllCustomers); // Get All Customer Detail
router.post("/addUserDetail", addUserDetail); // All All detail Of User
router.post("/SubmitFeedback", SubmitFeedback); //Submitting feed in database
router.post("/GetUserBuyPackages", GetUserBuyPackages); //Get User Buy packages
router.get("/GetAllUserByPackages", GetAllUserByPackages);
router.post("/AddBuyUserPackages", AddBuyUserPackages);
router.post("/AddNewPackagesDetail", AddNewPackagesDetail); // Add new packages
router.get("/AdminRestriction", AdminRestriction);

console.log("Router Class");

module.exports = router;
