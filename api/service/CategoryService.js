

const Category = require('../model/Category');

const dateTime = require("node-datetime");
const mongoose = require("mongoose");

async function getAllCategory(req,res){
    return await Category.find().exec();
}

async function saveCategory(req,res){
    var result;
    const dt = dateTime.create();
    const formatted = dt.format("Y-m-d H:M:S");
    const category = new Category({
        _id:new mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName,
        status: '1',
        createdBy: req.body.createdBy,
        createdOn: formatted,
    });
    await category.save().then(doc=>{
        result = doc;
    });
    return result;
}

async function updateCategory(req,res){
    var result;
    const dt = dateTime.create();
    const formatted = dt.format("Y-m-d H:M:S");
    await Category.findByIdAndUpdate({_id:req.body._id},{
        $set:{
            categoryName: req.body.categoryName,
            status: '1',
            modifiedBy: req.body.modifiedBy,
            modifiedOn: formatted,
        }
    }).exec().then(doc=>{
        result = doc;
    });
    return result;
}


module.exports.saveCategory = saveCategory;
module.exports.updateCategory =updateCategory;
module.exports.getAllCategory = getAllCategory;