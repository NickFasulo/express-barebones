const users = require("../models/User");

module.exports = {
  getAllUsers: (req, res) => {
    return res.json(users);
  },
  getUser: (req, res) => {
    return res.send("getUser");
  },
  createUser: (req, res) => {
    return res.send("createUser");
  },
  updateUser: (req, res) => {
    return res.send("updateUser");
  },
  deleteUser: (req, res) => {
    return res.send("deleteUser");
  }
};
