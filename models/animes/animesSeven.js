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

const animesSeven = [
   
    {
        id: 96,
        name: " Задержи этот звук!", 
        url: "/anime/kono-oto-tomare",
        release: {
            day: 7,
            month: 4,
            year: 2019,
        },
        seasons: 1,
        series: 26,
        isComing: false,
        movies: false,
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
        author: "Амю Сакура",
        texts: {
            plot: "Что вы знаете о музыкальном инструменте кото? Ничего? Современные японские школьники проводят досуг, играя на компьютере или в смартфоне, а потому они также ничего не слышали о кото. Такэзо Курата познакомился с музыкальным инструментом в школе. Юноша и не подозревал о его существовании и только после игры на нём понял, что ничего прекрасней не слышал. Чарующие звуки понравились мальчишке, и они наполнили его сердце счастьем. Курата решил поделиться радостью с одноклассниками, и вскоре он создал музыкальный кружок. Вот только сверстники не проявляли интерес к новому клубу, а местные хулиганы вовсе хотели отобрать помещение. Знакомство с Чика Кудо было предначертано судьбой, и встреча школьников стала началом процветания музыкального кружка." 
        },
        images:{
            card: getCard('hold_that_sound'),
            banner: getBanner('hold_that_sound'),
            minor: getMinor('hold_that_sound')
        },
        rating: 9.1,
        restriction: 16,
    },
    {
        id: 97,
        name: "Власть книжного червя", 
        url: "/anime/honzuki",
        release: {
            day: 3,
            month: 10,
            year: 2019,
        },
        seasons: 3,
        series: 38,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            },
        ],
        author: "Мия Кадзуки",
        texts: {
            plot: "Всю жизнь Мота мечтала стать библиотекарем, ведь она очень любит читать разную литературу. Много времени понадобилось девчонке, чтобы добиться желаемого и наконец-то её мечта сбылась. Мота прошла собеседование в известную библиотеку, где получила долгожданную должность. Ежедневно девчонка читала книги и всегда относилась к ним с уважением. Одного дня милая красавица решила навести порядки, и с ней произошёл несчастный случай. Одна из книжных полок была перегружена, а потому она попросту упала на девушку. В этот момент Мота поняла, что это неизбежный конец, но она успела загадать одно желание. Судьба смиловалась над смышлёной девчонкой, и она даровала ей новую жизнь. После перерождения бедолага оказалась в другом мире, где её звали Майн. У милашки поменялось не только имя, но и появилась новая семья. Отец Майн был обычным солдатом, который защищает мирных граждан от нападок злодеев. В этом месте существует малое количество книг и это очень испугало красавицу. Вскоре в жизни девочки появился незнакомец, который подарил ей необычный артефакт. После неожиданного знакомства Майн стала не только единственным библиотекарем в городе, но и обладательницей мистических сил." 
        },
        images:{
            card: getCard('the_power_of_the_bookworm'),
            banner: getBanner('the_power_of_the_bookworm'),
            minor: getMinor('the_power_of_the_bookworm')
        },  
        rating: 8.8,
        restriction: 16,
    },
    {
        id: 98,
        name: "Эф - история воспоминаний", 
        url: "/anime/ef",
        release: {
            day: 7,
            month: 10,
            year: 2007,
        },
        seasons: 2,
        series: 24,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "романтика",
                url: "/genres/romance"
            }
        ],
        author: "Ю Кагами",
        texts: {
            plot: "Издавна на земле существует два одинаковых города Отова в разных полушариях. Тайна появления этих городов известна лишь древним хранителям, которые обладают не только невероятной силой, но и они неподвластны смерти. Северную Отову охраняет Юко, а Химуре принадлежит город в южном полушарии. Об этом никогда ничего не слышал старшеклассник Хиро, который увлекается рисованием манги. Парень живёт обычной жизнью и у него есть верная подруга Кей. Весёлая школьница всегда ревнует друга к другим девушкам, а особенно к симпатичной Мияко. Красавица вечно крутится возле паренька, чем и раздражает недовольную Кей. Мияко также отвлекает от учёбы Хиро и она вечно предлагает школьнику попробовать себя в другом искусстве. Всё это происходит в северном полушарии, а вот в Южном живёт Рэндзи, который недавно познакомился с удивительной девушкой по имени Тихиро. Она имеет симпатичную внешность, но при этом носит странную повязку на глазу. Однажды девчонка попала в аварию, и теперь она способна запомнить лишь тринадцать часов из своей жизни. Рэндзи не хочет оставлять подругу в беде, а потому обращается к Химуре, но тот не в силах помочь бедолаге. Необычным образом судьбы двух парней из разных полушарий вскоре переплетутся и лишь они смогут помочь друг другу в возникших проблемах." 
        },
        images:{
            card: getCard('ef_a_history_of_memories'),
            banner: getBanner('ef_a_history_of_memories'),
            minor: getMinor('ef_a_history_of_memories')
        },
        rating: 7.9,
        restriction: 16,
    },
    {
        id: 99,
        name: "Хроника крыльев ", 
        url: "/anime/tsubasa-chronicle",
        release: {
            day: 9,
            month: 4,
            year: 2005,
        },
        seasons: 2,
        series: 52,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "романтика",
                url: "/genres/romance"
            },
            {
                name: "боевик",
                url: "/genres/action"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "CLAMP",
        texts: {
            plot: "В стране Клоу правит принцесса Сакура, которая всегда была любознательной девчонкой. Однажды девушка познакомилась с молодым археологом Шаораном, который всю жизнь мечтал продолжить работу своего отца. Ежедневно парень проводит время на руинах и вскоре ему удаётся отыскать необычное строение в форме крыльев. Спустя несколько лет изучения странного артефакта не дали никаких конкретных результатов, но однажды произошло нечто невообразимое. Одного дня произошло высвобождение древней силы и у Сакуры появились белоснежные крылья на спине. В один миг пёрышки из роскошных крыльев разлетелись, и оказалось, что они являются хранилищем воспоминаний принцессы. Юный археолог давно любил Сакуру, а потому решил ценой своих воспоминаний отыскать все перья, которые разбросаны в отдалённых измерениях. Вначале Шаоран отправился к ведьме Юко, и она наградила паренька способностью путешествовать между измерениями. После освоения новых навыков археолог обзавёлся новыми друзьями. В компании Шаорана появилась Фай и искусный ниндзя Куроганэ. Юноша вместе с друзьями отправился в опасную авантюру на поиски воспоминаний возлюбленной принцессы." 
        },
        images:{
            card: getCard('chronicle_of_wings'),
            banner: getBanner('chronicle_of_wings'),
            minor: getMinor('chronicle_of_wings')
        },
        rating: 7.7,
        restriction: 18,
    },
    {
        id: 100,
        name: "Боевой дворецкий Хаятэ!", 
        url: "/anime/hayate-gotoku",
        release: {
            day: 1,
            month: 4,
            year: 2007,
        },
        seasons: 4,
        series: 101,
        isComing: false,
        movies: 1,
        genres: [
            {
                name: "комедия",
                url: "/genres/comedy",
            },
            {
                name: "боевик",
                url: "/genres/action"
            },
            {
                name: "драма",
                url: "/genres/drama"
            }
        ],
        author: "Кэндзиро Хата",
        texts: {
            plot: "Смышлёному парню Хаяте очень не повезло в жизни, ведь его родители настоящие транжиры и просто бездарные люди. В свои годы мальчишке приходится учиться, а также по вечерам ходить на работу, чтобы заработать на пропитание и оплату квартиры. Родители иногда воруют деньги у сына, чтобы прогуливать их или проигрывать в казино. Однажды бестолковые родители влезли в очень большие долги, и теперь их преследует грозная мафия. Отец вместе с матерью решил бросить сынишку в руки мафиози, а сами скрылись в неизвестном направлении. В тот вечер Хаяте вернулся домой и увидел расписку, в которой была указана заоблачная сумма, и он был шокирован поведением отца. В этот момент в квартиру ворвались члены преступной группировки, и школьнику пришлось выпрыгнуть с окна. Высота была большой, но смелый парень выжил и направился, куда глаза глядят. По дороге он повстречал симпатичную девчонку, которую хотели обидеть злодеи и юноша вступился за бедолагу. После этого Наги предложила Хаяте стать её дворецким и пообещала ему погасить все долги мафии. У парня не было других вариантов, и он согласился. Вот только бедолага не знал, что его новая хозяйка противная, наглая и избалованная девчонка, которая владеет богатствами семьи. С этих пор начинается нелёгкая жизнь боевого дворецкого в доме девчонки с непростым характером." 
        },
        images:{
            card: getCard("hayate's_battle_butler!"),
            banner: getBanner("hayate's_battle_butler!"),
            minor: getMinor("hayate's_battle_butler!")
        },
        rating: 7.5,
        restriction: 16,
    },
    {
        id: 101,
        name: "Би: Начало", 
        url: "/anime/b-the-beginning",
        release: {
            day: 2,
            month: 3,
            year: 2018,
        },
        seasons: 2,
        series: 18,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "боевик",
                url: "/genres/action"
            },
        ],
        author: "Кадзуто Накадзава",
        texts: {
            plot: "Развитие науки и технологии дошло до своего предела, а потому учёные задумались над созданием совершенно нового вида человека. Правительство профинансировало проект, и он был успешно закончен, но технологией заинтересовалась преступная организация. Намерение изменить мир к лучшему стало настоящим провалом и за долгие восемь лет специальные подразделения не смогли найти преступников, которые украли все данные. За это время была создана Королевская Служба Расследований, где служат непревзойдённые следователи, которые прошли тяжёлые тренировки. Недавно в КСР появился мастер своего дела Кита Казума. Мужчина обладает уникальным талантом, а также имеет высокий уровень интеллекта. Во всём следователю помогает Коку, которая не менее опытна в нестандартных преступлениях. Ребят заинтересовали жуткие убийства, и они имеют схожий почерк. Некий загадочный Киллер Би убивает своих жертв клинком и вырезает собственные инициалы на теле убитых девушек. Количество жертв давно перевалило за пятнадцать человек, а потому Кадзума решает взяться за это загадочное дело. Проблема в том, что маньяк каким-то образом связан с украденными технологиями восемь лет назад, и он не делает ошибок, а также не оставляет улик." 
        },
        images:{
            card: getCard('b_the_beginning'),
            banner: getBanner('b_the_beginning'),
            minor: getMinor('b_the_beginning')
        },
        rating: 6.9,
        restriction: 18,
    },
    {
        id: 102,
        name: "Василиск", 
        url: "/anime/basilisk",
        release: {
            day: 13,
            month: 4,
            year: 2005,
        },
        seasons: 2,
        series: 48,
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
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Футаро Ямада",
        texts: {
            plot: "Вражда между двумя древними кланами Кога и Ига длилась несколько веков, но пришло время долгожданного перемирия. Главы кланов заключили мирное соглашение, которое запрещало нападение ниндзя, а также бессмысленные убийства. Мирное время стало причиной знакомства двух потомков кланов Оборо и Генноске, которые часто встречались у водопада. Девушка и парень влюбились друг в друга, но их ждало ужасное испытание. Оказалось, что старый сегун Иэясу Токугава никак не может выбрать наследника среди своих двух внуков. Правитель решил организовать великое состязание, в котором будут участвовать по десять представителей от Кога и Ига. Каждый ниндзя обладает уникальными навыками и смертоносными техниками, а потому бой неизбежно будет закончен смертью одного из участников. Два клана стали представителями внуков, и какой клан победит тот внук имеет право занять место Токугавы. После ужасных известий между Кога и Ига началась новая волна нападений и убийств, ведь никто не хотел проиграть великое сражение, а потому началась охота на сильнейших бойцов." 
        },
        images:{
            card: getCard('basilisk'),
            banner: getBanner('basilisk'),
            minor: getMinor('basilisk')
        },
        rating: 8.3,
        restriction: 18
    },
    {
        id: 103,
        name: "Ты и я", 
        url: "/anime/kimi-to-boku",
        release: {
            day: 4,
            month: 10,
            year: 2011,
        },
        seasons: 2,
        series: 26,
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
            }
        ],
        author: "Камбэ Мамору",
        texts: {
            plot: "История неразлучных друзей началась ещё в то время, когда ребята были маленькими детьми, которые любили баловаться и вместе гулять. Прошли годы и парни стали подростками, которые имеют множество проблем и различных забот. Близнецы Юки и Юта выросли настоящими красавцами, за которыми бегают толпы девчонок. Братья охотно пользуются своей внешностью, а потому они часто ходят на совместные свидания. Вот только у парней совсем разные увлечения. Юта обожает посещать чайные церемонии, на которых можно повстречать симпатичных девушек, а также мило побеседовать с другими людьми. Юки предпочитает проводить время за чтением манги, где ему нравится не только повествование, но и роскошные тянки. Кроме близнецов, в компании присутствует Сюна Мацуоки, а также Канаме Цукахара. Сюна больше времени проводит с Юта, ведь он также любит чайные церемонии. Канаме более серьёзно относится к жизни, а потому юноша занимает пост старосты класса, а также является президентом школьного совета. Друзья живут неподалёку, но видятся очень редко. Всё в жизни подростков тесно переплетено, и они всегда приходят на выручку в трудную минуту." 
        },
        images:{
            card: getCard('you_and_me'),
            banner: getBanner('you_and_me'),
            minor: getMinor('you_and_me')
        },
        rating: 8.4,
        restriction: 16
    },
    {
        id: 107,
        name: "Хак Знак", 
        url: "/anime/hack-sign",
        release: {
            day: 4,
            month: 4,
            year: 2002,
        },
        seasons: 3,
        series: 66,
        isComing: false,
        movies: 2,
        genres: [
            {
                name: "приключение",
                url: "/genres/adventure"
            },
            {
                name: "фэнтези",
                url: "/genres/fantasy"
            }
        ],
        author: "Ариэ Юки",
        texts: {
            plot: "Среди изобилия ролевых игр выделяется лишь одна под названием Мир. Чем больше времени человек проводит в виртуальной реальности, тем быстрей он теряет связь с реальным миром. Обычный школьник Цукаса никогда не злоупотреблял времяпровождением в ролевых играх, но однажды с ним приключилась ужасная вещь. После того как юноша пришёл в сознание, он понял, что попал в онлайн-игру Мир. Вначале школьник не мог вспомнить имени, но вскоре память начала восстанавливаться. Цукаса был шокирован происходящим, а потому он решил не контактировать с другими игроками. Оказалось, что в этом мире нужно сражаться, чтобы выжить, но схватки происходят не только с помощью мечей, но и собственного интеллекта. Смышлёный мальчишка решил разведать территорию и ему на глаза попался вход в странное подземелье, в котором он нашёл таинственный сундук. Находка оказалась достаточно полезной, ведь в ней была мистическая плита, которая умеет разговаривать. Артефакт стал верным спутником Цукасы и он способен помочь герою вернуться домой. Вот только не всё так легко, ведь любая услуга имеет свою цену." 
        },
        images:{
            card: getCard('hack_sign'),
            banner: getBanner('hack_sign'),
            minor: getMinor('hack_sign')
        },
        rating: 7.7,
        restriction: 16,
    },
    {
        id: 108,
        name: "Горизонт среди пустоты ", 
        url: "/anime/kyoukaisenjou",
        release: {
            day: 2,
            month: 10,
            year: 2011,
        },
        seasons: 2,
        series: 26,
        isComing: false,
        movies: false,
        genres: [
            {
                name: "фэнтези",
                url: "/genres/fantasy"  
            },
            {
                name: "боевик",
                url: "/genres/action"
            }
        ],
        author: "Минору Каваками",
        texts: {
            plot: "Люди давно знали, что наступление великой войны неизбежно, а потому они готовились к ней с огромной ответственностью. Во время сражения большая часть планеты была уничтожена, и людям пришлось искать новое место обитания. Попытки освоить враждебные земли закончились неудачей, и правители пошли на отчаянный шаг. Учёным удалось создать машину времени, которая смогла бы отправить великих воителей в прошлое, чтобы переписать историю и спасти человечество. К сожалению, всё пошло не по плану и теперь воинам со сверхъестественными способностями приходится сражаться с божествами и архидемонами. Для подготовки к грядущему апокалипсису и кровавой войне была построена специальная академия, в которой учится Тори Аой. Спасение человечества возложено на безответственного и озабоченного юношу, который обладает невероятным могуществом. Обучением выдающихся студентов занимается инструктор Лили, которая ответственно относится к своей работе и готовит учеников к будущему сражению. В очередной раз Тори опоздал на занятие, и он заявил, что пойдёт в одиночку против божеств для того, чтобы отыскать Горизонт, которая является легендой великой войны."  
        },
        images:{
            card: getCard('the_horizon_in_the_midst_of_emptiness'),
            banner: getBanner('the_horizon_in_the_midst_of_emptiness'),
            minor: getMinor('the_horizon_in_the_midst_of_emptiness')
        },
        rating: 6.8,
        restriction: 16
    },
    {
        id: 109,
        name: " Белый альбом", 
        url: "/anime/white-album",
        release: {
            day: 4,
            month: 1,
            year: 2009,
        },
        seasons: 2,
        series: 36,
        isComing: false,
        movies: false,
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
        author: "Aquaplus",
        texts: {
            plot: "Обычному студенту Тоя Фудзия нелегко живётся с отцом, ведь в семье всегда не хватает денег. Отца не очень заботит финансовое положение семьи, а потому парню приходится трудиться на нескольких работах. По вечерам мальчишка ходит работать в кафе, а днём выделяет время на репетиторство, где зарабатывает скромный гонорар. Недавно Тоя нашёл прибыльную работу, и он уверен, что в его жизни всё наладится. Вот только проблемы возникли в отношениях с его девушкой Юки Морикавой, ведь она решила стать настоящим айдолом. Девчонка заинтересовала своим талантом известную продюсерскую компанию, и теперь она всячески старается уделять больше времени мечте. Нехватка времени на совместное времяпрепровождение может разрушить отношения и именно этого боится Фудзия. Юноша старается зарабатывать деньги, а также уделять больше времени возлюбленной, но всё напрасно. С недавних пор Морикава познакомилась с Риной Огаты, которая давно добилась популярности. Новоиспечённая подруга готова взять под своё крыло Юки, но цена такого покровительства очень велика. Влюблённая парочка должна для себя решить, что же им важнее, ведь именно от этого решения зависит будущее ребят." 
        },
        images:{
            card: getCard('white_album'),
            banner: getBanner('white_album'),
            minor: getMinor('white_album')
        },
        rating: 6.5, 
        restriction: 16
    },
    {
        id: 110,
        name: "Западные ворота парка Икебукуро ", 
        url: "/anime/ikebukuro-west",
        release: {
            day: 6,
            month: 10,
            year: 2020,
        },
        seasons: 1,
        series: 12,
        isComing: false,
        movies: false, 
        genres: [
            {
                name: "драма",
                url: "/genres/drama"
            },
            {
                name: "романтика",
                url: "/genres/romance"
            }
        ],
        author: "Ира Исида",
        texts: {
            plot: "Из всех районов Токио выделяется Икэбукуро Вэст Гэйт Парк, который славится криминальными группировками и различными бандами. В этом месте никогда не бывает спокойно, и каждый день происходят заварушки, но местные жители давно привыкли к разборкам. Макото давно живёт в специфическом районе Икэбукуро и он настоящий лентяй. Парнишка долгое время шастался без работы, а потом набрался долгов и он чуть не загубил свою жизнь. Волею судьбы юноше удалось познакомиться, а позже подружиться с главарём влиятельной хулиганской группировки Джекбойс. Теперь Макото является не только верным другом Кинга, но и его напарником. Частенько к ребятам обращаются за помощью жители района, и этот день стал не исключением. Маленькая девочка пришла просить помощи у бандитов, ведь её маму сбил хулиган и она лежит в больнице. Кинг приказал разобраться с негодниками, но во время операции парнишка обнаружил большую плантацию нового наркотика, который сводит людей с ума. Перед друзьями возникла серьёзная дилемма и множество проблем." 
        },
        images:{
            card: getCard('the_western_gate_of_Ikebukuro_park'),
            banner: getBanner('the_western_gate_of_Ikebukuro_park'),
            minor: getMinor('the_western_gate_of_Ikebukuro_park')
        },
        rating: 6.8,
        restriction: 16
    },
    
]

module.exports = animesSeven