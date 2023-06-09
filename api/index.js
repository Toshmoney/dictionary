const express = require("express");
const app = express();
const port = 3012;
const bodyParser = require("body-parser");
const definition = require("./data/definitions");
const router = require("./routes/handler");



// ******* Middlewares *********
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.status(200).json(definition)
})
app.listen(port, ()=>{
    console.log(`Coding dictionary server started on port ${port}`);
})