const express = require("express");
const app = express();

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile("src/index.html", err => {
    if (err) console.log(err);
  });
});

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);
