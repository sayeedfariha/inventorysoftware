const express = require('express')
const app =express()
require ('dotenv').config()
const cors =require('cors')
app.use (cors())
const db = require ('../connection/config/database');
console.log(db,'db2');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
const user_Model = require ('../app/model/admin_model/user_model')
app.get('/user/user_List',user_Model.user_List)

const { default: axios } = require('axios')
// const port = process.env.port || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const  port = process.env.port || 5002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});