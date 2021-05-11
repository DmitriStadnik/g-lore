import {DataObj} from "../DataObj";
import {compareObjectsByTitle, transliterateRus} from "../../utils";
import dristen from "../images/dristen.jpg";

const World: Array<DataObj> = [
  {
    title: 'Мир',
    children: [
      {
        title: 'Аналлон',
        isMainArticle: true,
        content: [
          `Аналлон - имя, данное Дристцом миру, который был создан в результате 
            <a href="/${transliterateRus('Мир')}/${transliterateRus('Великий Рофл')}">Великого Рофла</a>.`,
          `<h6>Строение</h6>`,
          `Аналлон - плоский мир, который находится в карманном измерении в форме сферы. Вокруг диска вращаются солнце и луна. Присутствуют климатические зоны.
          Земля наполнена <a href="/${transliterateRus('Мир')}/${transliterateRus('Ископаемые говны')}">ископаемыми говнами</a>.`,
          `<h6>Светлая Сторона</h6>`,
          `Светлой стороной называют сторону диска, которая населена людьми. Она наполнена мировым океаном, в котором расположены три континента и множество
          островов. На западе расположен самый большой континент - Сракотан (коковцы называют его Гейропа). 
          На востоке - Джене-Рико. Южнее Сракотана - континент без официального названия, который называют либо Нигермания в честь находящейся там страны,
          или Ебеня. Океан на границах диска стекает на Темную Сторону.`,
          `<h6>Темная сторона Аналлона</h6>`,
          `Про Темную Сторону Аналлона практически ничего не известно. Ходят теории, что там обитают потусторонние сучности. Никто до сих пор даже не пытался
          попасть на Темную Сторону.`,
          `<h6>Технологическое развитие</h6>`,
          `Государства, расположенные на Сракотане, развиваются особым образом, обусловленным объемом знаний, полученных от Дристца в древности и доступом к разным
          формам магической трансмутации калорита. К моменту Говнины Ссаной, в Дристваре существовали такие технологии, как радио, телевидение, стрелковое оружие,
          начинали появляться первые автомобили и велись исследования в сфере авиации. Война с коковскими революционерами ускорила развитие технологий для военного
          применения. После основания КСО, кетайцы стали активно участвовать в научно-техническом развитии континента. Всратые технологии работают за счет магии и веры в то,
          что они будут работать.`,
          `Дженерики, которым неподвластна каломантия, исследовали мир самостоятельно, совершили множество научных открытий, в числе которых алхимия. Так как они
          трансмутируют калорит с помощью науки, а не магии, они строят заводы и запускают товары в серийное производство. Их технологии намного более продвинутые,
          чем на Сракотане, опережая всратую науку на несколько десятков лет.`,
          `О состоянии науки в Нигермании ничего не известно. Те, кто приближался к границам Нигермании и вернулся живым, заявляли о наличии у пограничников стрелкового
          оружия.`,
        ]
      },
      {
        title: 'Древняя история мира',
        content: [
          `Здесь приводится легенда о том, как был создан мир и появились первые люди.`,
          `<h6>Дристоц</h6>`,
          `Легенда гласит, что жил некогда обычный семьянин, которого звали <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристоц</a>. 
          Он жил спокойной жизнью со своей женой <a href="/${transliterateRus('Боги')}/${transliterateRus('Аманда')}">Амандой</a> и дочерью <a href="/${transliterateRus('Боги')}/${transliterateRus('Принцесса Пидарас')}">Принцессой Пидарас</a>. 
          Он регулярно проводил время со своими друзьями <a href="/${transliterateRus('Боги')}/${transliterateRus('Вездессущ')}">Вездессущем</a> и <a href="/${transliterateRus('Боги')}/${transliterateRus('Хер Мемус Н\'Кок')}">Хер Мемусом Н'Коком</a>. 
          В целом, он мало отличался от других, но у него была одна яркая черта - он просто обожал шутки про говно. 
          Он шутил про говно постоянно. В любой ситуации он мог пошутить про говно и смеяться от этого так, 
          что его друзья боялись что он задохнется. Его окружению не всегда нравились его шутки, но они постепенно с этим смирились.`,
          `<h6>Великий Рофл</h6>`,
          `Как-то раз Дристоц в порыве ебанутости сотворил Абсолютную Шутку про Говно. 
          И стоило ему озвучить её своим друзьям, как произошел <a href="/${transliterateRus('Мир')}/${transliterateRus('Великий Рофл')}">Великий Рофл</a>, который породил целый новый мир. 
          Дристоц не упустил открывшиеся перед ним возможности и перспективы и с головой погрузился в работу над этим неведомым миром, который он назвал <a href="/${transliterateRus('Мир')}/${transliterateRus('Аналлон')}">Анналлон</a>.`,
          `Его первой целью было создать людей по своему образу и подобию. 
          Он трудился много дней и ночей, чтоб создать первых людей. Увы, его первая попытка обернулась полным провалом. 
          Люди, которых он создал, были абсолютно нормальными. Всего лишь услышав одну шутку про говно, 
          они умирали от сердечного приступа прямо на месте. Дристоц разочаровался в своем творении, но не сдался.`,
          `Оставив их на произвол судьбы, он переместился на другой континент и начал снова. 
          И в этот раз он добился своего. Он создал идеальных, по его мнению, людей, 
          которые отличались высоким уровнем всратости. Дристоц стал делиться с этими первобытными людьми своей всратостью, 
          и попутно срал во все стороны концептами. Когда он кричал "ВСЕТЕНГ", 
          мир наполнялся неведомыми тварями и невиданными ранее явлениями. 
          Первобытные люди поклонялись Дристцу и его семье, и чтоб выразить вечную благодарность Дристцу 
          за свое существование и говно, которым он их обмазал, они основали <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Дристиянцтво')}">Церковь Дристиянцтва</a> - религию, посвященную Дристцу.`,
          `<h6>Расселение народов</h6>`,
          `Племена первобытных людей, ведомые Дристцом, быстро расселились по всему континенту и основали много поселений. 
          Таким образом было основано первое дристиянцкое королевство людей - <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">Дриствар</a>. 
          Оно охватывало практически весь континент, кроме его самых восточных регионов. 
          Переселенцы, которые отправились на восток, попали под влияние потоков виабушной энергии, назвали себя кетайцами
          и основали несколько отдельных от Дриствара <a href="/${transliterateRus('КСО')}/${transliterateRus('Кетайское Сообщество Обиженных')}">Кетайских Провинций</a>. 
          Небольшая группа людей отправилась на юг и обнаружила существование континента на юге. Они основали поселение в одном из оазисов пустынного
          континента, и в ходе изучения окрестностей обнаружили разнообразные наркотические вещества. 
          Не желая делиться с остальными своей находкой, они решили оборвать контакты с Дристваром, и о новом поселении не было известно,
          пока одна из экспедиций на юг не обнаружила существование <a href="/${transliterateRus('Нигермания')}/${transliterateRus('Нигермания')}">Нигермании</a>.`,
          `Дристоц, оказавшийся в среде своих последователей, которые каждый день молили его о еще одной шутке про говно 
          и радовались новым ебнутым концептам, которые он высрал, 
          перестал сдерживать свое влечение к шуткам про говно и немного подзабил на семью. 
          Аманда уже не могла терпеть, потому она собрала верных последовательниц и увела их на малозаселенный юго-восток континента, 
          где основала женское государство <a href="/${transliterateRus('Пиздраиль')}/${transliterateRus('Пиздраиль')}">Пиздраиль</a>. 
          Принцесса Пидарас отказалась уходить с матерью и осталась в Дристваре в надежде найти себе мужика.`,
          `Дристоц тяжело переживал расставание с женой, и к тому моменту уже немного устал, 
          потому он решил создать себе обитель в этом мире, где он мог бы сидеть на диване с пивком и смотреть телек - 
          Гробницу Ануса. Он спрятал вход от людей и уединился в своей обители, 
          изредка отзываясь на молитвы и высирая новые концепты.`,
          `<h6>Потусторонние сучности</h6>`,
          `Друзья Дристца затаили на него обиду за то, что тот поделился властью в новом мире с семьей, но не с ними. 
          Потому они нашли темные лазейки в этот мир и начали влиять на него из тени, 
          совращая людей и готовя свои темные планы по разрушению власти Дристца над миром.`
        ]
      },
      {
        title: 'Великий Рофл',
        content: [
          `Великий Рофл - результат озвучивания <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристцом</a> Абсолютной Шутки про Говно. Событие, породившее новый мир. 
          Ученые теологи и архуеологи <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">Дриствара</a> с древних времен пытаются выяснить ту самую Абсолютную Шутку, которая создала этот мир.`
        ]
      },
      {
        title: 'ХРОШНЯ',
        content: [
          `ХРОШНЯ - деструктивная секта, действующая на территории всех континентов известной части мира.`,
          `<h6>Происхождение названия</h6>`,
          `Организация получила своё название в честь одноименной реликвии, которую бережно хранит организация - статуи кошки, 
          собранной из порнографических картинок.`,
          `Ничего достоверно не известно о происхождении слова "ХРОШНЯ". 
          Вероятные члены организации утверждают, что "ХРОШНЯ" - мистическим образом первое, что 
          приходит в голову каждому кто видит священную статую кошки.`,
          `<h6>Члены ХРОШНИ и их деятельность</h6>`,
          `Хотя большинство сомневаются в реальности ХРОШНИ, некоторые ученые умы в разное время заявляли, 
          что располагают достаточным количеством свидетельств, чтобы быть уверенными в реальности этой организации. 
          За всю историю ХРОШНЯ стала причиной бесчисленных спекуляций, параноидальных теорий заговора и неконтролируемой взрывной диареи.`,
          `Известно, что <a href="/${transliterateRus('Дриствар')}/${transliterateRus('У.Е.Бан')}">У.Е.Бан</a> долгое время в своей карьере вел длительные 
          дискуссии в научном сообществе насчет достоверности существования ХРОШНИ, заявляя, что пересекался с данной организацией, и описывал 
          свои впечатления, как резко негативные. Найденная в его последнем пристанище "Великая Книга Ебаных Обид" частично описывала его
          недовольство деятельностью организации, но ни одно из описанных в ней событий подтвердить не удалось.`,
          `В научных кругах ходило мнение, что <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Е.Б.Анат')}">Е.Б.Анат</a> 
          и <a href="/${transliterateRus('Дриствар')}/${transliterateRus('У.Е.Бан')}">У.Е.Бан</a> когда-то являлись (или являются) 
          одними из ключевых членов ХРОШНИ, однако достоверных подтверждений этому не найдено.`,
          `Кроме всего прочего, некоторые специалисты считают, что у ХРОШНИ имеется секретное подразделение, именуемое ГРОБШНЕЙ, 
          которое занимается теневыми операциями.`,
          `На протяжении долгих лет спецслужбы Дриствара пытаются доказать связь компании НЕСРЕ с ХРОШНЕЙ. Таинственная компания НЕСРЕ, 
          выпускающая популярный напиток Кака-Кала (в Коково он называется Кок-А-Кола), умело скрывает следы финансирования и причастности ХРОШНИ
          к управлению. Единственное открытие, которое смогли сделать спецслужбы - что Бепис, являющийся конкурентом Кок-А-Колы, ничем от неё не отличается, 
          и выпускается дочерней компанией НЕСРЕ.`,
          `В составе ХРОШНИ и под её деструктивным влиянием в свое время побывало большинство ключевых фигур мировой истории и политики 
          (хотя многие об этом даже не подозревали). Умело манипулируя неофитами и незаметно обмазывая их калом, ХРОШНЯ направила немало исторических 
          процессов туда, куда её лидеры посчитали нужным (чаще всего нахуй).`,
          `<h6>Легендарные Основатели ХРОШНИ</h6>`,
          `Каноны ХРОШНИ гласят, что трое легендарных основателей ХРОШНИ начали подозревать, 
          что их реальность является не просто плодом воображения небесных сущностей навроде Дристца.
          По их мнению, весь мир - лишь сборник идиотских шуток и концептов за авторством совершенно непостижимых создателей, 
          которые сгенерировали <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристца</a>, шутящего про говно, пока сами шутили про говно.`,
          `Основатели ХРОШНИ, проведя десятки лет в изучении тонких материй, 
          смогли вылупиться из хрупкой скорлупы фальшивой реальности, которую они называли ГОВНОЛОРОМ, а их оболочки, 
          лишившись душ, слились в ту самую статую кошки, собранную из порнокарточек.`,
          `Кроме кошки и бесчисленного количества других реликвий, организация унаследовала
          от своих Легендарных Основателей и их цель - познание мира и выход за его рамки.`,
          `<h6>Олег</h6>`,
          `Где упоминается ХРОШНЯ, там фигурирует и Олег - их таинственный лидер, символ или даже просто собирательный образ, 
          служащий моральным ориентиром. Об Олеге ничего точно не известно, кроме того, что Олег однозначно как-то связан с почюгори. 
          Однако эта связь активно критиковалась У.Е.Баном в одном из его трудов: "Как можно заключать что-либо о глубинной связи столь 
          объемных явлений, нихуя не понимая в их природе и концептуальном образе? Я считал и всегда считаю так: матушка с отцом могли 
          назвать меня Уебаном от рождения, но я с гордостью ношу это имя, тогда как настоящие уебаны, сидящие в кабинетах архуеологии 
          и дристварской теологии, считают, что могут связать два явления только лишь потому, что об обоих они не имеют ни малейшего понятия."`,
          `Вызван ли такой гнев тем, что сам У.Е.Бан прекрасно осведомлен о том, кто такой Олег, и негодует по поводу отсталости своих коллег? 
          Кто знает...`,
        ]
      },
      {
        title: 'Говнина Ссаная',
        content: [
          `Говнина Ссаная - великая битва на изнурение между <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">Дристваром</a> 
          и <a href="/${transliterateRus('Коково')}/${transliterateRus('Королевство Коково')}">коковскими революционерами</a>, в которой проебали ВСЕ.`,
          `<h6>История</h6>`,
          `Данная битва стала кульминацией 3-летней войны, начатой <a href="/${transliterateRus('Коково')}/${transliterateRus('Членин')}">Члениным</a> 
          во имя обращения всех, по его мнению, ложно верующих 
          в <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристца</a>, 
          в истинную <a href="/${transliterateRus('Коково')}/${transliterateRus('Путь Семи Залуп')}">веру в Семь Залуп</a>. 
          Финальное наступление сил Членина по всей линии фронта обосралось и не смогло прорвать укрепления дристварской армии. Началась длительная окопная война.`,
          `<a href="/${transliterateRus('Дриствар')}/${transliterateRus('Дристобород')}">Дристобород</a> не мог позволить себе дальше 
          тратить ресурсы на войну, а Членин, хоть и был в такой же ситуации, максимально скрывал реальное
          положение дел от своих последователей. Двое лидеров провели переговоры и заключили временное перемирие. Территория между государствами была поделена
          по линии фронта, и Дриствар официально признал существование <a href="/${transliterateRus('Коково')}/${transliterateRus('Королевство Коково')}">Коково</a>. 
          Дристобород прокомментировал результат переговоров так: "Наконец они от нас отъебутся, блядь!"`,
          `<h6>Влияние на мир</h6>`,
          `В результате Говнины Ссаной было официально признано существование Королевства Коково. Так как в ходе Восстания Дристоборода сгорела королевская 
          библиотека и все летописи, были утрачены почти все сведения об истории Дриствара, потому был принята новая система летоисчисления с началом в год когда
          случилась Говнина Ссаная. Так как Коково не обладало никакой историей до начала войны, там тоже было принята эта система.`,
          `<h6>Новая система летоисчисления</h6>`,
          `Принято считать года "До Говнины Ссаной" и "После Говнины Ссаной", сокращенно - ДГС и ПГС.`,
        ]
      },
      {
        title: 'Почюгори',
        content: [
          `Невозможно дать краткое (или какое-либо ещё) определение тому, что есть почюгори. В целях краткого ознакомления с почюгори приводятся
           разрозненные факты и свидетельства о почюгори, а так же заметка о почюгори от 
           <a href="/${transliterateRus('Дриствар')}/${transliterateRus('У.Е.Бан')}">У.Е.Бана</a>.`,
          `<h6>Факты о почюгори</h6>`,
          `В некоторых сельских регионах <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">Дриствара</a> 
          на вопрос "какой ты сегодня камень?" принято отвечать почюгори или "красивый", но почюгори считается солиднее.`,
          `Множество жителей Дриствара заявляли что видели почюгори. 
          Ввиду растущего беспокойства было проведено расследование, которое показало, что то был Невероятный Калк.`,
          `В особо редких случаях первым словом ребенка в Дристваре является не "мама", и даже не "дрист", а почюгори.`,
          `Один из южных регионов Дриствара называется <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Почюгория')}">Почюгория</a>. 
          Там обитают дикие почюгорцы.`,
          `Некие очевидцы заявили властям что им являлся почюгори, после чего возник конфликт между двумя сторонами. 
          Одна заявляла что почюгори горячего цвета, а другая что почюгори кислый. Расследование ведётся до сих пор.`,
          `<h6>Мнение У.Е.Бана</h6>`,
          `"Опросив людей, которые заявляли, что наблюдали почюгори, я узнал одну важную подробность - все они находились на приличном расстоянии от
          почюгори, когда оно явилось, а те, кто находился ближе, либо умерли на месте, либо потеряли рассудок. Все выжившие после 
          столкновения с почюгори описывают это явление (существо?) абсолютно разными способами, из чего можно сделать вывод, 
          что почюгори воздействует на все органы чувств живых существ одновременно, перегружая мозг огромным количеством неоднозначных стимулов.`,
          `Предположительно, почюгори является потусторонней сучностью из мира более высокого порядка, чем наш, и мозг живого существа не способен обработать явление
          почюгори, что вызывает потерю рассудка, или, в самом худшем случае, смерть от шока." - У.Е.Бан, "Дриствар. Загадки древнего государства"`,
        ]
      },
      {
        title: 'Анальная цинга',
        content: [
          `Анальная цинга - опасное заболевание, которому подвержены все болотные моряки. Вызывает деструктивные процессы в очке больного, и если вовремя не лечить, 
          пациент вывернется наизнанку через очко и необратимо превратится в дикое исчадие ануса.`,
          `<h6>Лечение</h6>`,
          `Основной способ лечения в <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">Дристваре</a> - обратиться к <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Дристиянцтво')}">дристиянцкому каломанту</a>. Каломантия легко излечивает начальную стадию болезни
          и останавливает деструктивные процессы на более поздних. Если пациент превращается в исчадие ануса, вернуть его к прежнему состоянию невозможно.`,
          `<a href="/${transliterateRus('Дриствар')}/${transliterateRus('Адмирал Красный Анал')}">Адмирал Красный Анал</a> заявляет, что никогда не болел анальной цингой и считает, что это благодаря перчику в очке. Наукой еще не доказано
          влияние перчика в очке на вероятность заболеть анальной цингой.`,
          `На дристварском <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Линкор "Квадратное Очко"')}">линкоре "Квадратное Очко"</a> готовят особую похлебку из неизвестных овощей, которая лечит анальную цингу.`,
        ]
      },
      {
        title: 'Ископаемые говны',
        content: [
          `Калорит (в простонародии - ископаемые говны) - самый широко доступный ресурс в мире.`,
          `<h6>Свойства</h6>`,
          `Универсальный ископаемый ресурс, который опытный каломант может превратить в любой необходимый материал или продукт, и даже в весьма недурную еду.`,
          `<h6>Происхождение</h6>`,
          `Священные писания <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Дристиянцтво')}">Дристиянцтва</a> гласят, 
          что Дристоц поведал древним дристам о мирах, где присутствует бесчисленное множество видов ресурсов, 
          и о трудностях с их поиском и добычей, и потому он даровал миру один единственный ресурс и возможность свободно менять 
          его форму и свойства с помощью каломантии.`,
          `Существует научная гипотеза, что когда земля содрагается, в ее недрах происходит извержение подземных толчков, которые и создают ископаемые говны. 
          К счастью или нет, никто еще не опускался настолько глубоко, чтобы проверить это.`,
          `<h6>Вне Дриствара</h6>`,
          `Так как в <a href="/${transliterateRus('Пиздраиль')}/${transliterateRus('Пиздраиль')}">Пиздраиле</a> поклоняются Аманде и Принцессе Пидарас, 
          жрицам культа Аманды доступна базовая каломантия. В Пиздраиле калорит называют сквиртонитом.`,
          `Последователи <a href="/${transliterateRus('Коково')}/${transliterateRus('Путь Семи Залуп')}">Пути Семи Залуп</a> способны обрабатывать калорит, 
          извращая его чуждой этому миру темной магией.`,
          `<a href="/${transliterateRus('Азирбайджан')}/${transliterateRus('Пиратор Азир')}">Пиратор Азир</a> является одним из главных 
          экспортеров необработанного калорита, а так же его редкой разновидности - копростали.`,
          `<a href="/${transliterateRus('Джене-Рико')}/${transliterateRus('Содружество Дженериковых Наций')}">Дженерики</a>, которым недоступна каломантия, 
           столетиями изучали ископаемые говны и научились их трансмутации с помощью своей особой алхимии.`,
        ]
      },
      {
        title: 'Дристиарий',
        content: [
          `Вырезки из энциклопедии живых существ "Дристиарий" за авторством великого дристварского ученого, калософа и уебана <a href="/${transliterateRus('Дриствар')}/${transliterateRus('У.Е.Бан')}">У.Е.Бана</a>.`,
          `<h6>Сральник</h6>`,
          `У всех видов животных в этом мире есть одна общая особенность: у них всегда есть свой сральник - место, куда они ходят УМИРАТЬ.`,
          `<h6>Двухочковая кобра</h6>`,
          `Кобра, у которой два очка, блядь!`,
          `<h6>Калобок</h6>`,
          `Мифический духовный шар говна, который приходит к плохим людям и катается им по лицам.`,
          `<h6>Дристень</h6>`,
          `<img src="${dristen}" class="article-image" />`,
          `Добрый дух в форме хорька с втулкой от туалетной бумаги на шее. Был создан <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристцом</a>, 
          когда тот выбросил втулку, а она попала хорьку на шею. Вечно твердит "Свобода это то, что у тебя внутри".`,
          `Считается в народе хранителем и защитником анусов. Каждый дристварец готов пустить дристня в свое очко, ведь дристень в жопе приводит 
          к крепкому регулярному стулу, отсутствию проблем с желудком и даже повышению потенции, а так же защищает от злых сфинктрсов.`,
          `<h6>Сфинктрс</h6>`,
          `Злой антипод Дристня. Внешне отличается от Дристня только черным цветом. Является людям в неожиданные моменты, и если 
          они не скажут "Только не в жепу!", он залезет им в зад и насрет там. Сфинктрсы появляются когда 
          <a href="/${transliterateRus('Боги')}/${transliterateRus('Малые Боги')}">Твердой</a> вставляет себе дудку в нос и играет на ней Музыку Носа.`,
          `<h6>Дристочка</h6>`,
          `Птица, которая летает на двойной реактивной струе дриста.`,
          `<h6>Птица ХуйуХ</h6>`,
          `Птица, которая водится только на территории Коково и является его национальным символом. Выглядит, как два члена, соединенные яйцами посередине. Её
          пением вдохновлен гимн Коково - "Дик Твист".`,
          `<h6>Крокодилдо</h6>`,
          `Рептилия, которая водится в реке, на которой стоит город Клитор. Популяция крокодилд под угрозой вымирания ввиду 
          частого использования жительницами <a href="/${transliterateRus('Пиздраиль')}/${transliterateRus('Пиздраиль')}">Пиздраиля</a> в своих грязных женских целях.`,
          `<h6>Кунь</h6>`,
          `Распространенное в Пиздраиле ездовое животное. Обладает длинным языком и сильным нюхом. Среди прочей еды, питается женскими половыми выделениями.
          Чтоб приручить куня, пиздраильтянка должна дать ему отведать своих выделений, после чего он будет верен ей до конца своей жизни, в обмен на лакомство.`,
        ]
      },
      {
        title: 'Нассонский Орден',
        content: [
          `Нассонский Орден - террористическая организация, действующая во всем мире.`,
          `<h6>История</h6>`,
          `Вскоре после сотворения <a href="/${transliterateRus('Мир')}/${transliterateRus('Аналлон')}">Аналлона</a>, через темные лазейки в него проникли потусторонние сучности. <a href="/${transliterateRus('Боги')}/${transliterateRus('Вездессущ')}">Вездессущ</a> не стал скрываться в тени и открыто заявил
          о своей кампании против <a href="/${transliterateRus('Боги')}/${transliterateRus('Дристоц')}">Дристца</a>. Поначалу он пытался насолить лично Дристцу. Несколько раз он неизвестным способом пробирался в его покои и ссал
          ему в ботинки и в сосуды с напитками.`,
          `Спустя некоторое время, в <a href="/${transliterateRus('Дриствар')}/${transliterateRus('Королевство Дриствар')}">дристварском</a> городе Насральск жители стали замечать, что некоторые из них стали вонять мочой. Выяснилось, что они стали
          последователями Вездессуща, и, назвавшись Нассонским Орденом, они заявили, что город отныне пренадлежит им и в нем положено поклоняться только Вездессущу.
          Нассоны пытались провести всех жителей через ритуал инициации, но небольшая группа людей восстала против них, боем выгнав Нассонский Орден из города.
          Когда Дристоц узнал об этом, он наградил смельчаков и поставил их во главе основанной ради охоты на Нассонов Насральской Инквизиции.`,
          `С тех пор Нассоны действуют более скрытно, строя подземные храмы и похищая людей ради своих темных ритуалов.`,
          `<h6>Структура Ордена</h6>`,
          `По данным Инквизиции, во главе Нассонов стоит некий Обоссын, которого назначает лично Вездессущ, и чья личность тщательно скрывается. Он
          руководит делами Ордена и является проводником воли Вездессуща. Благодаря невероятной удаче и множеству усилий Инквизиция выяснила, что на момент
          37 ПГС Обоссыном является некий Уриин Осквернитель, и объявила его в международный розыск.`,
          `Рядовые члены Ордена носят звание мочевика, до которого нужно еще дослужиться. После посвящения аколит получает ранг обоссыша и прислуживает мочевикам,
          пока его не признают достойным повышения.`,
          `<h6>Ритуал Посвящения</h6>`,
          `Кандидата приводят в храм Вездессуща в особую комнату, где перед ним стоит чаша с мочой самого Вездессуща. Он должен испить из неё в присутствии 
          нескольких высокоранговых мочевиков, после чего в его организме начнут происходит изменения. В зависимости от того, совместим ли он с темной энергией
          Вездессуща, он может выжить, став при этом сильнее и выносливее, и получить в свое распоряжение темную силу, идущую от Вездессуща.`,
          `Далеко не все проходят это испытание. Те, кто не совместим с энергией Вездессуща, необратимо теряют человеческое обличие, превращаясь в некое подобие 
          живой бесформенной массы плоти с гипертрофированными органами, отвечающими за мочевыделение. Такие особи в Ордене называются мочалками.`,
          `<h6>Уринит</h6>`,
          `В каждом храме Нассонов присутствует омут мочи, над которым вешают всех находящихся в распоряжении ячейки культа мочалок, и они ссут в этот омут,
          периодически кроме мочи производя таинственные почечные камни, называемые уринитом. Одной из первых задач, которые получают обоссыши - бродить
          по этому омуту, вылавливая плавающий в нем уринит.`,
          `Свойства уринита учеными Инквизиции до конца не изучены, но известно, что он положительно влияет на последователей Вездессуща. Ходит
          теория, что Нассонам доступна тайное темное колдунство, использующее уринит как проводник энергии Вездессуща.`,
          `<h6>Деятельность</h6>`,
          `Орден в первую очередь занимается пропагандой ссаного пути. Члены Ордена внедряются в медицинские учреждения и распространяют уринотерапию.
          Строительство новой базы Ордена чаще всего начинается с похищения людей с целью либо инициировать их в Орден и заставить батрачить на строительстве храма,
          либо получить пару свежих мочалок.`,
          `По инициативе Насральской Инквизиции деятельность Нассонского Ордена во всем мире признана незаконной и членов Ордена преследуют представители местных
          властей. Инквизиция приводит в пример одну из особенностей членов Ордена - желтоватый оттенок кожи, и возможно глазных белков.`,
          `Инквизиция проводит занятия для жрецов Пути Семи Залуп, каломантов и монахов-похуистов, где учит их чувствовать энергию Вездессуща в людях и искать
          их тайные храмы.`,
        ]
      },
    ].sort(compareObjectsByTitle)
  },
];

export default World;