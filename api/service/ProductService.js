const Product = require("../model/Product");
const dateTime = require("node-datetime");
const mongoose = require("mongoose");

async function getAllProduct(req, res) {
  return await Product.find().exec();
}

async function saveProduct(req, res) {
  var result;
  const dt = dateTime.create();
  const formatted = dt.format("Y-m-d H:M:S");
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    productName: req.body.productName,
    userId: req.body.userId,
    categoryId: req.body.categoryId,
    status: '1',
    createdBy: req.body.createdBy,
    createdOn: formatted,
  });
  await  product.save().then(doc=>{
      result = doc;
  });
  return result;
}


async function updateProduct(req,res){
    var result;
  const dt = dateTime.create();
  const formatted = dt.format("Y-m-d H:M:S");
  await Product.findByIdAndUpdate({_id:req.body._id},{
      $set:{
        productName: req.body.productName,
        userId: req.body.userId,
        categoryId: req.body.categoryId,
        status: '1',
        modifiedBy: req.body.modifiedBy,
        modifiedOn: formatted,
      }
  })
}

module.exports.saveProduct = saveProduct;
module.exports.updateProduct = updateProduct;
module.exports.getAllProduct = getAllProduct;