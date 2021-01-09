import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Kokovo: Array<DataObj> = [
  {
    title: 'Коково',
    isParent: true,
    children: [
      {
        title: 'Королевство Коково',
        isParent: false,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `,
        ]
      },
      {
        title: 'Членин',
        isParent: false,
        content: [
          `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Kokovo;