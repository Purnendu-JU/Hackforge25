const mongoose = require('mongoose');
const express = require('express');
const mongoURI = "mongodb://localhost:27017/health";
async function main() {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo");
}
main();
const app = express();
const port = 8000;
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.listen(port, () => {
    console.log(`Listening at ${port}`);
})