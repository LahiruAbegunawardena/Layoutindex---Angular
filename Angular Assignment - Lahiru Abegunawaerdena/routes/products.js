const express = require('express');
const route = express.Router();
const prod = require('../models/products');

route.post('/add', function(req, res){
    const nwProd = new prod({
        item_type: req.body.item_type,
        brand_name: req.body.brand_name,
        color: req.body.color,
        quantity: req.body.qty,
        price: req.body.price
    });

    prod.addProd(nwProd, function(err, success){
        if(err) { console.log('Data adding failed'); }
        if(success) { 
            res.json({
                status: true,
                msg: success
            });
         }
    });
});

route.post('/getAll', function(req, res){

    prod.getAllProd(function(err, prod){
        if(err) { return err; }
        if(prod) { 
            res.json({
                data:prod
            });
        }
    });
});

route.post('/update', function(req, res){

    const updtDta = req.body;

    prod.updateProd(updtDta._id, updtDta, function(err, prod){
        if(err) { return err; }
        if(prod) {
            res.json({
                msg: 'Updated Successfully',
                data: prod
            });
        }
    });
});

module.exports = route;

