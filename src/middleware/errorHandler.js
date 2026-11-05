const errorHandler = (err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "Une erreur est survenue sur le serveur" });


    // Vous pouvez également personnaliser le message d'erreur en fonction du type d'erreur
    let = statusCode = 500;
    let message = "Une erreur est survenue sur le serveur";

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Erreur de validation des données";
    } else if (err.name === "CastError") {
        statusCode = 400;
        message = "ID invalide";
    } else if (err.code === 11000) {
        statusCode = 400;
        message = "Données en double";
    }

    res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;