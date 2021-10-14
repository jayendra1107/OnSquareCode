const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Data = require("../models/dataModel");

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    let data = new Data({
        codeDescription: req.body.codeDescription,
        codeLanguage: req.body.codeLanguage,
        codeBlock: req.body.codeBlock
    });
        
    data.save((err, resData) => {
        if(!err) {
            res.redirect(`/${resData._id}`);
        } else {
            console.log(`Error during insertion ${err}`);
        }
    }); 
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Data.findById(id, (err, resData) => {
        if(!err) {
            res.render("codeSnippet", { resData })
        } else {
            res.send("Page doesn't exist");
        }
    });
});

module.exports = router;