const animesOne = require('./animesOne')
const animesThree = require('./animesThree')
const animesTwo = require('./animesTwo')
const animesFour = require('./animesFour')
const animesFive = require('./animesFive')
const animesSix = require('./animesSix')
const animesSeven = require('./animesSeven')

const allAnime = [
    ...animesOne,
    ...animesTwo,
    ...animesThree,
    ...animesFour,
    ...animesFive,
    ...animesSix,
    ...animesSeven
]

const animes = {result: []}

allAnime.forEach(anime => animes.result.push({
    name: anime.name,
    url: anime.url,
    id: anime.id,
    genres: anime.genres,
    rating: anime.rating,
    release: anime.release,
    series: anime.series,
    restriction: anime.restriction,
    images: anime.images,
}))

module.exports = {
    animes,
    allAnime,
}