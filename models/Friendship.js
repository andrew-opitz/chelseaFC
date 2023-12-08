const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const friendshipSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Friendship = model('Friendship', friendshipSchema)

module.exports = Friendship