const mongoose = require("mongoose");

let codeSchema = new mongoose.Schema({
    codeDescription: {
        type: String,
        required: false
    },
    codeLanguage: {
        type: String,
        required: true
    },
    codeBlock: {
        type:String,
        required: false
    }
});

module.exports = mongoose.model("Data", codeSchema);