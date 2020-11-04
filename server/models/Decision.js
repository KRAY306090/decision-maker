const mongoose = require('mongoose');

const { Schema } = mongoose;

const decisionSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    pros: [
        {
            type: String
        }
    ],
    cons: [
        {
            type: String
        }
    ],
    active: {
        type: Boolean
    }
})

const Decision = mongoose.model('Decision', decisionSchema);

module.exports = Decision;