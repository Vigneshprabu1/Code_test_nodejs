


const productService = require('../service/ProductService');


exports.getAllProduct=(req,res,next)=>{
    productService.getAllProduct(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}

exports.saveProduct=(req,res,next)=>{
    productService.saveProduct(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}

exports.updateProduct=(req,res,next)=>{
    productService.updateProduct(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}