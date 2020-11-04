var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Обучение коду JS', message: 'Лабораторная работа №2!'});
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Здесь вторая страница', message: 'Это - вторая страница!'});
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
