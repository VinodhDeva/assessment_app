var express = require('express');
var router = express.Router();
var AppList = require('../models/dataSchemaAppList');



router.post('/bookappointment', (req, res, next) =>{
    var newAppList = new AppList({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        contact: req.body.contact,
        apptime: req.body.apptime,
        waitedtime: req.body.waitedtime,
        vitalscheckin: req.body.vitalscheckin,
        addeddate: req.body.addeddate
    });
    newAppList.save((err, applist)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg:applist});
    });    
});



router.get('/appointmentlist', (req, res, next) =>{
    AppList.find({}, (err,lists)=>{
        if(err){
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg: lists});
    });
});

router.get('/appointmentlistdate', (req, res, next) =>{
    AppList.findOne({addeddate: new Date('YYYY/MM/DD')}, (err, doc) => {
        if(err){
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg: lists});
    });
});



module.exports = router;