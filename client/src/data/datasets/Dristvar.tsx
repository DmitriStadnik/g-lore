import {DataObj} from "../DataObj";
import testImage1 from "../images/50.jpg";
import dristoborod from "../images/dristoborod.png";

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
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.`,

          `<img src="${testImage1}" class="article-image" />`,

          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.`
        ]
      },
      {
        route: '/dristoborod',
        title: 'Король Дристобород',
        isParent: false,
        content: [
          `<img src="${dristoborod}" class="article-image" />`,
          `Король Дристобород І Освободитель - король <a href="/dristvar/korolevstvo-dristvar">Дриствара</a>. Его трон большой, белый и керамический. 
            Сбоку у него висит цепочка, за которую он дергает, сидение открывается и он туда срет. 
            Был одним из недовольных правлением Сралина и первым кто открыто заявил об этом недовольстве. 
            Собрал восстание и в ходе гражданской войны сверг Сралина и захватил власть. 
            Хоть он и является истинным верующим в Дристца, он постепенно начал упиваться властью.
          `,
        ]
      },
    ]
  },

];

export default Dristvar;