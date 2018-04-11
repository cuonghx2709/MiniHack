const goalSchema = require('../models/goalModel')

const addGame = async (player1, player2, player3, player4, onComplete) => {
    let newGame = {
        player1,
        player2,
        player3,
        player4
    }
    try {
        let game = await goalSchema.create(newGame);
        onComplete(null, game._id)
    } catch (err) {
        onComplete(err, null)
    }
}
const getGame = (id, callback) => {
    goalSchema.findOne({'_id': id}, (err, doc) =>{
        if (err) console.log(err)
        callback(doc);
    })
}

module.exports = {
    addGame,
    getGame
}