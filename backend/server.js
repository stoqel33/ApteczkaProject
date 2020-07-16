/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const medicines = require('./routes/medicines');
const user = require('./routes/users');
const profile = require('./routes/profile');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database conifg
const uri = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDb database connection estabilished successfully');
});

// Use Routes
app.use('/ApteczkaProject', medicines);
app.use('/user', user);
app.use('/profile', profile);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
