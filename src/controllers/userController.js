const User = require("../models/Users");


// Obtention de tous les utilisateurs
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
     res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
};

// Créer un nouvel utilisateur
const createUser = async (req, res, next) => {
    try {
        const { name, email, password, nationality } = req.body;
        const user = new User({ name, email, password, nationality });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
};

// Obtention d'un utilisateur par ID
const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
};


// Mise à jour d'un utilisateur par ID
const updateUserById = async (req, res, next) => {
    try {
        const { name, email, password, nationality } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { name, email, password, nationality }, { new: true });
        if (!user) return res.status(404).json({ message: "La mise à jour a échoué" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
};

// Suppression d'un utilisateur par ID
const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé avec succès" });
    }   catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
};  
