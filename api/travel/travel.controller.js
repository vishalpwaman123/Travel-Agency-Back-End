const { SignUp, SignIn } = require("./travel.service");
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
};
