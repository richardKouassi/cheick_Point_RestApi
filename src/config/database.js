const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log("Connexion réussie avec MongoDB");
    } catch (err) {
        console.error("Échec de la connexion avec MongoDB:", err);
        process.exit(1);
    }
};

module.exports = connectToDatabase;