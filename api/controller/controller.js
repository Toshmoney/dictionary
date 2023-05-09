const definition = require("../data/definitions")

const getAllwords = async(req, res)=>{
    res.status(200).json(definition)
}

const getSinglewords = async(req, res)=>{
    res.status(200).json(definition[0].parenthesis)
}

module.exports = {getAllwords, getSinglewords}