const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    player3: { type: String, required: true },
    player4: { type: String, required: true },
    score1: [{
        score: { type: Number, default: 0 },
    }],
    score2: [{
        score: { type: Number, default: 0 },
    }],
    score3: [{
        score: { type: Number, default: 0 },
    }],
    score4: [{
        score: { type: Number, default: 0 },
    }],
});

module.exports = mongoose.model('goal', goalSchema);