const {
  SignUp,
  SignIn,
  GetAllPackeges,
  GetAllFeedBack,
  GetAllCustomers,
  GetUserDetailById,
  addUserDetail,
  SubmitFeedback,
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
};
