import {DataObj} from "../DataObj";
import {compareObjectsByTitle, transliterateRus} from "../../utils";
import princessa from "../images/princessa.png";

const Gods: Array<DataObj> = [
  {
    title: 'Боги',
    children: [
      {
        title: 'Дристоц',
        isMainArticle: true,
        content: [
          `Дристоц (Есус, Ксолнцеликий) - <a href="/${transliterateRus('Мир')}/${transliterateRus('Древняя история мира')}">создатель мира</a> и его истинный бог. 
          Автор Абсолютной Шутки Про Говно и многочисленных ВСЕТЕНГОВ. Ранее ходил по миру среди людей, но сейчас обитает в Гробнице Ануса, куда не может попасть ни один смертный.`,
          `<h6>Личность и характер</h6>`,
          `Дристоц представляет из себя идеал всратости. Его шутки про говно способны воплощаться в реальности. Мудрый бог в древности
          ходил среди древних дристов и делился с ними мудростью. Но даже он не идеален, потому после ухода его жены и дочери он стал терять 
          к миру интерес и удалился в свою обитель.`,
          `<h6>ВСЕТЕНГ</h6>`,
          `Дристоц никогда не отрицал свои ошибки, и потому если он считает, что что-то в мире работает неправильно, или там чего-то не хватает, он
          с криком "ВСЕТЕНГ", который громом разносится по миру, меняет саму суть мироздания, добавляя туда новые всратые концепты.`,
          `<h6>Гробница Ануса</h6>`,
          `Священная обитель Дристца, которую он возвел где-то посреди мира, спрятав вход от смертных. С тех пор, как он покинул мир и уединился в
          Гробнице Ануса, многие дристиянцы и просто исследователи ищут вход в Гробницу Ануса, в надежде вновь встретиться со своим богом.`,
          `<h6>Дристоц в религиях мира</h6>`,
          `Дристцу явно или неявно поклоняются практически во всем мире. Так же присутствуют несколько религий, которые признают его, но не поклоняются, 
          а государственная религия Коково отрицает Дристца как бога и создателя мира.`,
          `Дристиянцтво описывает Дристца, как мужчину в полном расцвете сил. Он носит простой костюм, выглядит опрятно. В священных писаниях Дристиянцтва сказано,
          что он всегда был любезен с древними дристами и своей семьей, не стеснялся делиться с ними своей мудростью.`,
          `В Пиздраиле же признают, что именно Дристоц, при поддержке своей жены и дочери, создал мир. По версии церкви Аманды, без своей жены
          Дристоц не мог ничего сделать, и практически все идеи ему подкинула она. С течением времени он проявил свою гнилую природу мужлана, потому Аманде
          пришлось сбежать, забрав с собой верных последовательниц. Принцесса Пидарас же, в силу своей молодости и неопытности, не сразу распознала в отце тирана,
          потому оставалась с ним пока он не избил её.`,
          `Образ Ксолнцеликого тоже является измененным образом Дристца, ведь Ксо образовали древние дристы-переселенцы, которые подверглись влиянию
          виабушной энергии.`,
          `Церковь Семи Залуп заявляет, что Дристоц - жалкий узурпатор и ложный идол сошедших с верного пути дристварцев. По их мнению, в начале были 7 залуп,
          а не какой-то непонятный мужик с шутками про говно.`,
          `Дженерики поклоняются своему Богу, который является чуть идеализированной версией Дристца. Они отрицают, что их создал всратый бог дристиянцев, и
          считают что их Бог - это не Дристоц. Дристоц же рассказывал древним дристам, что слышит молитвы дженериков, но не отвечает на них, потому что они
          умирают от его всратости.`,
          `<h6>Отношения с другими богами</h6>`,
          `Дристоц не общался с Амандой и Принцессой Пидарас с тех пор как они обе его покинули.`,
          `Вездессуща дристиянцам Дристоц наказал избегать, ибо его учения про мочу отвратительны и позорят всратость.`,
          `В отличии от Вездессуща, Хер Мемус Н'Кок не заявлял о своем проникновении в мир, но на случай если это случится, Дристоц
          оставил дристиянцам информацию о том, как определить его присутствие и как избавиться от его деструктивного влияния.`,
          `С Водоебом Дристоц находился в нейтральных отношениях, пока тот не сообщил ему, что Принцесса Пидарас попыталась его соблазнить. Хоть
          за это была наказана именно Принцесса Пидарас, Водоеба Дристоц с тех пор недолюбливает.`,
          `Хоть Твердой заявляет, что он кум Дристца, Дристоц велел истинному дристиянцу не верить этому пидарасу, не то он свою грязную сопилку запихнет 
          ему в жепу и туда призовет сфинктрса.`,
        ]
      },
      {
        title: 'Малые боги',
        content: [
          `В мире усилиями Дристца и не только были созданы несколько малых богов. Вполне возможно, что их было и больше, но остались существовать только
          те, которые были одобрены Дристцом, или о которых он не знал.`,
          `<h6>Водоёб</h6>`,
          `болотный бог. Все женщины знают что ниже по течению от Водоёба в воду лучше не заходить, по очевидным причинам. 
          Не в ладах с Дристцом после инцидента с принцессой Пидарас.`,
          `<h6>Твердой</h6>`,
          `Болотный трикстер. Самопровозглашенный кум Дристца. Является людям, кладет им незаметно какой-то предмет в карман и предлагает угадать что он туда положил. 
          Если угадать, Твердой заявит, что предмет не простой, а музыкальный, и сыграет на этом предмете свою музыку. 
          А если не угадать, Твердой будет преследовать жертву, вставит себе дудку в нос, сыграет на ней Музыку Носа и создаст сфинктрса, который насрет жертве в очко.`,
          `Те, кто прогневал Твердого, иногда начинают слышать шепот "Ты залупился!". Твердой истязает жертву, пока не надоест, а потом выбрасывает жертву в Коково,
          чтоб её пускали по кругу.`,
          `<h6>Бабка Бібка Бобка</h6>`,
          `Жена Твердого. Ходят легенды, что ее создала богиня Аманда, которую заебали шутки про говно от Дристца. Она была создана с целью 
          соблазнить Дристца, чтоб Аманда могла обвинить его в измене и уйти. Бобка успешно соблазнила Дристца, но в момент когда они снизошли в Гробницу Ануса 
          и возлежали на говноложе, Дристоц начал шутить про говно и срать концептами, и продолжал он всю ночь. Бобка не выдержала и бросила свое задание. `,
          `Когда она пряталась от гнева Аманды на болотах, она услышала Музыку Носа и влюбилась в исполнявшего её Твердого с первого взгляда. 
          С тех пор они заебывают людей вместе.`,
          // `<h6>Дедушка Нигер</h6>`,
          // `Дедушка Нигер - всосал наркоту и стал малым богом, признан Дристцом, как покровитель Нигермании`,
        ]
      },
      {
        title: 'Аманда',
        content: [
          `Аманда - Бывшая жена Дристца, верховная богиня Пиздраиля.`,
          `<h6>Личность и характер</h6>`,
          `Властная женщина, любящая быть в центре внимания. Уверенная в своей внешности и абсолютной правоте во всех вопросах. Была такой до 
          Великого Рофла, и стала еще более уверенной в себе после становления верховной богиней Пиздраиля.`,
          `<h6>Аманда в религиях мира</h6>`,
          `Дристиянцтво мало упоминает Аманду. Хоть Дристоц и велел не ненавидеть Аманду и её последовательниц, и принять их выбор, древние дристы
          затаили на неё небольшую обидку, потому её роль в дристиянцтве сводится к паре небольших упоминаний.`,
          `Пиздраиль почитает Аманду как богиню, которая освободила пиздраильтянок от мужского гнета. Она постоянно является перед своими последовательницами,
          делясь с ними своей божественной мудростью.`,
          `Церковь Семи Залуп не отрицает божественный статус Аманды, но относится к ней и всему Пиздраилю с пренебрежительным презрением.`,
          `<h6>Отношения с другими богами</h6>`,
          `О Дристце отзывается негативно, не забывает упомянуть, как её заебали шутки про говно. 
          Когда считает, что мир работает не так, как ей хочется, начинает заебывать Дристца, 
          чтоб тот совершил выгодный ей ВСЕТЕНГ, угрожая совершить проникновение в Гробницу Ануса и устроить ему там скандал. Работает не всегда.`,
          `Приняла Принцессу Пидарас в Пиздраиль после её побега из Дриствара и назначила её второй богиней. Оберегает и балует её, и заставляет это делать
          своих последовательниц.`,
          `Создала Бабку Бібку Бобку, чтоб та соблазнила Дристца, и у Аманды была возможность обвинить Дристца в измене и уйти от него. Пошло не по плану,
          уходить пришлось по надуманному поводу.`,
          `Заявляла, что после расставания с Дристцом Хер Мемус Н'Кок пытался её соблазнить с корысными намерениями. Хоть ей это и льстило, она его отвергла
          и заявила своим последовательницам, что Коково стоит презирать.`,
        ]
      },
      {
        title: 'Принцесса Пидарас',
        content: [
          `<img src="${princessa}" class="article-image" />`,
          `Принцесса Пидарас - дочь Дристца и Аманды, вторая богиня Пиздраиля.`,
          `<h6>Личность и характер</h6>`,
          `Разбалованная дочь двух богов. Так как выглядит абсолютно уродливо, отчаянно ищет того самого мужика, который согласится её выебать, прибегая
          к самым низким методам.`,
          `<h6>Принцесса Пидарас в религиях мира</h6>`,
          `Дристиянцтво описывает её, как самое уродливое существо на свете - жирную зеленокожую женщину с тремя невероятно уродливыми лицами и волосами
          ненатурально яркого розового цвета. В священных писаниях упомянуто, что она пыталась соблазнить Водоёба, для чего создала анальные чары, 
          которые заставили его видеть её как прекрасную воду. Он попытался её выебать, но чары развеялись и он, в гневе, начистил ей ебальники. 
          Она пошла жаловаться Дристцу, что тот её избил, а тот, получив объяснения от Водоёба, разгневался на неё за то, что она не любит свой природный вид и тоже отпиздил её. 
          Обиженная, она уехала жить к матери и стала второй богиней Пиздраиля.`,
          `Пиздраиль принял Принцессу Пидарас как вторую богиню. Амандистская версия событий - Дристоц окончательно перестал скрывать свою природу домашнего тирана
          и стал избивать дочь.`,
          `<h6>Отношения с другими богами</h6>`,
          `Полностью зависит от матери, а про отца пытается не вспоминать.`,
          `В полном отчаянии пыталась соблазнить Водоёба.`,
          `Когда узнала, что Хер Мемус Н'Кок пытался соблазнить её мать, предложила ему себя. Он отказался.`,
        ]
      },
      // {
      //   title: 'Хер Мемус Н\'Кок',
      //   content: [
      //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      //   ut labore et dolore magna aliqua.`,
      //   ]
      // },
      {
        title: 'Вездессущ',
        content: [
          `Вездессущ, по версии Дристиянцтва - главный антагонист Дристца. Древнее существо, которому не было дано место в этом мире Дристцом, 
          за что он затаил обиду, и с тех пор пытается распространить свое влияние на мир.`,
          `<h6>Появление в мире</h6>`,
          `Когда Дристоц совершил Великий Рофл, он взял в свой новый мир свою жену и дочь, но пренебрег своими друзьями. Хер Мемус Н'Кок и Вездессущ обиделись,
          и решили, что подосрут Дристцу, проникнув туда через темные лазейки, и распространив свое деструктивное влияние на местных жителей. В отличии от своего друга,
          Вездессущ не стал прятаться в тени, и стал действовать явно и неприкрыто.`,
          `<h6>Темное влияние</h6>`,
          `Он является людям и пытается обратить их в свою паству, обещая им золотые дожди и очищение организма. Новообращенные быстро осознают, что
          все что они получат - реки мочи. Культисты собираются в тайные культы по всему континенту и пытаются распространить его 
          влияние с помощью агитационных листовок и выступлений. `,
          `В Дристваре раз в год проводятся инспекции всех врачей, так как обращенные врачи тайком предлагают пациентам уринотерапию вместо нормальных методов лечения.`,
        ]
      }
    ].sort(compareObjectsByTitle)
  },

];

export default Gods;