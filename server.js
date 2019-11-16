const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static("src"));

/** Routes will go here */

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);
