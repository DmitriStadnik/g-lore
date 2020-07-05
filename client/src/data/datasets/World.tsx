import {DataObj} from "../DataObj";
import testImage1 from "../images/50.jpg";

const Test: Array<DataObj> = [
  {
    route: '/world',
    title: 'Мир',
    isParent: true,
    children: [
      {
        route: '/sozdanie-mira',
        title: 'История создания мира',
        isParent: false,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel.`,

          `<img src="${testImage1}" class="article-image" />`,

          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus.`
        ]
      },
      {
        route: '/hpownr',
        title: 'ХРОШНЯ',
        isParent: false,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel.`,

          `<img src="${testImage1}" class="article-image" />`,

          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus.`
        ]
      }
    ]
  },
];

export default Test;