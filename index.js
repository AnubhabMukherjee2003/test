const express = require('express');
const path = require('path');

const app = express();
const port=3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/test1', (req, res) => {
    res.render('test1');
})
app.get('/test2', (req, res) => {
    res.render('test2');
})
app.get('/test3', (req, res) => {
    res.render('test3');
})
app.get('/test4', (req, res) => {
    res.render('test4');
})
app.get('/test5', (req, res) => {
    res.render('test5');
})
app.get('/test6', (req, res) => {
    res.render('test6');
})
const server = app.listen(port, () => {
    console.log(`The application started on port ${server.address().port}`);
});
