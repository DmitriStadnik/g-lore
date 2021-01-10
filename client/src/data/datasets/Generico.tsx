import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Generico: Array<DataObj> = [
  {
    title: 'Джене-Рико',
    children: [
      {
        title: 'Джене-Рико',
        isMainArticle: true,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `,
        ]
      },
      {
        title: 'Супернатуралы',
        content: [
          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Generico;