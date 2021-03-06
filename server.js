/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("./swagger-config.json");

const medicines = require("./routes/medicines");
const user = require("./routes/users");
const profile = require("./routes/profile");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Set swagger
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database conifg
const uri = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

const { connection } = mongoose;
connection.once("open", () => {
  console.log("MongoDb database connection estabilished successfully");
});

// Use Routes
app.use("/api/Apteczka", medicines);
app.use("/api/Apteczka/user", user);
app.use("/api/Apteczka/profile", profile);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
