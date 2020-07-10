import {DataObj} from "../DataObj";
import testImage1 from "../images/50.jpg";
import dristoborod from "../images/dristoborod.png";
import {compareObjectsByTitle} from "../../utils";

const Dristvar: Array<DataObj> = [
  {
    route: '/dristvar',
    title: 'Дриствар',
    isParent: true,
    children: [
      {
        route: '/korolevstvo-dristvar',
        title: 'Королевство Дриствар',
        isParent: false,
        content: [
          `Королевство Дриствар - древнейшее государство, созданное последователями Дристца.`,
          `Правитель: Король Дристобород.`,
          `Столица: Жепа.`,
          `Валюта: дристкоин.`,
          `Государственная религия: Дристянцтво.`
        ]
      },
      {
        route: '/dristoborod',
        title: 'Король Дристобород',
        isParent: false,
        content: [
          `<img src="${dristoborod}" class="article-image" />`,
          `Король Дристобород І Освободитель - король <a href="/dristvar/korolevstvo-dristvar">Дриствара</a>. `,
          `<h6>Дополнительная информация</h6>`,
          `Его трон большой, белый и керамический. 
            Сбоку у него висит цепочка, за которую он дергает, сидение открывается и он туда срет. 
            Был одним из недовольных правлением Сралина и первым кто открыто заявил об этом недовольстве. 
            Собрал восстание и в ходе гражданской войны сверг Сралина и захватил власть. 
            Хоть он и является истинным верующим в Дристца, он постепенно начал упиваться властью.
          `,
        ]
      },
      {
        route: '/zhepa',
        title: 'Жепа',
        isParent: false,
        content: [
          `Жепа - Столица <a href="/dristvar/korolevstvo-dristvar">Дриствара</a>. 
          `,
        ]
      },
      {
        route: '/zhepa-v-oblasti',
        title: 'Жепа в области Жепы',
        isParent: false,
        content: [
          `Жепа - портовый город недалеко от <a href="/dristvar/zhepa">столицы</a>. Две жепы испокон веков спорят какая из двух жеп жепнее. 
          `,
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Dristvar;