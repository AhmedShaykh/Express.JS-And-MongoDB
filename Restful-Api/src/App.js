const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/students", (req, res) => {
    res.send("Students Data");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});