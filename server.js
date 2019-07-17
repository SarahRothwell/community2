const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//connect database
connectDB();

//Initialize Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running")); //bodyParser

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/support", require("./routes/api/support"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
