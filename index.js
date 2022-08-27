const express = require("express");
const { connection } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const allRoutes = require("./routes/index");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", allRoutes);

// testing
app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server is running");
});
