import {DataObj} from "../DataObj";
import {compareObjectsByTitle, transliterateRus} from "../../utils";

const Kokovo: Array<DataObj> = [
  {
    title: 'Коково',
    children: [
      {
        title: 'Королевство Коково',
        isMainArticle: true,
        content: [
          `Королевство Коково - недавно появившееся в результате Говнины Ссаной государство, занимающее бывшие западные территории Дриствара. 
          В данный момент им правит Король-кок Членин.`,
          `Столица: Анал'Ебал`,
          `Валюта: дристкоин`,
          `Государственная религия: Путь Семи Залуп`,
          `<h6>Общая информация</h6>`,
          `Военизированное государство со строгим уставом для всех жителей, получившее свою независимость в ходе кровавой войны.`,
          `Основа идеологии Коково - отрицание веры в Дристца. Это было поводом для отделения от Дриствара и длительного идеологического противостояния
          двух государств. Со стороны кажется, что коковское общество абсолютно распутное и развращенное, но на самом деле частые оргии являются
          религиозным ритуалом Пути Семи Залуп, и они наполняют коковцев силой.`,
          `<h6>Зарождение коковского сепаратизма</h6>`,
          `Вскоре после успешного переворота в одной из дристварских западных деревень, на месте которой позже будет построен Анал'Ебал, появился Членин. 
          Он быстро завладел вниманием людей и убедил их, что вера в Дристца ложная. Решение он предложил найти на Пути Семи Залуп. Вера стала быстро распространяться
          глашатаями по всему западному Дриствару. Когда Членин набрал достаточную военную мощь, он открыто заявил об отрицании веры в Дристца и 
          объявил войну Дриствару по идеологическим причинам.`,
          `<h6>Война с Дристваром</h6>`,
          `Изначально коковское ополчение имело в распоряжении не очень много войск, но коковцы кроме открытой вели и теневую войну. Коковские шпионы проникали
          в дристварские деревни, месяцами обрабатывали местное население, и в итоге целые деревни присоединялись к коковцам без сопротивления.`,
          `За 3 года войны коковцы захватили большую часть западного Дриствара. Кульминацией стало долгое изнурительное противостояние
          революционеров и дристварских войск, вошедшее в историю 
          под названием <a href="/${transliterateRus('Мир')}/${transliterateRus('Говнина Ссаная')}">Говнина Ссаная</a>.`,
          `В итоге Дриствар и Коково поделили территорию по линии фронта и заключили временное перемирие.`,
          `<h6>После Говнины Ссаной</h6>`,
          `Дриствар и Коково продолжили холодную войну, а также ожесточенные дебаты насчет их идеологий. Хоть и не ведутся активные боевые действия,
          Коково ведет подрывную деятельность в Дристваре и пытается настроить против Дриствара другие страны.`,
          `<h6>Факты</h6>`,
          `Посвящение в совершеннолетие у коковцев представляет из себя обряд, в ходе которого нового полноценного члена(членкиню) общества 
          пускают по кругу все его родные, после чего бреют налысо голову и лобок, и отправляют служить в армию.`,
          `Король-кок, среди прочих привилегий имеет право пустить любого гражданина страны кругом по себе.`,
          `В Коково регулярно проводятся проверки и инспекции. К примеру, Государственный Инспектор Коков судит о верности государству. 
          По инструкции, он совершает резкий захват кока, и по реакции пациента определяет возможных инакомыслящих.`,
          `Одними из самых узнаваемых символов Ковово являются элитные боевые завоебатели и их боевой клич - "Анус Завоебанус!". Одетые в
          хуяки и вооруженные гиперзалупами, доблестно несут службу во имя Членина, защищая Коково от внешних и внутренних угроз.`,
          `Коковский болотный флот существует лишь недавно, и по всем параметрам проигрывает дристварскому. Адмирал коковского болотно-морского флота Ясенхуй
          получил свое прозвище за то, что каждый раз, когда триумф дристварского флота становится очевидным, он вовсеуслышанье объявляет: "ну бля, мы проебали", 
          на что всегда получает ответ "ну ясен хуй".`,
          `Именно коковские избушники являются лучшей службой внешней и внутренней разведки на континенте.`,
          `Филипп Кок - известный на всем континенте народный артист Коково. Его последний хит “Да, да, пизда!” обладает глубоко сексистским подтекстом, 
          и потому он удерживал вершины чартов на всем континенте целый год, в том числе и в Пиздраиле, так как они там не заметили 
          завуалированное сексистское отношение к женщинам. А дристварцам больше по духу пришелся сингл "Цвет кала зеленый". Дристварцы уже не один год ждут
          совместного выступления Филиппа Кока и Кала Маколейкина, а среди пиздраильтянок стала популярная собачка выведенной в Коково породы нихуя-хуя,
          которую популяризировал Филипп Кок.`,
          `Коковский ответ ДНИИЩЕ в научной сфере - компания "Гейсс и Геи", которую возглавляет талантливый изобретатель и маркетолог Гейсс, извечный соперник Жоппса.
          Одна из последних разработок компании - одноразовый кок, который можно вставить в очко только один раз, и стоит он всего 9.99 дристкоинов, стала настолько
          популярной, что всю первую партию раскупили в день выпуска. Кроме товаров для потребителя выполнять государственные заказы. Именно Гейсс разработал
          оружие завоебателей - страшную ГИПЕРЗАЛУПУ, которая существует в 4 измерениях.`,
          `Бутілощная - сеть коковских общепитов, куда коковцы собираются по вечерам распивать беписы. Только в этих заведениях все напитки подают в
          специальных бутілках в форме хуя, и можно отведать особые коковские блюда, например пенис с ледяным наростом, чей рецепт является охраняемой тайной компании.`,
          `Только в Коково можно воспользоваться услугами "Гея Для Душа" и посетить публичный дом престарелых, отведав там бабушку дня бесплатно, без смс и регистрации.`,
          `Каждый коковец, независимо от пола, рождается с залуповиной, которая соединяет крайнюю плоть новорожденного коковца с утробом матери. 
          Является причиной почему все коковцы обрезаны - это необходимо чтоб извлечь новорожденного.`,
        ]
      },
      {
        title: 'Членин',
        content: [
          `Король-кок Членин (урожденный Сралин) - основатель и единственный король-кок королевства Коково, основатель и глава
          церкви Пути Семи Залуп.`,
          `<h6>Ранняя жизнь</h6>`,
          `Сралин родился в королевской семье Дриствара за несколько десятков лет до Говнины Ссаной (точная дата утеряна). Рос в Жепе, как 
          наследный принц. Когда король скончался, молодой Сралин унаследовал престол Дриствара.`,
          `В первые годы своего правления Сралина в народе считали образцовым дристиянцем и мудрым королем. В тех сферах, где ему не хватало
          опыта или знаний, ему помогал его верный друг детства Лонганус. Хоть он был консерватором и не желал резких реформ или налаживания связей с
          другими странами, он умело поддерживал Дриствар и его народ на довольно высоком уровне развития.`,
          `<h6>Ебаные голоса непонятных существ</h6>`,
          `Однажды Сралин начал слышать голоса. Они шептали ему, сначала невнятно, а со временем все яснее. Их слова были развратны, соблазнительны.
          Они склоняли его нарушить одно из табу Дриствара - выебать кого-то в очко, и обещали за это ему могущество, которое и не снилось его отцу,
          крепкое здоровье, стул и стояк.`,
          `Хоть он и пытался сопротивляться, постепенно ему стало любопытно, почему же все таки анальный секс запрещен. Он стал подозревать, что Дристоц
          в древние времена запретил его дристварцам как раз из-за того самого обещанного ему могущества. Мысль становилась все более навязчивой, пока он
          не прокрался ночью к Лонганусу, чтоб надругаться над своим спящим другом. К его удивлению, Лонганус ждал его и был готов подставить ему очко.`,
          `Верхней головой Сралин понимал, что это очень подозрительно, будто ими манипулируют, но нижняя голова жаждала только погрузиться в запретное очко товарища.
          Отринув все мысли, он предался блаженному забвению и совершил акт истинного мужского слияния с Лонганусом. Чем глубже он в него погружался,
          тем больше его тело наполнялось неизвестной ему потусторонней силой, чужой в этом мире. В эту ночь два лучших друга отвергли Дристца и его учение,
          и поклялись вместе поменять Дриствар.`,
          `<h6>Падший король</h6>`,
          `Голос потусторонней сучности стал говорить яснее, обучать Сралина и Лонгануса своему учению и направлять их по пути разрушения веры в Дристца.
          Поначалу им хватало друг друга, но жажда силы становилась все сильнее. Они совратили королевскую стражу и под покровом ночи вместе с отрядом
          верных солдат выбирались в город чтоб пускать невинных дристварцев кругом по себе. Во время визитов в другие города Сралин не всегда мог сдержать свою
          жажду могущества, и насильно пускал по кругу целые семьи. Постепенно его наклонности стало сложнее скрывать, начали ходить слухи. Волнения по всей стране
          привели к Восстанию Дристоборода.`,
          `Силы восстания стремительно продвигались к столице, потому Сралин закрылся в своем дворце и готовил план побега. Когда Дристобород взял штурмом столицу и начал
          продвигаться к дворцу, один из верных Сралину стражников пожертвовал собой, чтоб прикрыть побег Сралина. Лонганус отрезал стражнику член, поджег дворец и сообщил
          Дристобороду о своей победе над падшим королем, пока Сралин бежал через тайные ходы Жепы. Голоса говорили ему идти на запад.`,
          `<h6>Основание Коково</h6>`,
          `Чем дальше Сралин отходил от Жепы, тем отчетливее он слышал потусторонний голос, пока перед ним не явилась потусторонняя сучность, назвавшая себя Хер Мемус Н'Кок.
          Странное существо, больше напоминающее комок хуев и рук, которые их надрачивают, чем человека, пообещало Сралину силу, способную менять тела и разумы
          людей так, чтоб они отторгали веру с Дристца. Сралин присягнул Хер Мемусу на вечную верность, за что тот нарек его своим пророком, 
          отметил его своей порочной меткой и дал ему новое имя - Членин.`,
          `Изменившись внешне и духовно, Членин начал длительную кампанию по развращению западного Дриствара. Он предлагал людям пройти крещение в основанной им
          церкви Пути Семи Залуп, обещая им открытие сознания, познание тайн мира, крепкое здоровье, стул и стояк. Поначалу соглашались только самые наивные и простодушные,
          но постепенно культистов стало достаточно, чтоб захватывать целые деревни, силой или убеждением. Каждый дристварец, получивший метку Хер Мемуса, присягал на верность
          Членину и его Пути.`,
          `Когда Членин набрал достаточно большую армию и распространил свою тайную шпионскую сеть, он послал ультиматум Дристобороду, предложив всему Дриствару объединиться
          под его властью, отвергнув веру в ложного бога Дристца. Получив отказ, он заявил об основании Королевства Коково и объявил Дриствару войну. Кроме прямого военного
          наступления, его шпионы распространяли темное влияние Членина в тылу врага. Самыми разными методами за три года Членин, лично командуя войсками,
          завоевал весь западный Дриствар и добрался до берегов Великого Болота. Попытка продвинуться дальше привела к длинной изнурительной битве, которая
          вошла в историю, как <a href="/${transliterateRus('Мир')}/${transliterateRus('Говнина Ссаная')}">Говнина Ссаная</a>, в которой проебали ВСЕ.`,
          `Членин, видя, что его люди изнурены, инициировал переговоры с Дристобородом и договорился о признании Дристваром независимости Коково и передаче ему завоеванных
          территорий. Вернувшись обратно на запад, он воззвел столицу своего королевства - Анал'Ебал, а в ней свою личную Цитадель Дрочи, откуда он и по сей день правит
          своим королевством.`,
          `<h6>Дополнительная информация</h6>`,
          `Членин - единственный в Коково, кому дана привилегия прийти в любой дом и пустить там всех кругом по себе.`,
          `Членин обладает волшебным посохом в форме хуя под названием Червоный Анальный Гидрохуй. Считается, что он может накапливать и извергать КАМ.`,
          `Священники Пути Семи Залуп пророчат, что после смерти Членина его кости обратятся в залупу.`,
        ]
      },
      // {
      //   title: 'Лонганус',
      //   content: [
      //     `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      //     ut labore et dolore magna aliqua. `
      //   ]
      // },
      // {
      //   title: 'Анал'Ебал',
      //   content: [
      //     `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      //     ut labore et dolore magna aliqua. `
      //   ]
      // },
    ].sort(compareObjectsByTitle)
  },

];

export default Kokovo;