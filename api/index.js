const express = require("express");
const app = express();
const port = 3012;
const bodyParser = require("body-parser");
const definition = require("./data/definitions");
const router = require("./routes/handler");



// ******* Middlewares *********
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/v1/parenthesis", (req, res)=>{
    res.status(200).json(definition[0].parenthesis)
})
app.listen(port, ()=>{
    console.log(`Coding dictionary server started on port ${port}`);
})