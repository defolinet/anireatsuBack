const animesOne = require('./animesOne')
const animesThree = require('./animesThree')
const animesTwo = require('./animesTwo')
const animesFour = require('./animesFour')
const animesFive = require('./animesFive')
const animesSix = require('./animesSix')

const allAnime = [
    ...animesOne,
    ...animesTwo,
    ...animesThree,
    ...animesFour,
    ...animesFive,
    ...animesSix,
]

const animes = {result: []}

allAnime.forEach(anime => animes.result.push({
    name: anime.name,
    url: anime.url
}))

module.exports = {
    animes,
    allAnime,
}