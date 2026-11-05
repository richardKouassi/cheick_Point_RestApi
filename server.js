require("dotenv").config();
const app = require("./src/app");
const connectToDatabase = require("./src/config/dataBase");

const port = 3000;

// Connexion avec MongoDB
connectToDatabase();


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});