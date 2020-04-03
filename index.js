const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')))

//Allow frontend to communicate with server
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
})

const port = process.env.PORT || 5000
app.listen(port)