var mongoose = require('mongoose');
const cardSchema=new mongoose.Schema({
   heading:{type:String},
   list:[String]
}); 

module.exports=mongoose.model('card',cardSchema);