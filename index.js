const express = require("express");
const app = express();
const logger = require("morgan");

const port = process.env.PORT || "3000";

const userRoutes = require("./routes/userRoutes");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));


// route middleware
app.use("/api/users", userRoutes);

// root
app.get("/", (req, res) => {
  return res.send("root level");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
