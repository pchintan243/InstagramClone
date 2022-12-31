const express = require('express');
const app = express();
const path = require('path');
const port = 1001;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.send("Hello my name is Chintan Patel");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});