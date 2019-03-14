const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const prodScheme = new Scheme({
    item_type: {type: String},
    brand_name: {type: String},
    color: {type: String},
    quantity: {type: String},
    price: {type: String}
});

const prods = module.exports = mongoose.model("product", prodScheme);


module.exports.addProd = function(nwProd, callback){
    nwProd.save(callback);
};

module.exports.getAllProd = function(callback){
    prods.find(callback);
};

module.exports.updateProd = function(id, updtDta, callback){
    query = {_id : id};

    prods.findByIdAndUpdate(

        query,
        {$set:{
            item_type:updtDta.item_type,
            brand_name:updtDta.brand_name,
            color:updtDta.color,
            quantity:updtDta.quantity,
            price:updtDta.price
        }},
        function(err, list){
            if(err) {console.log(err); }
            if(list){
                callback(null, list);
            }
        }
    );

};