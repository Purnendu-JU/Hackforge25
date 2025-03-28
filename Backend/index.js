const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const mongoURI = "mongodb://localhost:27017/health";
async function main() {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo");
}
main();
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/message', require('./routes/message'));
app.use('/api/prompt', require('./routes/chat'));
app.listen(port, () => {
  console.log(`Listening at ${port}`);
})