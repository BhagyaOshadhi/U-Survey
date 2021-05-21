const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const ExpressValidator = require('express-validator')
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

const postRoutes= require('./routes/post')

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(ExpressValidator());
app.use("/",postRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`A nodejs is listenning on port : ${port}`)
});
 
//db connection












