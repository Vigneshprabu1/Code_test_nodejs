

const CategoryService = require('../service/CategoryService');


exports.getAllCategory = (req,res,next) =>{
    CategoryService.getAllCategory(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}

exports.saveCategory = (req,res,next)=>{
    CategoryService.saveCategory(req,res).then(doc=>{
        res.status(200).json(doc)
    }).catch(next);
}

exports.updateCategory = (req,res,next)=>{
    CategoryService.updateCategory(req,res).then(doc=>{
        res.status(200).json(doc)
    }).catch(next);
}