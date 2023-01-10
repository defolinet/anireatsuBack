const express = require('express')
const {animes, allAnime} = require('./models/animes/animes')
const {genres, allGenres} = require('./models/genres')
const app = express()
const port = 3001

app.use('/images/card', express.static('images/card'))

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/anime', (req, res) => {
    let offset = +req.query.offset || 0
    let limit = +req.query.limit || 16
    let searched = req.query.search ? 
            animes.result.filter(e => e.name.toLowerCase().includes(req.query.search.toLowerCase()))
        :
            [...animes.result]

    let animesSend = {
        ...animes, 
        count: searched.length,
        oldest: allAnime.reduce((prev, e) => {
            if(e.release.year < prev.release.year) return e
            else return prev
        }),
        newest: allAnime.reduce((prev, e) => {
            if(e.release.year > prev.release.year) return e
            else return prev
        }),
        result: searched.filter((e, key) => key >= offset && key < (offset + limit))
    }
    if(offset >= limit){
        animesSend.previous = `/anime?offset=${offset - limit}&limit=${limit}`
    }
    res.send(animesSend)
})

app.get('/anime/:selector', (req, res) => {
    let selector = req.params.selector

    if(isNaN(+selector)){
        res.send(allAnime.find(e => {
            let animeName = e.url.split('/')

            if(selector === animeName[animeName.length - 1]) return true
        }))
    } else {
        res.send(allAnime[selector - 1])
    }
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