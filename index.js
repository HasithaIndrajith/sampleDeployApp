const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Dinuka");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App is running");
});
