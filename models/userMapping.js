const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userMapping = new Schema({
    Uid1: {
        type: ObjectId,
        required: true
    },
    Uid2: {
        type: ObjectId,
        required: true
    },
    U1ChatFlag: {
        type: Boolean,
        default: true
    },
    U2ChatFlag: {
        type: Boolean,
        default: true
    },
    messagesByU1: {

        msg: {
            type: String,
            required: true
        },
        crtd: {
            required: true
        }
    },

    messagesByU2: {

        msg: {
            type: String,
            required: true
        },
        crtd: {
            required: true
        }
    }

});
module.exports = mongoose.model('userMapping', userMapping);

