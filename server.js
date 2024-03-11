const express = require('express')
const path = require('path');
const cors = require('cors');
const app = express()

const port = app.get('port') || 3003; // Use port 3003 as a default if not set
app.use(express.static('.'));
app.use(express.json())
// Enable CORS for all routes (you can customize the options)
app.use(cors());


//  http://127.0.0.1:3003/ 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


// http://127.0.0.1:3003/signIn 
app.get('/signIn', (req, res) => {
  res.sendFile(path.join(__dirname, 'signIn.html'));
});

// http://127.0.0.1:3003/signUp 
app.get('/signUp', (req, res) => {
  res.sendFile(path.join(__dirname, 'signUp.html'));
});

//Users @ http://127.0.0.1:3003/get/user
app.get('/get/user/', (req, res) => {
  res.sendFile(path.join(__dirname, 'accounts.json'));
});

http://localhost:3003/get/user/data/profil
app.get('/get/user/data/profil/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dataUsers.json'));
});

app.listen(port)