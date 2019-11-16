const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static("src"));

/*
app.get('/', (req,res) => {
    res.sendFile('/index.html', err => console.log(err))
});
*/

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);
