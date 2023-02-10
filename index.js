const express = require("express");
const app = express();
app.use(express.json());
// Application Routing
app.use("/", require("./routes/router"));

// const axios = require("axios");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// const dotenv = require("dotenv");
// dotenv.config();

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

const PORT = 3000;

const openAIAPI = require("./Controllers/openAIControllers");
const {
  getAllUsers,
  updateUser,
  AddUser,
  deleteUser,
} = require("./Controllers/signUpControllers");

const sendMail = require("./services/sendMail");

// app.use((req, res, next) => {
//   const { user } = req.cookies;

//   if (user) {
//     const expiresIn = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//     const currentTime = new Date().getTime();
//     const userLastAccessed = user.lastAccessed;

//     if (currentTime - userLastAccessed > expiresIn) {
//       res.clearCookie("user");
//     } else {
//       user.lastAccessed = currentTime;
//       res.cookie("user", user);
//     }
//   }
//   next();
// });

// app.get("/", (req, res) => {
//   const { user } = req.cookies;
//   if (user) {
//     res.send("Welcome back, " + user.name);
//   } else {
//     res.send("Please login to access this page");
//   }
// });

app.get("/openai/:prompt", openAIAPI);

app.get("/send-email-otp", sendMail);

app.get("/signup", getAllUsers);
app.post("/signup", AddUser);
app.put("/signup/:id", updateUser);
app.delete("/signup/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`OpenAI API is running on PORT ${PORT}`);
});
