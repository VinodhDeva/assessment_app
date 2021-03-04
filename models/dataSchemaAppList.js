var mongoose = require('mongoose');

var applistSchema = mongoose.Schema({
    name: {type: String},
    gender: {type: String},
    age: {type: String},
    contact: {type: String},
    apptime: {type: String},
    waitedtime: {type: String},
    vitalscheckin: {type: String},
    addeddate: {type: String}
});

module.exports = mongoose.model('applist', applistSchema);