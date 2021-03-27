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
} = require("./travel.service");
console.log("Controller Class");

module.exports = {
  SignUp: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    SignUp(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  SignIn: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    SignIn(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  GetAllPackeges: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    GetAllPackeges(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetAllFeedBack: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    GetAllFeedBack(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetAllPackeges: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    GetAllPackeges(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetAllCustomers: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    GetAllCustomers(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetUserDetailById: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1");
    GetUserDetailById(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  addUserDetail: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1", body);
    addUserDetail(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  SubmitFeedback: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1", body);
    SubmitFeedback(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetUserBuyPackages: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1", body);
    GetUserBuyPackages(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Id Data Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  GetAllUserByPackages: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1", body);
    GetAllUserByPackages(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Id Data Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  AddBuyUserPackages: (req, res) => {
    const body = req.body;
    console.log("Controller flag 1", body);
    AddBuyUserPackages(body, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Id Data Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  AddNewPackagesDetail: (req, res) => {
    // const body = req.body;
    // console.log("Controller flag 1", body);
    // const file = req.files.package_Image1;
    // const file = req.files;
    // console.log(file);
    AddNewPackagesDetail(req, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        return res.status(404).json({
          success: 0,
          data: "User Id Data Not Found",
        });
      }
      console.log("Controller flag 3");
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  AdminRestriction: (req, res) => {
    // const body = req.body;
    // console.log("Controller flag 1", body);
    // const file = req.files.package_Image1;
    // const file = req.files;
    // console.log(file);
    AdminRestriction(req, (err, results) => {
      if (err) {
        console.log("Controller flag 2");
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      } else if (results == "") {
        console.log("Admin Not Found");
        return res.status(200).json({
          success: 1,
          data: "Admin Id Data Not Found",
        });
      } else {
        console.log("Controller flag 3");
        return res.status(404).json({
          success: 0,
          data: results,
        });
      }
    });
  },
};
