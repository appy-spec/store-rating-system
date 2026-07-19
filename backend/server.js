require("dotenv").config();

const app = require("./src/app");
const db = require("./src/config/db");
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {

    const connection = await db.getConnection();
    console.log("Database Connected Successfully");
    connection.release();

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });

  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
}

startServer();