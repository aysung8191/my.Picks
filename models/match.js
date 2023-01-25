const mongoose = require('mongoose');
const { matches } = require('../data');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const matchSchema = new Schema({
    matchup: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    projectedWeather: {
        type: String,
    },
    openingLine: {
        type: String
    },
    currentLine: {
        type: String
    },
    overUnder: {
        type: String
    },
    atsTrends: {
        type: String
    },
    overUnderTrends: {
        type: String
    },
    injuredPlayers: {
        type: String
    }, 
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema);