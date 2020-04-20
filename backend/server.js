const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDb database connection estabilished successfully');
});

const home = require('./routes/home');
// const addMedicine = require('./routes/addMedicine');

app.use('/ApteczkaProject', home);

// app.use('/ApteczkaProject/addMedicine', addMedicine);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
