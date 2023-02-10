const sqlite3 = require("sqlite3").verbose();

// Connect to the database
let db = new sqlite3.Database("signup.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the signup database.");
});

// Create the table to store sign-up details
db.run(`CREATE TABLE IF NOT EXISTS signup_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    email_OTP INTEGER NOT NULL
  )`);

module.exports = db;
