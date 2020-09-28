const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvshowSchema = new Schema({
    name: String,
    description: String

}, { timestamps: true })

module.exports = mongoose.model('Todo', tvshowSchema);