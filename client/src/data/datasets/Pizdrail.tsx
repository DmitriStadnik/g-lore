import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Pizdrail: Array<DataObj> = [
  {
    title: 'Пиздраиль',
    children: [
      {
        title: 'Пиздраиль',
        isMainArticle: true,
        content: [
          `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. `,
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Pizdrail;