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

const animesThree = [
    {
        id: 33,
        name: "Дьявольские возлюбленные", 
        url: "/anime/lovers",
        release: {
            day: 16,
            month: 9,
            year: 2013,
        },
        seasons: 2,
        series: 24,
        isComing: false,
        genres: [
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            },
        ],
        author: "Фабрика ldea",
        texts: {
            plot: "Старшеклассница Комори Юи всегда мечтала выбраться из своего городка и поступить в другую школу. Вскоре мечта девчонки сбылась, и она отправилась в дом семьи Сакамаки, где её приютили на время обучения. Вот только в первый же день братья Сакамаки её сильно впечатлили, ведь они оказались очень странными людьми. Они всячески пытались потрогать девушку, а также вели себя дерзко и называли её своей невестой. В один из вечеров Комори узнала шокирующую правду. Оказалось, что отец отправил школьницу в особняк семьи Сакамаки не просто так. Однажды мужчина задолжал перед вампирами, и он пообещал, что отдаст им вместо долга свою симпатичную дочку. Такой поворот событий не на шутку испугал Юи, но ей всё же придётся ходить в школу вместе с братьями и жить в их особняке. Холодный и вечно показывающих безразличие Шу встретил девушку, когда она только приехала. После этого появились и другие братья, которые также имели свои особенности. Рейджи был чересчур серьёзным, а вот Аято показался нахальным вампиром. Тихоня с пугающей вежливостью Конато и вовсе наводил ужас. Самоуверенный Райто заговорил о том, что хочет испить крови Комори, но ему не позволил этого сделать Субару, так как он вечно чем-то недоволен. Юи не планировала поселяться и жить среди дерзких вампиров, но ей придётся найти с ними общий язык, а также попытаться избежать зловещих чар." 
        },
        images:{
            card: getCard('devilish_lovers'),
            banner: getBanner('devilish_lovers'),
            minor: getMinor('devilish_lovers')
        },
        rating: 5.1,
        restriction: 18,
    },
    {
        id: 34,
        name: "Мастер меча онлайн", 
        url: "/anime/master-online",
        release: {
            day: 8,
            month: 7,
            year: 2012,
        },
        seasons: 3,
        series: 96,
        isComing: false,
        movies: 2,
        genres: [
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "приключение",
                url: "/genres/adventure"
            }
        ],
        author: "Рэки Кавахара",
        texts: {
            plot: "Представление о видеоиграх в корне изменилось с введением технологии Полного Погружения, повышающей уровень восприятия происходящего в игре до максимального и полностью перекрывающей связь с реальным миром. Данная технология применяется для создания революционной в жанре VRMMORPG игры под названием «Мастера Меча Онлайн», которая соответствует всем стандартам многопользовательских ролевых игр с одной лишь разницей в том, что игрок ощущает себя своим персонажем. Ажиотаж вокруг игры растёт столь стремительно, что на старте к серверу подключается великое множество человек. Но тут и открывается страшная тайна, скрывавшаяся за многообещающим проектом: выйти из игры невозможно, а при разрыве соединения путём избавления от шлема виртуальной реальности игрок умрёт. Единственным способом спастись создатель игры, придумавший столь хитроумную ловушку, называет полное прохождение своей VRMMORPG. В числе оказавшихся в западне виртуального пространства оказываются Кирито и Асуна, которым предстоит покорить цифровой мир и пройти испытание чувствами." 
        },
        images:{
            card: getCard('sword_art_online'),
            banner: getBanner('sword_art_online'),
            minor: getMinor('sword_art_online')
        },
        rating: 7.3,
        restriction: 16,
    },
    {
        id: 35,
        name: "Линия Дьявола", 
        url: "/anime/line",
        release: {
            day: 7,
            month: 4,
            year: 2018,
        },
        seasons: 1,
        series: 12,
        isComing: false,
        genres: [
            {
                name: "боевик",
                url: "/genres/action"
            },
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Рё Ханада",
        texts: {
            plot: "Цукаса Тайра – очаровательная девушка, которая услышала от своей приятельницы пугающий рассказ о вампирских кланах. Она даже не подозревала, что страшная история – это не плод разбушевавшейся фантазии, а настоящая реальность. Убедиться в этом главная героиня смогла, когда произошел неожиданный случай. Однажды близкий друг Акимура прильнул устами к шее барышни, но внезапно загадочный незнакомец нарушил воцарившуюся идиллию и заявил, что парнишка виноват в гибели трех дамочек. Так девушка выяснила, что её товарищ является вампиром, который ловко маскировался и прекрасно существовал в человеческом обществе." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 6.4,
        restriction: 18,
    },
    {
        id: 36,
        name: "В лес, где мерцают светлячки", 
        url: "/anime/fireflies",
        release: {
            day: 17,
            month: 9,
            year: 2011,
        },
        seasons: 1,
        series: 1,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "драма",
                url: "/genres/drama"
            }
        ],
        author: "Юки Мидорикава",
        texts: {
            plot: "Хотару Такэгава - маленькая девочка, живущая в большом городе Токио. Каждое лето она приезжает к дяде в деревню, чтобы отдохнуть от сигналов машин, широких улиц и шумных торговых центров. В шесть лет она заблудилась в местном лесу, и выбраться ей помог молодой человек в лисьей маске. Его зовут Гин, и ему нельзя касаться смертных, потому что на нем лежит страшное заклинание, и если нарушить его - парень исчезнет. Девочка верит ему, и вскоре они вместе находят ту часть леса, что недоступна людям, ведь именно там творятся чудеса" 
        },
        images:{
            card: getCard('into_theforest_where_the_firefiles_twinkle'),
            banner: getBanner('into_theforest_where_the_firefiles_twinkle'),
            minor: getMinor('into_theforest_where_the_firefiles_twinkle')
        },
        rating: 8.2,
        restriction: 16,
    },
    {
        id: 37,
        name: "Я хочу съесть твою поджелудочную", 
        url: "/anime/pancreas",
        release: {
            day: 1,
            month: 9,
            year: 2018,
        },
        seasons: 1,
        series: 1,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "школа",
                url: "/genres/school"
            }
        ],
        author: "Сумино Ёру",
        texts: {
            plot: "Одним прекрасным днём ученик старшей школы находит чей-то личный дневник, подписанный как «Дневник Болезни». Вскоре выясняется, что дневник этот принадлежит Сакуре Ямаучи, однокласснице главного героя. Прочтя его, Харуки узнаёт, что девушка страдает смертельной болезнью — раком поджелудочной железы. Чтобы поддержать её в этой нелёгкой ситуации, юноша решает подружиться с Сакурой, несмотря на их совершенно разные характеры." 
        },
        images:{
            card: getCard('i_want_to_eat_your_pancreas'),
            banner: getBanner('i_want_to_eat_your_pancreas'),
            minor: getMinor('i_want_to_eat_your_pancreas')
        },
        rating: 7.8,
        restriction: 16

    },
    {
        id: 38,
        name: "Скейт: бесконечность", 
        url: "/anime/lnfinity",
        release: {
            day: 10,
            month: 1,
            year: 2021,
        },
        seasons: 1,
        series: 12,
        isComing: false,
        genres: [
            {
                name: "спорт",
                url: "/genres/sport"
            },
            {
                name: "комедия",
                url: "/genres/comedy",
            }
        ],
        author: "Хироко Уцуми",
        texts: {
            plot: "В шестилетнем возрасте Рэки был потрясён увиденным супергероем, а потому он решил, что в будущем станет таким сверхчеловеком. Вот только в подростковом возрасте мальчишка отрёкся от своей мечты и профессионально занялся ездой на скейте. Вскоре парнишка понял, что обычная езда не приносит ему удовольствия. Однажды Рэки попробовал внести в свою жизнь экстрим и после этого он подсел на это безумное чувство. Недавно один из лучших скейтеров узнал об опасном состязании, которое проходит в полуразрушенной шахте. Первый заезд парень проиграл, ведь он не ожидал, что соперник будет использовать запрещённые приёмы, а именно подручные предметы для победы. На следующий день юноша узнал, что в его классе появился новый ученик, которого зовут Ланга. Ребята быстро сдружились, и мастер езды на скейте предложил новоиспечённому другу прийти посмотреть на его очередное выступление в опасном турнире. Вот только вместо Рэки пришлось участвовать Ланге, который даже не умел стоять на скейте. Во время заезда зрители заметили, что новенький ездит словно профессионал. Оказалось, что юноша всю жизнь занимается сноубордом, и этот вид спорта помог выиграть ему первый заезд." 
        },
        images:{
            card: getCard('skate_infinity'),
            banner: getBanner('skate_infinity'),
            minor: getMinor('skate_infinity')
        },
        rating: 7.7,
        restriction: 16,
    },
    {
        id: 39,
        name: "Баскетбол Куроко", 
        url: "/anime/kuroko",
        release: {
            day: 7,
            month: 4,
            year: 2012,
        },
        seasons: 3,
        series: 76,
        isComing: false,
        movies: 4,
        genres: [
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "спорт",
                url: "/genres/sport"
            },
            {
                name: "комедия",
                url: "/genres/comedy",
            }
        ],
        author: "Тадатоси Фудзимаки",
        texts: {
            plot: "Все заядлые баскетболисты прекрасно знают знаменитую школу Тэйко, где есть особенный клуб, прославившийся своими грандиозными победами. Но в определенный момент пятерка выдающихся игроков разошлась по разным сторонам. Только немногие были осведомлены, что в известной команде был шестой участник (фантом), который тоже обладал поразительными способностями, но, к сожалению, оставался в тени более успешных коллег." 
        },
        images:{
            card: getCard('kuroko_basketball'),
            banner: getBanner('kuroko_basketball'),
            minor: getMinor('kuroko_basketball')
        },
        rating: 8.1,
        restriction: 16,
    },
    {
        id: 40,
        name: "Боруто", 
        url: "/anime/boruto",
        release: {
            day: 5,
            month: 4,
            year: 2017,
        },
        seasons: 1,
        series: 281,
        isComing: {
            day: 19,
            month: 2,
            year: 2023,
        },
        movies: 1,
        genres: [
            {
                name: "боевик",
                url: "/genres/action"
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
        author: "Масаси Кисимото",
        texts: {
            plot: "Встречайте новое поколение ниндзя! История Наруто подошла к концу, он исполнил свою мечту и стал Хокаге. Теперь в центре событий его сын по имени Боруто, который избрал для себя совсем иной путь. Однако для начала ему следует завести друзей и таки выпуститься из Академии, чтобы стать настоящим ниндзя. Новая история – наследие «Наруто»!" 
        },
        images:{
            card: getCard('boruto'),
            banner: getBanner('boruto'),
            minor: getMinor('boruto')
        },
        rating: 5.9,
        restriction: 18,
    },
    {
        id: 41,
        name: "Доктор Стоун", 
        url: "/anime/doctor",
        release: {
            day: 5,
            month: 7,
            year: 2019,
        },
        seasons: 2,
        series: 36,
        isComing: {
            day: 5,
            month: 4,
            year: 2023,
        },
        movies: false,
        genres: [
            {
                name: "приключение",
                url: "/genres/adventure"
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
        author: "Риитиро Инагаки",
        texts: {
            plot: "Типичный ученик Тайдзю Оки говорит своему любящему науку другу Сэнку, что он наконец собирается признаться Юдзурихе Огава, в которую он тайно влюблен в течение пяти лет. Встречаясь под деревом на школьной территории, внезапно небо заполнил странный яркий свет. Тайдзю толкает Юдзуриху к дереву, чтобы защитить ее, но свет внезапно окутывает все человечество и каждый человек на Земле превращается в камень. Проходит много тысячелетий и Оки выбирается из каменного плена и начинает исследовать окрестности. Тайдзю находит дерево где вырезано сообщение, которое приводит его к Сэнку, который тоже смог выбраться из каменного плена. Им предстоит выяснить, что это был за свет и почему все люди окаменели." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 8.2,
        restriction: 16,
    },
    {
        id: 42,
        name: "Школа мертвецов", 
        url: "/anime/dead",
        release: {
            day: 5,
            month: 7,
            year: 2010,
        },
        seasons: 1,
        series: 24,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "боевик",
                url: "/genres/action"
            },
            {
                name: "приключение",
                url: "/genres/adventure"
            },
            {
                name: "ужасы",
                url: "/genres/horror"
            },
        ],   
        author: "Дайсукэ Сато",
        texts: {
            plot: "Ужасный вирус, превращающий простых людей в беспощадных зомби, вырывается на свободу. Страшная трагедия постепенно подбирается к частному учебному заведению Фудзими. Только немногим школьникам и преподавателям удается распознать болезнь и вовремя скрыться. Дороги счастливчиков расходятся. Такаси Комуро – семнадцатилетний парнишка, который отчаянно пытается спасти давнюю приятельницу – Рэй Миямото. В определенный момент к ребятам примыкают остальные подростки – лидер клуба кендо по имени Саэко Бусудзима, поклонник оружейной темы Кота Хирано, а также самопровозглашенный специалист Сая Такаги." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 7.5,
        restriction: 18,
    },
    {
        id: 43,
        name: "Очень приятно Бог", 
        url: "/anime/cool-god",
        release: {
            day: 2,
            month: 10,
            year: 2012,
        },
        seasons: 2,
        series: 31,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Судзики Джульетта",
        texts: {
            plot: "Нанами Момозоно семнадцатилетняя девушка, раньше жившая обычной жизнью. Все складывалось довольно неплохо, но произошло то, что ее отец задолжал в карты крупный долг. В результате он решил просто сбежать, оставив собственную дочку одну. К ней в дом пришли неизвестные люди и просто выбросили на улицу. Главная героиня понимает, что ей необходимо срочно отыскать новое жилье. Она решает отправиться в парк и посидеть, чтобы просто подумать над ситуацией. В голове бурлят мысли, но вот она встречает молодого парня по имени Микагэ." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 8.3,
        restriction: 16,
    },
    {
        id: 44,
        name: "Форма голоса", 
        url: "/anime/form",
        release: {
            day: 17,
            month: 9,
            year: 2016,
        },
        seasons: false,
        series: 1,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "школа",
                url: "/genres/school"
            },
            {
                name: "романтика",
                url: "/genres/romance"
            }
        ],
        author: "Оойма, Ёситоки  ",
        texts: {
            plot: "Каждый человек может совершать ошибки, но не все могут это осознать, потом они испытывают стыд. Сюжет данного аниме расскажет историю о мальчике Шоя Ишида и девочки Шоко Нишимия. У девочки с детства были проблемы со слухом, и ей пришлось из-за этого много страдать. Повествование берет начало в школе, с их знакомства, маленькая Шоко переводится к Шоя. Она изначально не нравится большинству, из-за того, что отличалась от других. Тогда он принимает решение испортить ей жизнь и издевается над ней. " 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 8.2,
        restriction: 16,
    },
    {
        id: 45,
        name: "Темный дворецкий", 
        url: "/anime/butler",
        release: {
            day: 2,
            month: 10,
            year: 2008,
        },
        seasons: 3,
        series: 46,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy"
            },
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Яна Тобосо",
        texts: {
            plot: "В начале весны 1889 года, в честь Королевского мандата, известный граф Сиэль Фантомхайв принимает роскошный банкет с участием нескольких непревзойденных членов высшего общества, а также изо всех сил добивающегося признания писателя, сэра Артура Конан Дойла. Однако в самый разгар званого обеда происходит ужасающее убийство, в котором подозревают никого иного, как самого Графа! Непреодолимая буря продолжает бушевать вне усадьбы. Счет убитых увеличивается. Становится очевидно, что спастись просто так не получится. Слуги Фантомхайва и именитые гости должны вместе стремиться разрешить тайну, прежде чем их также настигнет погибель. К сожалению, даже неуязвимый дворецкий Себастьян Михаэлис не застрахован от смертельной участи." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 7.9,
        restriction: 18,
    },
    {
        id: 46,
        name: "Хоримия", 
        url: "/anime/horimiya",
        release: {
            day: 10,
            month: 1,
            year: 2021,
        },
        seasons: false,
        series: 13,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy",
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
        author: "Хиро",
        texts: {
            plot: "У старшеклассницы Кёко Хори, похоже, есть всё, что только можно пожелать, ведь она умница, красавица и любимица всего класса. Однако даже у идеальных на первый взгляд людей бывают секреты, и один такой есть у Хори: девушка страшно боится, что её одноклассники прознают о том, что вне стен школы она превращается в настоящую домохозяйку, на которую вечно пропадающие на работе родители скинули все домашние хлопоты и младшего брата Соту. Однажды на пороге её дома появляется незнакомец, который держит за руку поранившегося Соту… а ещё он знает Хори! Тут же выясняется, что этот парень на самом деле невзрачный одноклассник Хори, Миямура. Что же произойдёт после встречи популярной красавицы и «серой мышки»? Дружба, любовь?.. Встречайте школьную комедию, полную энергии юности!" 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 7.8,
        restriction: 18
    },
    {
        id: 47,
        name: "Магистр дьявольского культа", 
        url: "/anime/master",
        release: {
            day: 9,
            month: 7,
            year: 2018,
        },
        seasons: 3,
        series: 35,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "приключение",
                url: "/genres/adventure"
            },
            {
                name: "боевик",
                url: "/genres/action" 
            },
            {
                name: "комедия",
                url: "/genres/comedy",
            }
        ],
        author: "Мосян Тунсю",
        texts: {
            plot: "Мусюанью ненавидят абсолютно все. Он – внебрачный ребенок, которого окружающие считают безумцем из-за особого увлечения темными ритуалами. В определенный момент, погрузившись в очередной эксперимент, парень вызывает призрака могущественного чародея Вусьена, который вселяется в него. В былые времена маг имел дурную славу и был знаменит своей жестокостью и хладнокровием. Колдун всегда продвигался к поставленной цели, не обращая внимания на возникающие препятствия. Он был готов использовать любые методы, даже если они приводили к смерти родных. Очутившись в теле юноши, злой волшебник обязан исполнить его желание, чтобы получить заветную свободу." 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 8.6,
        restriction: 18,
    },
    {
        id: 48,
        name: "Благословение небожителей ", 
        url: "/anime/blogging",
        release: {
            day: 31,
            month: 10,
            year: 2020,
        },
        seasons: 1,
        series: 12,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "приключение",
                url: "/genres/adventure" 
            },
            {
                name: "драма",
                url: "/genres/drama"
            }
        ],
        author: "Мосян Тунсю",
        texts: {
            plot: "Восемь веков назад Лянь Се был наследным принцем прославленного королевства, его любили простые жители и уважали равные по положению. Так что неудивительно, что он, будучи ещё совсем юным, взошёл на Небеса и занял место среди бессмертных небожителей. Однако надолго Лянь Се там не задержался, он глазом не успел моргнуть, как его изгнали обратно в мир смертных.И вот спустя восемьсот лет Лянь Се, ставший уже предметом для насмешек, предпринимает очередную (уже третью по счёту) попытку вернуться на Небеса. Вновь став богом, Лянь Се получает первое задание, выполняя которое, сталкивается с таинственным демоном, имеющим к нему совсем не праздный интерес. Что нужно этому демону от Лянь Се? И удастся ли тому не опростоволоситься и остаться наконец на Небесах?" 
        },
        images:{
            card: getCard(''),
            banner: getBanner(''),
            minor: getMinor('')
        },
        rating: 8.5,
        restriction: 18,
    },
]

module.exports = animesThree