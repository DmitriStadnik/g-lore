import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Gods: Array<DataObj> = [
  {
    title: 'Боги',
    isParent: true,
    children: [
      {
        title: 'Дристоц',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Аманда',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Принцесса Пидарас',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Хер Мемус Н\'Кок',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        title: 'Вездессущ',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      }
    ].sort(compareObjectsByTitle)
  },

];

export default Gods;