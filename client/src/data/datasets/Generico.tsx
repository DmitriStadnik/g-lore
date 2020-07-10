import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Generico: Array<DataObj> = [
  {
    route: '/generico',
    title: 'Джене-Рико',
    isParent: true,
    children: [
      {
        route: '/generico',
        title: 'Джене-Рико',
        isParent: false,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `,
        ]
      },
      {
        route: '/supernatural',
        title: 'Супернатуралы',
        isParent: false,
        content: [
          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Generico;