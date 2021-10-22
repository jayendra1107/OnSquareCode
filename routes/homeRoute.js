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
        if (!err) {
            let path = "/" + id;
            res.render("codeSnippet", { resData, path });
        } else {
            res.send("Page doesn't exist");
        }
    });
});

router.post('/:id', (req, res) => {
    let id = req.params.id;
    Data.findOneAndUpdate({_id: id },{ codeBlock: req.body.codeBlock },(err, resData) => {
        res.redirect(`/${id}`);
    });
});

module.exports = router;