const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const StudentSchema = new Schema({
    firstName:String,        
    lastName:String,
    title:String,
    nationality:String,
    skills:Array,
    email:String,
    whySoftwareDeveloper:String,
    longTermVision:String,
    motivatesMe:String,
    favoriteQuote:String,
    joinedOn:String,
    src:String,
    file:String,
        
});

module.exports = Students =mongoose.model('Students',StudentSchema)