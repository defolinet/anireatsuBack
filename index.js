const express = require('express')
const {animes, allAnime} = require('./models/animes')
const {genres, allGenres} = require('./models/genres')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/anime', (req, res) => {
    res.send(animes)
})

allAnime.forEach(e => {
    app.get(e.url, (reg, res) => {
        res.send(e)
    })
})

app.get('/genres', (reg, res) => {
    res.send(genres)
})

allGenres.forEach(e => {
    app.get(e.url, (reg, res) => {
        res.send(e)
    })
})

app.listen(port, () => {
    console.log('Server started');
})