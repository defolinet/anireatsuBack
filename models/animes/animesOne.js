

function getCard (name) {
    return `images/${name}/card.jpg`
}

function getBanner (name) {
    return `images/${name}/banner.jpg`
}

function getMinor (name) {
    let minor = []
    for(let i = 1; i <= 5; i++){
        minor.push(`images/${name}/minor/photo${i}.jpg`)
    }
    return minor
}

const animesOne = [
    {
        id: 1,
        name: "Наруто", 
        url: '/anime/naruto',
        release: {
            day: 3,
            month: 10,
            year: 2002,
        },
        seasons: 2,
        series: 720,
        isComing: false,
        movies: 11,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Масаси Кисимото",
        texts: {
            plot: "За 12 лет до начала событий, излагаемых в манге, демон-лис напал на Деревню, скрытую в листве (яп. 木ノ葉隠れの里 Конохагакурэ но сато, или просто Коноха[12]). Для спасения Конохи глава селения, Четвёртый Хокагэ, жертвует своей жизнью и запечатывает демона-лиса внутри своего новорождённого сына Наруто.Хокагэ желал, чтобы люди считали Наруто героем, поскольку Наруто сдерживает демона-лиса. Однако жители деревни восприняли Наруто как демона во плоти и возненавидели его. После инцидента Хокагэ запрещает говорить об атаке лиса, и Наруто узнаёт о своей необычности лишь случайно, годы спустя.Манга делится на две части.Наруто с трудом завершает обучение и получает звание гэнина — начинающего ниндзя. Он и двое его одноклассников, Саскэ Утиха и Сакура Харуно, образуют команду под началом опытного сэнсэя Какаси Хатакэ. По мере развития сюжета Наруто находит новых друзей среди жителей деревни и овладевает новыми способностями, считая их необходимыми для того, чтобы в будущем исполнить свою мечту — стать Хокагэ. Вскоре Коноха подвергается атаке: беглый ниндзя и разыскиваемый преступник Оротимару вместе со своими приспешниками нападает на селение, убивая его главу — Третьего Хокагэ. Будучи в состоянии меняться телами с другими людьми, Оротимару желает заполучить тело Саскэ Утихи, считая его наследственные способности подходящими для себя, так как Саскэ является представителем клана Утиха, наиболее одарённого среди ниндзя. Саскэ добровольно уходит к Оротимару, полагая, что тот даст ему возможность стать сильнее и отомстить своему старшему брату Итати. До начала событий манги Итати уничтожил весь клан Утиха за исключением Саскэ, для которого месть превратилась в смысл жизни. Наруто, желая вернуть ушедшего Саскэ, покидает Коноху и посвящает себя тренировкам. Он занимается с легендарным ниндзя Дзирайей, бывшим товарищем Оротимару, чтобы подготовиться к следующей встрече и возможной битве с Саскэ.После тренировок с Дзирайей Наруто возвращается в Деревню Скрытой Листвы и воссоединяется с повзрослевшими друзьями. Команда № 7, ранее состоявшая из Наруто, Саскэ и Сакуры, переформировывается. Теперь она называется «Команда Какаси», а место Саскэ в ней занимает другой молодой ниндзя — Сай. Ведущую роль противников Наруто и его друзей занимает организация «Акацуки», члены которой стремятся захватить всех хвостатых демонов, включая девятихвостого, заточённого внутри Наруто. Тем временем Саскэ Утиха, считая дальнейшее обучение у Оротимару бессмысленным, предаёт его и убивает. Отыскав своего старшего брата, чтобы отомстить за уничтожение клана, вступает с ним в бой, во время которого Итати неожиданно падает замертво. После этого лидер Акацуки, Тоби, сообщает Саскэ правду о том, что убийство клана было поручено Итати непосредственно руководством Деревни Скрытой Листвы в связи с планированием ими мятежа. Обозлённый этим открытием, Саскэ присоединяется к Акацуки с целью уничтожить Коноху. Тем временем по приказу Тоби члены Акацуки атакуют деревню Скрытой Листвы. Ценой больших усилий жителям Конохи удаётся отбить нападение, однако сама деревня оказывается практически полностью разрушена. На совете Кагэ — лидеров крупнейших селений ниндзя — Тоби заявляет, что собирает хвостатых демонов ради воссоздания десятихвостого бидзю и создания могущественной иллюзии, способной контролировать человечество. Когда руководители других селений отказываются помогать Тоби, он объявляет о начале Четвёртой мировой войны ниндзя. В ответ на это пять крупнейших стран создают альянс, во главе которого становится Райкагэ, и объединённую армию синоби, главнокомандующим которой становится Кадзэкагэ Гаара[14]. Начинаются бои между сторонами: на стороне Акацуки сражаются многочисленные клоны Дзэцу и призванные бывшим союзником Оротимару Кабуто Якуси умершие ниндзя, а на стороне альянса — синоби пяти стран. На второй день войны Дзэцу возрождает Кагую Оцуцуки, прародительницу искусства синоби, когда-то сорвавшую с древа чакры плод и давшую его людям. Ныне же она хочет вернуть чакру себе, для чего ранее «Акацуки» и собирали хвостатых зверей. Команде Какаси удаётся победить Кагую и запечатать её, а Наруто сражается с Саскэ, и тот признаёт поражение. В последней главе манги показана жизнь Конохи спустя десятилетие." 
        },
        images: {
            card: getCard('naruto'),
            banner: getBanner('naruto'),
            minor: getMinor('naruto')
        },
        rating: 9.2,
        restriction: 16
    },
    {
        id: 2,
        name: "Магическая битва",
        url: "/anime/magicbattle",
        release: {
            day: 2,
            month: 10,
            year: 2020,
        },
        seasons: 1, 
        series: 24,
        isComing: {
            nextRelease: {
                day: 14,
                month: 7,
                year: 2023,
            }
        },
        movies: 1,
        genres: [
            {
                name: "демоны",
                url: "/ganres/demons",
            },
            {
                name: 'фэнитези',
                url: "/ganres/fantasy",
            },
            {
                name: "школа",
                url: "/ganres/school",
            }
        ],
        author: "Акутами Гэгэ",
        texts: {
            plot:"Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится частью его души. С этого момента он делит с ним своё тело. Под присмотром Сатору Годзё, одного из сильнейших магов, Итадори поступает в магический техникум, где учат сражаться с проклятиями." 
        },
        images: {
            card: getCard('jujutsu_kaisen'),
            banner: getBanner('jujutsu_kaisen'),
            minor: getMinor('jujutsu_kaisen')
        },
        rating: 9.4,
        restriction: 18
    },
    {
        id: 3,
        name: "Атака на титанов", 
        url: "/anime/attackontitans",
        release: {
         day: 7,
         month: 4,
         year: 2013,
        },
        seasons: 4, 
        series: 87,
        isComing: false,
        movies: 2,
        genres: [
             {
             name:"драма",
             url: "/genres/drama",
             },    
             {
             name: "фэнтези",
             url: "/genres/fantasy"
             }
        ],
        author: "Хадзимэ Исаяма",
        texts: {
         plot:"В прошлом столетии человечество страдало из-за нашествия гигантов. Они были очень похожи внешностью на простых людей, но также имели несколько отличий. Разница состояла в слишком больших размерах созданий и в их абсолютной глупости. Действовали великаны, как зомби из банальных фильмов ужасов. Они не могли похвастаться разумом и полностью соответствовали своему первобытному инстинкту, связанному с выживанием. Поэтому эти существа неустанно пожирали беззащитное население, совершенно не чувствуя к нему сожаления. Под натиском воцарившегося безумия, жители планеты начали постепенно вымирать. Те, кому повезло остаться в живых, приняли решение объединиться и приступить к самозащите. Народ вскоре построил высокие стены, которые отличались поразительной прочностью. Практически целый век люди спокойно существовали и даже начали забывать о беспощадных врагах. Страх наконец-то сменился умиротворением. Эрен давно желает вступить в группу разведчиков, ведь он полагает, что противники могут вернуться и проломить заграждение. И вскоре его опасения подтверждаются. Сможет ли юный герой справиться с могущественными соперниками?"
        },
        images: {
            card: getCard('attack_on_titan'),
            banner: getBanner('attack_on_titan'),
            minor: getMinor('attack_on_titan')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id: 4,
        name: "Твоё имя",
        url: "/anime/yourname",
        release: {
            day: 26,
            month: 8,
            year: 2016,
        },
        series: 1,
        isComing: false, 
        movies: 1,
        genres: [
            {
                name:"драма",
                url: "/genres/drama", 
            },
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "школа",
                url: "/genres/school"  
            }
        ],
        author: "Макото Синкай",
        texts: {
            plot: "Действие в аниме Твое имя будет происходить в двух городах. Главными героями является парочка обычных людей, которые даже не подозревают, что вскоре судьба свяжет их жизни очень крепко. Они никогда не были знакомы, она – любимая дочь, которая свое свободное время посвящает работе в храме. Он – надежный друг, успешен и трудолюбив на работе, имеет неплохие задатки талантливого художника. Ее жизнь спокойна и размерена в небольшом провинциальном городке, в то время как он живет в огромном мегаполисе, полном суматохи и постоянном бегстве.Мицуха Миямизу и Таки Тачибана никогда не встречали друг друга, и тем не менее, их связывает одно странное событие. Однажды во сне они меняются телами и совершенно непонятно как контролировать этот процесс. Такое начинает повторятся все чаще и чаще, что создаст немало проблем в жизни наших героев, ведь просыпаться каждый день в чужой постели в чужом доме не очень приятно. Но в чем же причина таких необычных метаморфоз? Именно в этом придется разобраться главным героям."
        },
        images: {
            card: getCard('your_name'),
            banner: getBanner('your_name'),
            minor: getMinor('your_name')
        },
        rating: 9.3,
        restriction: 16
    }, 
    {
        id:5,
        name: "Блич",
        url: "/anime/bleach",
        release: {
            day: 5,
            month: 10,
            year: 2004,
        },
        seasons: 2, 
        series: 379,
        isComing: {
            nextRelease: {
                day:31,
                month: 7,
                year: 2023,
            }
        },
        movies: 4,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "приключение",
                url: "/genres/romance"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Кубо Тайто",
        texts: {
            plot: "События происходят на территории Японии, где проживает Ичиго Куросаки. Парень с ранних лет отличается от сверстников, ведь он умеет общаться с призраками. Однажды к нему в комнату залетает барышня, которую зовут Рукия Кучики. Незваная гостья является неким проводником человеческих душ. Девушка сильно удивляется тому, что юноша имеет способность видеть её и даже прикасаться. Пока ошеломлённая героиня томится в размышлениях, в помещение неожиданно врывается злой дух, называемый «пустым».Рукия мгновенно бросается спасать мальчишку, в результате чего развязывается нешуточное противостояние и она получает сильнейшее ранение. Девочка поняла, что не может продолжать бороться и принимает решение передать собственные силы новоиспеченному приятелю. Ичиго ловко поглощает переданную энергию и расправляется со злодеем. Но оказывается, что поделившись даром, девушка стала настоящей преступницей и теперь её непременно накажут. Юному храбрецу ничего не остается, как встать на защиту подруги."
        },
        images: {
            card: getCard('bleach'),
            banner: getBanner('bleach'),
            minor: getMinor('bleach')
        },
        rating: 9.4,
        restriction: 16
    },
    {
        id:6,
        name: "Токийские мстители",
        url: "/anime/tokyorevengers",
        release: {
            day: 11,
            month: 4,
            year: 2021,
        },
        seasons: 1, 
        series: 24,
        isComing: {
            nextRelease: {
                day: 8,
                month: 1,
                year: 2023
            },
        },
        genres: [
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "школа",
                url: "/genres/school"
            }
        ],
        author: "Кэном Вакуи",
        texts: {
            plot:"Двадцатишестилетний Такэмити Ханагаки — неудачник. Домовладелица ругается, управляющая на работе вечно придирается, даже маленькие дети задирают. В новостях он узнаёт о гибели девушки, с которой когда-то встречался. Попадает под поезд. Но это ещё не конец. Таинственным образом Такэмити оказывается в прошлом, ровно в тот день, когда вся его жизнь пошла наперекосяк. Может быть, у него ещё есть шанс всё исправить."
        },
        images: {
            card: getCard('tokyo_ravangers'),
            banner: getBanner('tokyo_ravangers'),
            minor: getMinor('tokyo_ravangers')
        },
        rating: 8.9,
        restriction: 16  
    },
    {
        id:7,
        name: "Человек-бензопила",
        url: "/anime/chainsawman",
        release: {
            day: 12,
            month:10,
            year: 2022,
        },
        seasons: 1, 
        series: 12,
        isComing: false,     
        genres: [
            {
                name: 'демоны',
                url: "/genres/demons"
            },
            {
                name: "приключение",
                url: "/genres/romance"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author:"Тацуки Фудзимото",
        texts: {
            plot:"Дэндзи приходится полностью изменить свою жизнь, чтобы отработать непомерные долги отца. Он становится подручным якудзы в нелегком деле уничтожения демонов. На второй план отошли не только сон и отдых, а и общение с любимой девушкой. Только дьявольский питомец-помощник Почита вносит немного разнообразия в череду кровавых будней.Теперь у Дэндзи лишь одна цель – деньги, только в них он видит шанс на освобождение. Желая быстрей получить прибыль, парень забывает об осторожности и в одной из схваток погибает. Верный Почито спасает хозяина, слившись с ним и дав способность частичного превращения в бензопилу. Переродившийся Дэндзи продолжает крушить врагов налево и направо, чем привлекает внимание Бюро общественной безопасности. Теперь вместо якудзы ему приходится выполнять поручения правительства. В этом он видит возможность возвращения к нормальной жизни, поэтому, не страшась, выступает против самых могущественных противников. Но стоит ли так рьяно сокращать количество демонов? Не накличет ли Дэндзи еще больших бед?"
        },
        images: {
            card: getCard('chainsawman'),
            banner: getBanner('chainsawman'),
            minor: getMinor('chainsawman')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id:8,
        name: "Ван-Пис",
        url: "/anime/onepiece",
        release: {
            day: 20,
            month: 10,
            year: 1999,
        },
        seasons: 1,
        series: 1046,
        isComing:{
            nextRelease: {
                day: 29,
                month: 1,
                year: 2023
            },
        },
        genres:[
            {
                name: "драма",
                url: "/genres/drama" 
            },
            {
                name: "комедия",
                url: "/genres/comedy"
            },
            {
                name: "приключение",
                url: "/genres/romance"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Эйитиро Оды",
        texts: {
            plot: "Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. Все о чем мечтает наш герой - это приключения и путешествия. Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком. Теперь у него есть необычная способность - он может растягивать свое тело и конечности до любых размеров. Сейчас перед Луффи стоит цель - стать главным среди пиратов. Но для этого, судя по легендам, необходимо добраться до древнего сокровища Ван Пис. Когда-то сам Гол Д. Роджер спрятал его где-то на Гранд Лайн, течении, которое объединяет множество островов по всему миру. Наш весельчак решает отправиться на их поиски.Однако, наш персонаж далеко не единственный, кто охотится за золотом Роджера. Казалось бы, у нашего смышленого парня есть всё, для того чтобы стать королем - необычайная сила и острый ум. Не хватает только одного - верной и преданной команды, которые последуют за своим капитаном навстречу любой опасности. Вот только Луффи стоит поторопиться, ведь за Ван Пис идет целая ватага злобных пиратов, которая не остановится ни перед чем, чтобы добраться до заветного сокровища. Монки придется предпринять немало усилий, чтобы опередить всех своих соперников."
        },
        images: {
            card: getCard('one_piece'),
            banner: getBanner('one_piece'),
            minor: getMinor('one_piece')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id: 9,
        name: "Волейбол",
        url: "/anime/volleyball",
        release: {
            day: 8,
            month: 10,
            year: 2016
        },
        seasons: 4,
        series: 85,
        isComing: false,
        genres: [
            {
                name: "драма",
                url: "/genres/drama" 
            },
            {
                name: "комедия",
                url: "/genres/comedy"
            },
            {
                name: "спорт",
                url: "/genres/sport" 
            },
            {
                name: "школа",
                url: "/genres/school"
            }
        ],
        author: "Харуити Фурудатэ",
        texts: {
            plot: "Сёё Хината – обычный двенадцатилетний школьник. Его новым увлечением становится игра в волейбол, которая полностью захватывает нашего героя. И вот, спустя три года, ему удается вместе со своей школьной командой дойти до крупного турнира. Но на первом же круге, в соперники новичкам попадается более опытная команда с очень сильным плеймекером Тобио Кагэяма. Талантливый игрок практически в одиночку расправляется с командой новичков. Теперь Хината предстоит перейти в старшую школу, а значит, и в новую волейбольную команду. Так он попадает в школу Карасуно, и само собой, первым делом отправляется записываться в команду. Среди других претендентов оказывается и Кагэяма.Таким образом, два старых соперника оказываются в одной команде, защищая черно-желтые цвета Карасуно. Хината – трудолюбивый парень, который предпочитает командную игру. Кагэяма же напротив, всегда берет игру на себя. Такой разноплановый дуэт на удивление оказывается очень продуктивным, чему очень рад тренер команды. Теперь у наших героев впереди множество соревнований и побед."
        },
        images: {
            card: getCard('haikyu'),
            banner: getBanner('haikyu'),
            minor: getMinor('haikyu')
        },
        rating: 9.4,
        restriction: 16       
    },
    {
        id: 10,
        name: "Этот глупый свин не понимает мечту девочки-зайки",
        url: "/anime/seishun-buta",
        release: {
            day:3,
            month: 10,
            year: 2018
        },
        seasons: 1,
        series: 13,
        isComing: false,
        movies: 1,
        genres:[
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "драма",
                url: "/genres/drama" 
            }
        ],
        author: "Хадзимэ Камосидой",
        texts: {
            plot: "Импульсивный парень Азусагава Сакута избирательно относится к выбору друзей, которых у него имеется всего лишь двое. Юноша очень любит свою сестрёнку, из-за которой он недавно попал в школьные новости, ведь школьнику пришлось избить хулиганов. Мобильным телефоном парнишка не пользуется, и он даже не знает, что о нём пишут разные гадости. Однажды Азусагава посетил школьную библиотеку, в которой он повстречал сногсшибательную девчонку. Оказалось, что это была Сакураджима Май, и она является настоящей звездой. Вот только девушка была странно одета, что немного обескуражило Сакута. Зайти в библиотеку в костюме зайки мало кто осмелится, а потому этот случай запомнился юноше. На следующий день Азусагава встретил Май в поезде. Девушка поделилась своей проблемой со смышлёным и симпатичным парнем. Дело в том, что Сакураджиме надоела популярность, и она пожелала стать невидимой. Странным образом желание Май исполнилось и теперь известную красавицу не только не замечают люди, но и начинают потихоньку забывать о существовании популярной звезды. Сакута решил помочь бедолаге и теперь ему нужно разобраться во всём происходящем."
        },  
        images: {
            card: getCard('this_pig'),
            banner: getBanner('this_pig'),
            minor: getMinor('this_pig')
        },
        rating: 9.3,
        restriction: 16
    },
    {
        id: 11,
        name: "Моя девушка не только милая ",
        url: "/anime/shiki-san",
        release: {
            day: 10,
            month: 4,
            year: 2022
        },
        seasons: 1,
        series: 12,
        isComing: false,
        genres:[
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "романтика",
                url: "/genres/romance"
            }
        ],

        author: "Кэйго Маки",
        texts: {
            plot: "Идзуми и Сикимори — типичная влюблённая парочка из старшей школы. Но когда Идзуми попадает в неприятности, Сикимори преображается в очень крутую героиню, заставляющая всех вокруг восхищаться ею."
        },
        images: {
            card: getCard('my_girlfriend'),
            banner: getBanner('my_girlfriend'),
            minor: getMinor('my_girlfriend')
        },
        rating: 7.7,
        restriction: 16
    },
    {
        id: 12,
        name: "Драгонболл",
        url: "/anime/dragonball",
        release: {
            day: 20,
            month: 6,
            year: 1986
        },
        seasons: 5,
        series: 798,
        isComing: false,
        movies: 16,
        genres: [
            {
                name: "боевик",
                url: "/genres/action"
            },
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "приключение",
                url: "/genres/adventure"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Акира Торияма",
        texts: {
            plot: "Главный герой произведения, мальчик с обезьяньим хвостом по имени Сон Гоку (японское чтение имени «Сунь Укун»), учится боевым искусствам и изучает мир в поисках семи мистических предметов, которые известны как «жемчуг дракона». По легенде, они исполняют любое желание, если собрать их вместе. Сначала он встретил городскую девочку-подростка, Бульму, которая искала жемчуг дракона, чтобы найти себе парня. К ним в путь присоединились человек-свинья Улонг, умеющий превращаться в любые вещи, и пустынный бандит Ямча, страдающий гинофобией. Также в пути Гоку повстречал своего будущего учителя Мутэна Роши, мастера боевых искусств, который любит читать порно-журналы, Демона Князь-Быка (Гьюмао) и его дочь Чи-Чи, на которой Гоку по глупости хотел жениться, думая что свадьба — это прием пищи. В первом томе манги злодеем был глупый император Пилаф, который хотел править миром."
        },
        images: {
            card: getCard('dragonball'),
            banner: getBanner('dragonball'),
            minor: getMinor('dragonball')
        },
        rating: 9.1,
        restriction: 16
    },
    {
        id: 13,
        name: "Тетрадь смерти",
        url: "/anime/death-note",
        release: {
            day: 4,
            month: 10,
            year: 2006
        },
        seasons: 1,
        series: 37,
        isComing: false,
        genres: [
        {
            name: "фэнтези",
            url: "/genres/fantasy"
        }
        ],
        author: "Нисио Исин",
        texts: {
            plot: "Главный герой аниме, Лайт Ягами, является лучшим школьником Японии и сыном полицейского. Однажды богу смерти по имени Рюк стало скучно, поэтому он решил бросить одну из своих тетрадей смерти в мир людей. По дороге из школы Лайт находит лежащую на земле чёрную тетрадь и решает проверить её работоспособность. Придя домой, он в соответствии с правилами вписал в тетрадь имя преступника, которого в то время показывали по телевидению. На удивление Лайта, преступник действительно умер от сердечного приступа через сорок секунд. Удостоверившись в работоспособности тетради смерти, он решает построить новый мир, где будут жить только добрые и ответственные люди, лишая жизни всех преступников, о которых упоминают средства массовой информации[4]. Через некоторое время Рюк является Лайту. Он рассказывает, что Лайт получил тетрадь по чистой случайности, так как Рюк отправил её в мир людей из скуки, и теперь он надеется, что Лайт развлечёт его, но не обещает помогать, по большей части оставаясь лишь сторонним наблюдателем. Общественность дала Лайту прозвище «Кира» (яп. キラ с англ. — «Killer»)[4]. Заметив сверхъестественную тенденцию смерти преступников от сердечных приступов, происходящим начинает интересоваться японская полиция, а также Интерпол, помощь которому предлагает гениальный детектив под псевдонимом L[5]. С этого момента начинается битва двух умов — лучшего ученика Японии с одной стороны и лучшего детектива — с другой. Несмотря на успехи L в качестве детектива, его личность всегда оставалась тайной для общественности и других детективов. Однако при расследовании «дела Киры» он впервые показал себя, контактируя с полицейскими, входящими в группу по поимке Лайта[6]. Лайт не может совершать ошибки, ведь если его поймают, он не сможет вершить своё правосудие и получит смертный приговор. Его оппонент тоже не может сделать ни одной ошибки, потому что в противном случае Кира убьёт его. В это противостояние вмешиваются сверхъестественные силы в лице богов смерти, а также другие последователи Киры и сторонники L."
        },
        images: {
            card: getCard('death_note'),
            banner: getBanner('death_note'),
            minor: getMinor('death_note')
        },
        rating: 9.2,
        restriction: 18
    },
    {
        id: 14,
        name: "Ванпанчмен",
        url: "/anime/OnePunchMan",
        release: {
            day: 5,
            month: 10,
            year: 2015
        },
        seasons: 2, 
        series: 24,
        isComing: false,
        genres: [
         {
            name: "боевик",
            url: "/genres/action"
         },
         {
            name: "комедия",
            url: "/genres/comedy",
         },
         {
            name: "фэнтези",
            url: "/genres/fantasy"
         }
        ],
        author: "ONE",
        texts: {
            plot: "На неназванной планете бушуют монстры, для борьбы с которыми была создана Ассоциация Героев (англ. Hero Association). В ней каждый из её членов ранжируется от класса «C» до класса «S». Класс героя зависит от его репутации и способностей.Главный герой — Сайтама[⇨], совершающий героические поступки ради собственного развлечения. Он с детства мечтал стать супергероем. Повзрослев и впервые сразившись с монстром, он начал свои тренировки, которые, по его словам, довели его до того, что ныне он может одолеть любого соперника одним ударом. Несмотря на свои подвиги, Сайтама не афишировал их и долгое время оставался неизвестным обществу. Обретя в качестве ученика юного киборга Геноса[⇨], Сайтама узнаёт от него о Ассоциации Героев и вступает в неё, пройдя с рекордами все физические испытания, но завалив письменную часть, из-за чего попадает в C-класс, а Генос в S-класс. Так получается, что большинство героев, что знакомятся с Сайтамой, смотрят на него «свысока», не веря в то, что он на самом деле он сильнее любого Героя Ассоциации, но те, кто узнают его ближе, начинают его уважать и проситься в его ученики. Постепенно имя Сайтамы обретает некую известность, однако общество по-прежнему отказывается признавать его заслуги и даже подвергает героя критике за уничтоженные в ходе битв городские строения. Несмотря на это, Сайтама продолжил своё участие в Ассоциации героев и был позже зачислен в B-класс. После атаки инопланетян, корабль которых был уничтожен Сайтамой, Ассоциация Героев получила дополнительное финансирование и расширила собственное влияние. Монстры, недовольные усилением Ассоциации Героев, создали собственную Ассоциацию Монстров (англ. Monster Association), которая начала организованную борьбу с героями."
        },
        images: {
            card: getCard('onepunchman'),
            banner: getBanner('onepunchman'),
            minor: getMinor('onepunchman')
        },
        rating: 9.5,
        restriction: 18
    },
    {
        id: 15,
        name: "Я побрился и приютил старшеклассницу",
        url: "/anime/school-student",
        release: {
            day: 5,
            month: 4, 
            year: 2021
        },
        seasons: 1,
        series: 13,
        isComing: false,
        genres: [
                {
                    name: "романтика",
                    url: "/genres/romance"  
                },
                {
                    name: "драма",
                    url: "/genres/drama"
                },
            ],
        author: "Симэсаба",
        texts: {
            plot: "Ёсиду отвергает девушка, в которую он был влюблён пять лет. Возвращаясь пьяным из бара он находит у обочины дороги школьницу... Не успев опомниться, он соглашается её приютить. Так начинается история двадцатишестилетнего служащего и сбежавшей школьницы."
        },
        images: {
            card: getCard('i_shaved'),
            banner: getBanner('i_shaved'),
            minor: getMinor('i_shaved')
        },
        rating: 8.5,
        restriction: 18
    },
    {
        id: 16,
        name: "Боец Баки",
        url: "/anime/bakifighter",
        release: {
            day: 8,
            month: 1,
            year: 2001
        },
        seasons: 5,
        series: 99,
        isComing: false,
        genres: [
                {
                    name: "спорт",
                    url: "/genres/sport"
                },
                {
                    name: "боевик",
                    url: "/genres/action"
                },
            ],
            author: "Кэйсукэ Итагаки",
        texts: {
            plot: "В мире боевых искусств существует легендарный титул Король ринга и он принадлежит безжалостному бойцу по имени Юдзиро Ханма. Мужчина всю жизнь посвятил тренировкам, а потому он стал обладателем нечеловеческой силы. Юдзиро является сильнейшим бойцом на планете, и представители разных школ боевых искусств шарахаются безжалостного убийцу. У Короля ринга есть сын, которого зовут Баки и ему недавно исполнилось тринадцать лет. Когда Баки был малышом, он стал свидетелем унижения собственной матери, которая пострадала от руки безжалостного папаши. Юноша поклялся, что отомстит кровожадному отцу и для этого ему пришлось тренироваться с пелёнок. В свои тринадцать лет подросток способен в одиночку перебить больше тридцати человек и при этом остаться в живых. Вот только такие результаты школьника не устраивают, ведь он хочет попасть на всемирный турнир, где будут участвовать лучшие мастера со всей планеты, а также заклятый враг Баки. Впереди парня ждут сложные тренировки, а также и опасные схватки с умелыми противниками. Мальчишка готов не только идти до конца, но и положить на кон собственную жизнь, ведь он обязан выполнить обещание, данное матери.Демонстрацию уникальных боевых стилей, кровавые схватки и смертельные поединки придётся увидеть зрители аниме Grappler Baki. Вскоре юноше улыбнётся фортуна, и он попадёт на великий турнир, на котором ему повстречаются превосходные и достойные бойцы со всего мира."
        },
        images: {
            card: getCard('baki'),
            banner: getBanner('baki'),
            minor: getMinor('baki')
        },
        rating: 8.8,
        restriction: 16
    },
]

module.exports = animesOne