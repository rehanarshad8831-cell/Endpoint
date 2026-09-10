require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");

const app = express();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => res.send("Hello Rehan Arshad"));

connectDB()

    .then(() => app.listen(process.env.PORT || 5000, () => console.log("Server running")))
    
    .catch((error) => console.error("Database error:", error.message));