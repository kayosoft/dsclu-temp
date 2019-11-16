const express = require("express");
const app = express();

app.use(express.static("src"));

/** Routes will go here */

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);
