const animesOne = require('./animesOne')
const animesThree = require('./animesThree')
const animesTwo = require('./animesTwo')
const animesFour = require('./animesFour')
const animesFive = require('./animesFive')
const animesSix = require('./animesSix')

const animes = {
    result: [
        {
            name: 'Наруто',
            url: '/anime/naruto'
        },
        {
            name: "Магическая битва",
            url: "/anime/magicbattle"
        },
        {
            name: "Атака на титанов",
            url: "/anime/attackontitans"
        },
        {
            name: "Твоё имя",
            url: "/anime/yourname"
        },
        {
            name: "Блич",
            url: "/anime/bleach"
        },
        {
            name: "Токийские мстители",
            url: "/anime/tokyorevengers"
        },
        {
            name: "Человек-бензопила",
            url: "/anime/chainsawman"
        },
        {
            name: "Ван-Пис",
            url: "/anime/onepiece"
        },
        {
            name: "Волейбол",
            url: "/anime/volleyball"
        },
        {
            name: "Этот глупый свин не понимает мечту девочки-зайки",
            url: "/anime/seishun-buta"
        },
        {
            name: "Моя девушка не только милая",
            url: "/anime/shiki-san"
        },
        {
            name: "Жемчуг дракона",
            url: "/anime/dragonball",
        },
        {
            name: "Тетрадь смерти",
            url: "/anime/death-note",
        },
        {
            name: "Ванпанчмен",
            url: "/anime/OnePunchMan",
        },
        {
            name: "Я побрился. И приютил старшеклассницу",
            url: "/anime/school-student",
        },
        {
            name: "Боец Баки",
            url: "/anime/bakifighter",
        },
        {
            name: "Токийский гуль",
            url: "/anime/tokyo-ghoul",
        },
        {
            name: "Клинок рассекающий демонов",
            url: "/anime/blade-demons",
        },
        {
            name: "Хантер х Хантер", 
            url: "/anime/hanter",
        },
        {
            name: "Бездомный Бог", 
            url: "/anime/homeless",
        },
        {
            name: "Семь смертных грехов", 
            url: "/anime/deadly-sins",
        },
        {
            name: "Класс убийц", 
            url: "/anime/assassin-class",
        },
        {
            name: "Фейри Тейл", 
            url: "/anime/feiry-tale",
        },
        {
            name: "Парад смерти", 
            url: "/anime/death-parade",
        },
        {
            name: "Милый во Франксе", 
            url: "/anime/francse",
        },
        {
            name: "Безумный азарт", 
            url: "/anime/insane",
        },
        {
            name: "Кланнад", 
            url: "/anime/clannad",
        },
        {
            name: "Семья шпинонов", 
            url: "/anime/spy-femily",
        },
        {
            name: "Берсерк", 
            url: "/anime/berserk",
        },
        {
            name: "Моя геройская акедемия", 
            url: "/anime/my-academy",
        },
        {
            name: "Дневник будущего", 
            url: "/anime/the-future",
        },
        {
            name: "Ао Аcи", 
            url: "/anime/ashi",
        },
        {
            name: "Дьявольские возлюбленные", 
            url: "/anime/lovers",
        },
        {
            name: "Мастер меча онлайн", 
            url: "/anime/master-online",
        },
        {
            name: "Линия Дьявола", 
            url: "/anime/line",
        },
        {
            name: "В лес, где мерцают светлячки", 
            url: "/anime/fireflies",
        },
        {
            name: "Я хочу съесть твою поджелудочную", 
            url: "/anime/pancreas",
        },
        {
            name: "Скейт: бесконечность", 
            url: "/anime/lnfinity",
        },
        {
            name: "Баскетбол Куроко", 
            url: "/anime/kuroko", 
        },
        {
            name: "Боруто", 
            url: "/anime/boruto",
        },
        {
            name: "Доктор Стоун", 
            url: "/anime/doctor",
        },
        {
            name: "Школа мертвецов", 
            url: "/anime/dead", 
        },
        {
            name: "Очень приятно Бог", 
            url: "/anime/cool-god",
        },
        {
            name: "Форма голоса", 
            url: "/anime/form",
        },
        {
            name: "Темный дворецкий", 
            url: "/anime/butler",
        },
        {
            name: "Хоромия", 
            url: "/anime/horimiya",
        },
        {
            name: "Магистр дьявольского культа", 
            url: "/anime/master",
        },
        {
            name: "Благословение небожителей ", 
            url: "/anime/blogging",
        },
        {
            name: "Один на вылет", 
            url: "/anime/departure",
        },
        {
            name: "Демоны старшый школы", 
            url: "/anime/older",
        },
        {
            name: "Девушка напрокат", 
            url: "/anime/for-rent",
        },
        {
            name: "Класс превосходства", 
            url: "/anime/superiority",
        },
        {
            name: "Рейтинг короля ", 
            url: "/anime/king",
        },
        {
            name: "ДжоДжо", 
            url: "/anime/jojo",
        },
        {
            name: "Пламенная бригада пожарных ", 
            url: "/anime/fiery",
        },
        {
            name: "Реинкарнация безработного", 
            url: "/anime/reincarnation",
        },
        {
            name: "Эта фарфоровая кукла влюбилась", 
            url: "/anime/doll",
        },
        {
            name: "К-он!", 
            url: "/anime/K-he!",
        },
        {
            name: "Вольный стиль!", 
            url: "/anime/style",
        },
        {
            name: "Первый шаг", 
            url: "/anime/step",
        },
        {
            name: "Инициал Ди", 
            url: "/anime/initial",
        },
        {
            name: "Намбака ", 
            url: "/anime/nambaka",
        },
        {
            name: " Персона 5", 
            url: "/anime/person",
        },
        {
            name: "Девчонка не промах", 
            url: "/anime/girl ",
        },
        {
            name: "Триплексоголик", 
            url: "/anime/triplexaholic",
        },
        {
            name: "Монстр за соседней партой ", 
            url: "/anime/monster",
        },
        {
            name: "Царство", 
            url: "/anime/kingdom",
        },
        {
            name: "Вторжение Кальмарки", 
            url: "/anime/invasion",
        },
        {
            name: "Космические братья", 
            url: "/anime/brothers",
        },
        {
            name: "Сёстры Минами", 
            url: "/anime/sisters",
        },
        {
            name: "Моя богиня!", 
            url: "/anime/goddess",
        },
        {
            name: "Танец мечей ", 
            url: "/anime/swords",
        },
        {
            name: "Симфогир: Песнь боевых принцесс", 
            url: "/anime/Princesses",
        },
        {
            name: "Замахнись сильнее", 
            url: "/anime/harder",
        },
        {
            name: "Мэйджор", 
            url: "/anime/meidjor",
        },
        {
            name: "Городской охотник", 
            url: "/anime/Hunter",
        },
        {
            name: " Игра с нулевым", 
            url: "/anime/game"
        },
        {
            name: "Ангел кровопролития", 
            url: "/anime/satsuriku",
        },
        {
            name: "Войны Сакуры", 
            url: "/anime/sakura",
        },
        {
            name: "Повесть о соседях", 
            url: "/anime/neighbors",
        },
    ],
}

console.log(animes.result.length)

const allAnime = [
    ...animesOne,
    ...animesTwo,
    ...animesThree,
    ...animesFour,
    ...animesFive,
    ...animesSix,
]

module.exports = {
    animes,
    allAnime,
}