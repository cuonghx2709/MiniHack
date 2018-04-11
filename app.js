const 
    express = require('express'),
    app = express(),
    handlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const 
    goalController = require('./controller/goalController')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))

app.set("view engine", 'handlebars');

app.get('/', (req, res) =>{
    res.render('home');
})

app.post('/api/games', (req, res) => {
    goalController.addGame(req.body.player1, req.body.player2, req.body.player3, req.body.player4, (err, id) => {
        if (err) console.error(err)
        res.send(id);    
    })
})

app.get('/games/:id' , (req, res)=>{
    goalController.getGame(req.params.id, (doc)=>{
        res.render('scoreKeeper', {
            id: doc._id
        })
    })
})

app.post('/games/:id', (req, res) =>{
    goalController.getGame(req.params.id, (doc)=>{
        res.send(doc)
    })
})


app.use(express.static('public'));
mongoose.connect('mongodb://localhost/minihack', (err) =>{
    if(err) console.log(err);
    console.log("Database connect success!");
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("app is starting at port 8080");
    }
})