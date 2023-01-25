require('dotenv').config()
require('./config/database');

const Match = require('./models/match')

const data = require('./data')

const p1 = Match.deleteMany({})

Promise.all(p1)
    .then(function(results) {
        console.log(results)
        return Match.create(data.matches)
        process.exit()
    })