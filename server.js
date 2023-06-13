const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

const exerciseDB = require('./data/exercises-db');


// app.get('/', function(req, res) {
//     res.render('home')
// });

app.get('/', function(req, res) {
    res.redirect('exercises2')
});


app.get('/exercises2', function(req, res) {
    res.render('exercises/index', {
        exercises: exerciseDB.getAll()
    })
});

app.get('/exercises', function(req,res) {
    // res.send('<h1>List of exercises</h1>');
    res.render('exercises/index', {
        exercises: exerciseDB.getAll()
    })
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});