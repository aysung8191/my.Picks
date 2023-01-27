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
    sport: {
        type: String,
        enum: ['Football', 'Basketball'],
        required: true
    },
    homeTeam: {
        type: String,
        enum: ['BOS', 'BKN', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'DEN', 'MIN', 'OKC', 'POR', 'UTA', 'GSW', 'LAC', 'LAL', 'PHO', 'SAC', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS', 'DAL', 'HOU', 'MEM', 'NOP', 'SAS', 'AZ', 'ATL', 'CAR', 'CHI', 'DAL', 'DET', 'GB', 'LAR', 'MIN', 'NOS', 'NYG', 'PHI', 'SF', 'SEA', 'TB', 'WAS', 'BAL', 'BUF', 'CIN', 'CLE', 'DEN', 'HOU', 'IND', 'JAX', 'KC', 'LVR', 'LAC', 'MIA', 'NE', 'NYJ', 'PIT', 'TEN'],
        required: true
    },
    awayTeam: {
        type: String,
        enum: ['BOS', 'BKN', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'DEN', 'MIN', 'OKC', 'POR', 'UTA', 'GSW', 'LAC', 'LAL', 'PHO', 'SAC', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS', 'DAL', 'HOU', 'MEM', 'NOP', 'SAS', 'AZ', 'ATL', 'CAR', 'CHI', 'DAL', 'DET', 'GB', 'LAR', 'MIN', 'NOS', 'NYG', 'PHI', 'SF', 'SEA', 'TB', 'WAS', 'BAL', 'BUF', 'CIN', 'CLE', 'DEN', 'HOU', 'IND', 'JAX', 'KC', 'LVR', 'LAC', 'MIA', 'NE', 'NYJ', 'PIT', 'TEN'],
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