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
    pool.query(
      "select * from PackageData",
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
};
