const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'hugo',
    //     edad: 29,
    //     url: req.url
    // };

    // res.send(salida);

    res.render('home', {
        nombre: 'hugo',
        anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.get('/data', (req, res) => {
    res.send('Hola mundo')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})