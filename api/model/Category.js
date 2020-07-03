/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: TodoList Model
 */

const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  categoryName: String,
  status: String,
  createdBy: String,
  createdOn: String,
  modifiedBy: String,
  modifiedOn: String,
});

module.exports = mongoose.model('categoryList',categorySchema);