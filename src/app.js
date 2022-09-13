const path = require('path');
const express = require('express'); //importando el modulo express
const handlebars = require('express-handlebars'); //importando el modulo handlebars
const app = express(); //creacion de servidor
const publicDirectoryPath = path.join(__dirname, '/public'); //acedemos al directorio public

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
}));

//muestra lo que esta en public
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render('intro', { layout: 'index' });
})
app.get("/about", (req, res) => {
    res.render('about', { layout: 'index' });
})
app.get("/contact", (req, res) => {
    res.render('contact', { layout: 'index' });
})
app.get("/projects", (req, res) => {
    res.render('projects', {
        layout: 'index', projects: [{
            title: "Ghibli Songs Player",
            url: "img/studioGhibli.png",
            languages: "HTML, CSS, JAVASCRIPT"
        },
        {
            title: "PokeApi Switch",
            url: "img/pokeapi.png",
            languages: "HTML, CSS, JAVASCRIPT"
        }, {
            title: "PokeDex FormTable",
            url: "img/pokedex.png",
            languages: "HTML, CSS, JAVASCRIPT"
        }, {
            title: "Lottery Slot Machine",
            url: "img/slotMachine.png",
            languages: "HTML, CSS, JAVASCRIPT"
        }, {
            title: "Click",
            url: "img/eventoclick.png",
            languages: "P5.JS"
        }, {
            title: "Animation",
            url: "img/movimiento.png",
            languages: "P5.JS"
        }, {
            title: "BrandPage",
            url: "img/brandPage.png",
            languages: "HTNL, CSS"
        }, {
            title: "Portfolio",
            url: "img/Portafolio.png",
            languages: "HTML, CSS"
        }, {
            title: "AboutMe Page",
            url: "img/aboutme.png",
            languages: "HTML, CSS"
        }, {
            title: "Age Checker",
            url: "img/verficacionedad.png",
            languages: "HTML, CSS, JAVASCRIPT"
        }]
    });
})

//escuchar puerto
app.listen(4000, () => {
    console.log("http://localhost:4000")
}) 
