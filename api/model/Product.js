
const mongoose = require('mongoose');


const productListSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  productName: String,
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'Login'},
  categoryId:{type:mongoose.Schema.Types.ObjectId, ref:'categoryLists'},
  status: String,
  createdBy: String,
  createdOn: String,
  modifiedBy: String,
  modifiedOn: String,
});

module.exports = mongoose.model('ProductLists',productListSchema);