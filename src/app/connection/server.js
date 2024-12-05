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
 const user_Model = require ('../app/(main)/user')
 app.get('/user/user_List',user_Model.user_List)

 const { default: axios } = require('axios')
 const port = process.env.port || 3000;
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 });

 const  port = process.env.port || 5002;
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 });
 const db = require('../connection/config/database');

// const user_Model = {
//   user_List: (req, res) => {
//     const query = 'SELECT * FROM user'; // Replace `user` with your actual table name
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error fetching users:', err.message);
//         res.status(500).json({ error: 'Database query failed' });
//         return;
//       }
//       res.json(results);
//     });
//   },
// };

// module.exports = user_Model;
