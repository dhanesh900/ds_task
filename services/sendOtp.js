// const nodemailer = require("nodemailer");

// // Email credentials
// const transport = nodemailer.createTransport({
//   host: "your-email-host",
//   port: 587,
//   auth: {
//     user: "your-email-address",
//     pass: "your-email-password",
//   },
// });

// // Route to generate and send OTP
// //app.get('/send-otp',
// const emailOtp = (req, res) => {
//   // Generate a random 6-digit OTP
//   var e_otp = Math.floor(100000 + Math.random() * 900000);

//   // Send OTP via email using Nodemailer
//   transport
//     .sendMail({
//       from: "your-email-address",
//       to: "recipient-email-address",
//       subject: "OTP for your account",
//       text: `Your OTP is: ${e_otp}`,
//     })
//     .then((info) => {
//       console.log(`OTP sent successfully: ${info.messageId}`);
//       res.send(`OTP sent successfully to ${info.envelope.to[0]}`);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.send(`Error occurred while sending OTP: ${error}`);
//     });
// };

// module.exports = { emailOtp, e_otp };

const otpGenerator = require("otp-generator");
// const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constants');
const generateOTP = () => {
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    specialChars: false,
  });
  return OTP;
};

module.exports = generateOTP;
