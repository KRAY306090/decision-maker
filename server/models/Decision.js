const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const decisionSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    decisionText: {
        type: String,
        required: 'Describe your conundrum!',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },
    // pros: [
    //     {
    //         type: String
    //     }
    // ],
    // cons: [
    //     {
    //         type: String
    //     }
    // ],
    // active: {
    //     type: Boolean
    // }
})

const Decision = mongoose.model('Decision', decisionSchema);

module.exports = Decision;