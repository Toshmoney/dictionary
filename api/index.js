const express = require("express");
const app = express();
const port = 3012;
const bodyParser = require("body-parser");
const definition = require("./data/definitions");




// ******* Middlewares *********
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/v1/algorithm", (req, res)=>{
    res.status(200).json(definition[0].algorithm)
})
app.listen(port, ()=>{
    console.log(`Coding dictionary server started on port ${port}`);
})