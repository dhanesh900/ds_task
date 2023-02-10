const db = require("../Models/signUp");
const generateOTP = require("../services/sendOtp");
// To store the correct OTP value
let correctEmailOTP = generateOTP;

// To retrieve all sign-up details
const getAllUsers = (req, res) => {
  db.all("SELECT * FROM signup_details", (err, rows) => {
    if (err) {
      res.status(500).send({ error: "Failed to retrieve sign-up details" });
    }
    res.send({ signup_details: rows });
  });
};

// To add a new sign-up detail
const AddUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const email_otp = req.body.email_OTP;
  const password = req.body.password;

  if (email_otp === correctEmailOTP) {
    db.run(
      `INSERT INTO signup_details (name, email, password,email_OTP)
            VALUES (?, ?, ?,?)`,
      [name, email, password, email_otp],
      (err) => {
        if (err) {
          res.status(500).send({ error: "Failed to add sign-up detail" });
        }
        res.send({ message: "Sign-up detail added successfully" });
      }
    );
  } else {
    res.status(400).send({ message: "Incorrect OTP. Sign-up failed" });
  }
};

// To update an existing sign-up detail
const updateUser = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.run(
    `UPDATE signup_details
            SET name = ?, email = ?, password = ?
            WHERE id = ?`,
    [name, email, password, id],
    (err) => {
      if (err) {
        res.status(500).send({ error: "Failed to update sign-up detail" });
      }
      res.send({ message: "Sign-up detail updated successfully" });
    }
  );
};

// To delete an existing sign-up detail
const deleteUser = (req, res) => {
  const id = req.params.id;

  db.run(`DELETE FROM signup_details WHERE id = ?`, [id], (err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete sign-up detail" });
    }
  });
};

module.exports = { getAllUsers, updateUser, deleteUser, AddUser };
