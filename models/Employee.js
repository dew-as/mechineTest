const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  mobile: { type: String },
  designation: { type: String },
  gender: { type: String },
  course: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
