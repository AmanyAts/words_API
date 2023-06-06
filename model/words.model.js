const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    word: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)

