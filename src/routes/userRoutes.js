const express = require("express");
const router = express.Router();
const {  getAllUsers, createUser, getUserById, updateUserById, deleteUserById } = require("../controllers/userController");


// Routes pour les utilisateurs
router.get("/users", getAllUsers);

// Routes pour la création d'un utlisateur
router.post("/users", createUser);

// Routes pour la récupération d'un utilisateur par ID
router.get("/users/:id", getUserById);

// Routes pour la mise à jour d'un utilisateur par ID
router.put("/users/:id", updateUserById);

// Routes pour la suppression d'un utilisateur par ID
router.delete("/users/:id", deleteUserById);

module.exports = router;