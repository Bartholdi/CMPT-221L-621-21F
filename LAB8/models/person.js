const mongoose = require('mongoose');
 
const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})
 
const Person = mongoose.model('Students', personSchema);

module.exports = Person;
