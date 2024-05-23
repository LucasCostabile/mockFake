const express = require("express");
const usersRoutes = require("./src/routes/users.routes")
const app = express()

app.use(express.json());

app.get("/test", (req, res) => {
  
    res.status(200).json({ message: "ok" });
});

app.use("/api/products", usersRoutes);


module.exports = app;
