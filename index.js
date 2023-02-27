require('dotenv').config()
const express = require('express')
const {animes, allAnime} = require('./models/animes/animes')
const {genres, allGenres} = require('./models/genres')
const app = express()
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware');
const methodOverride = require('method-override')

app.use('/images', express.static('images'))

app.get('/', (req, res) => {
    res.send("Hello world!")
})
app.use(express.json());
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || 'http://localhost:3000'
}));
app.use('/api', router);
app.use(errorMiddleware);

app.get('/anime', (req, res) => {
    let offset = +req.query.offset || 0
    let limit = +req.query.limit || 16
    let customized = [...animes.result]

    if(req.query.search) {
        customized = customized.filter(e => e.name.toLowerCase().replace(/ /g, '').includes(req.query.search))
    }
    
    if(req.query.searchById) {
        const sSearchById = req.query.searchById.split(',').map(e => +e)
        customized = sSearchById.map(e => customized.find(anime => anime.id === e)).reverse()
    }

    if(req.query.genres) {
        const sGenres = req.query.genres.split(',')
        customized = customized.filter(e => e.genres.some(genr => sGenres.includes(genr.name)))
    }

    if(req.query.date){
        const sDate = req.query.date.split(',')
        customized = customized.filter(e => +sDate[0] <= e.release.year && e.release.year <= +sDate[1] )
    }

    if(req.query.sort === 'rating') {
        customized = customized.sort((a, b) => {
            let changedA = String(a.rating)[0] + String(a.rating).slice(2)
            let changedB = String(b.rating)[0] + String(b.rating).slice(2) 
            if(changedA > changedB) {
                return req.query.as === 'decrease' ? 1 : -1
            } else if(changedB > changedA) {
                return req.query.as === 'decrease' ? -1 : 1
            } else {
                return 0
            }
        })
    } else if(req.query.sort === 'date') {
        customized = customized.sort((a, b) => {
            if(a.release.year > b.release.year) {
                return req.query.as === 'decrease' ? 1 : -1
            } else if(b.release.year > a.release.year) {
                return req.query.as === 'decrease' ? -1 : 1
            } else {
                return 0
            }
        })
    } else if(req.query.sort === 'series') {
        customized = customized.sort((a, b) => {
            if(a.series > b.series) {
                return req.query.as === 'decrease' ? 1 : -1
            } else if(b.series > a.series) {
                return req.query.as === 'decrease' ? -1 : 1
            } else {
                return 0
            }
        })
    }

    let count = customized.length
    let offseted = customized.filter((e, key) => key >= offset && key < (offset + limit))

    if(offseted.length){
        customized = offseted
    }


    

    let animesSend = {
        ...animes, 
        count,
        oldest: allAnime.reduce((prev, e) => {
            if(e.release.year < prev.release.year) return e
            else return prev
        }).release.year,
        newest: allAnime.reduce((prev, e) => {
            if(e.release.year > prev.release.year) return e
            else return prev
        }).release.year,
        result: customized
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
    res.send(allGenres)
})

allGenres.forEach(e => {
    app.get(e.url, (reg, res) => {
        res.send(e)
    })
})

app.get('/test', (req, res) => {
    res.send('TEST!!!')
})

mongoose.set('strictQuery', false)
const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || 'mongodb+srv://anireatsu:anireatsu123@cluster0.gfiskyo.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()