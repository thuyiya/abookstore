const express = require("express");

const app = express();

const PORT = 3000

app.get("/", function (req, res) {
    res.json({
        message: "Working"
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});