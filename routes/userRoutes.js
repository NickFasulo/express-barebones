const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// get all users
router.get("/", userController.getAllUsers);

// // get user by id
router.get("/:id", userController.getUser);

// // create user
router.post("/", userController.createUser);

// // update user by id
router.put("/:id", userController.updateUser);

// // delete user by id
router.delete("/:id", userController.deleteUser);

module.exports = router;
