const pool = require("../../config/database");
console.log("Service Class");
var datetime = new Date();

module.exports = {
  SignUp: (data, callBack) => {
    console.log("Controller flag 2");
    pool.query(
      "insert into DetailData(email, password, created_Date, account_Type) values(?,?,?,?)",
      [data.email, data.password, datetime, data.account_Type],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  SignIn: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from DetailData where email =? and password=? and account_Type=?",
      [data.email, data.password, data.account_Type],
      (error, results, fields) => {
        if (error) {
          console.log("Controller flag services error");
          return callBack(error);
        }
        console.log("Controller flag services success");
        return callBack(null, results);
      }
    );
  },

  GetAllPackeges: (data, callBack) => {
    console.log("Controller flag services");
    pool.query("select * from PackageData", [], (error, results, fields) => {
      if (error) {
        console.log("Controller flag services error");
        return callBack(error);
      }
      console.log("Controller flag services success");
      return callBack(null, results);
    });
  },

  GetAllFeedBack: (data, callBack) => {
    console.log("Controller flag services");
    pool.query("select * from FeedBackData", [], (error, results, fields) => {
      if (error) {
        console.log("Controller flag services error");
        return callBack(error);
      }
      console.log("Controller flag services success");
      return callBack(null, results);
    });
  },
  GetAllCustomers: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from DetailData where account_Type ='Customer'",
      [],
      (error, results, fields) => {
        if (error) {
          console.log("Controller flag services error");
          return callBack(error);
        }
        console.log("Controller flag services success");
        return callBack(null, results);
      }
    );
  },
  GetUserDetailById: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from DetailData where user_id =?",
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          console.log("Controller flag services error");
          return callBack(error);
        }
        console.log("Controller flag services success");
        return callBack(null, results);
      }
    );
  },
  addUserDetail: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      // "select * from DetailData where user_id =?",
      "UPDATE DetailData SET email=?, userName=?,occupation=?,mobileNumber=?,age=?,gender=?,qualification=?,address=? WHERE user_id = ?",
      [
        data.email,
        data.userName,
        data.occupation,
        data.mobileNumber,
        data.age,
        data.gender,
        data.qualification,
        data.address,
        data.user_id,
      ],
      (error, results, fields) => {
        if (error) {
          console.log("Controller flag services error");
          return callBack(error);
        }
        console.log("Controller flag services success");
        return callBack(null, results);
      }
    );
  },
  SubmitFeedback: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      // "select * from DetailData where user_id =?",
      "insert into FeedBackData (Customer_Name, Customer_Email, FeedBack) values(?,?,?)",
      [data.Customer_Name, data.Customer_Email, data.FeedBack],
      (error, results, fields) => {
        if (error) {
          console.log("Controller flag services error");
          return callBack(error);
        }
        console.log("Controller flag services success");
        return callBack(null, results);
      }
    );
  },
};
