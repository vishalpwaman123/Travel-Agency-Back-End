const pool = require("../../config/database");
// const cloud = require("../../config/cloudinary");
var datetime = new Date();
console.log("Service Class");

var cloudinary = require("cloudinary").v2;

require("../../config/cloudinary");
// const upload = require("../../config/multer");
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

async function fetchImageUrl(file) {
  var url = null;
  await cloudinary.uploader.upload(file, function (err, result) {
    console.log("error :", err);
    console.log("Result :", result);
    url = result.url;
  });

  return url;
}

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
  GetUserBuyPackages: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from Buy_Package where user_id =?",
      // "select * from Buy_Package where ",
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
  GetAllUserByPackages: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from Buy_Package",
      // "select * from Buy_Package where ",
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
  AddBuyUserPackages: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "insert into Buy_Package (user_id, email,mainImage , package_Destination,created_Date ) values (?, ?, ?, ?, ?)",
      [
        data.user_id,
        data.email,
        data.mainImage,
        data.package_Destination,
        datetime,
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
  AddNewPackagesDetail: async (req, callBack) => {
    console.log("Controller flag services");
    console.log(req.body);
    const data = req.body;
    // console.log(req.files);
    const file1 = req.body.package_Image1;
    const file2 = req.body.package_Image2;
    const file3 = req.body.package_Image3;
    const file4 = req.body.package_Image4;
    var package_Image1 = await fetchImageUrl(file1);
    var package_Image2 = await fetchImageUrl(file2);
    var package_Image3 = await fetchImageUrl(file3);
    var package_Image4 = await fetchImageUrl(file4);

    console.log("Image 1 Uploaded :", package_Image1);
    console.log("Image 2 Uploaded :", package_Image2);
    console.log("Image 3 Uploaded :", package_Image3);
    console.log("Image 4 Uploaded :", package_Image4);

    pool.query(
      "insert into PackageData (package_Destination, package_Discription, package_Price, package_Image1, package_Image2, package_Image3, package_Image4, created_Date ) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        data.package_Destination,
        data.package_Discription,
        data.package_Price,
        package_Image1,
        package_Image2,
        package_Image3,
        package_Image4,
        datetime,
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
  AdminRestriction: async (req, callBack) => {
    pool.query(
      "select * from DetailData where account_Type='Admin'",
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
  ForgetPassword: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "select * from DetailData where email =?",
      [data.email],
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
  ResetPassword: (data, callBack) => {
    console.log("Controller flag services");
    pool.query(
      "update DetailData set password = ? where user_id = ?",
      [data.password, data.user_id],
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
