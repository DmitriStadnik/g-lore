import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Gods: Array<DataObj> = [
  {
    title: 'Боги',
    children: [
      {
        title: 'Дристоц',
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Аманда',
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Принцесса Пидарас',
        content: [
          `рандеву с водоебом`,
        ]
      },
      {
        title: 'Хер Мемус Н\'Кок',
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Вездессущ',
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      }
    ].sort(compareObjectsByTitle)
  },

];

export default Gods;