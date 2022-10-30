const express = require('express')
const app = express()
const port = 3000
const api = require("./routes/api");

app.use("/api", api);
//use api.js to handle endpoints that start with /api

app.get('/', (req, res) => {
  res.send('Welcome to Data Repersentation and Querying!')//q3
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('http://localhost:3000/', (req, res) => {
    res.send('Hello Arguement!')//q4
  })


  app.get('/', (req, res) => {

  });
   
    app
    .route("/api/books")
    .get((req, res) => {}) 
    .post((req, res)  => {});
    
  
