const mongoose = require("mongoose");

let codeSchema = new mongoose.Schema({
    codeDescription: {
        type: String,
        required: true
    },
    codeLanguage: {
        type: String,
        required: true
    },
    codeBlock: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Data", codeSchema);