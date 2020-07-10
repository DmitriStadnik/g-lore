import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Gods: Array<DataObj> = [
  {
    route: '/gods',
    title: 'Боги',
    isParent: true,
    children: [
      {
        route: '/dristoc',
        title: 'Дристоц',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        route: '/amanda',
        title: 'Аманда',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        route: '/princessa-pidaras',
        title: 'Принцесса Пидарас',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        route: '/her-memus',
        title: 'Хер Мемус Н\'Кок',
        isParent: false,
        content: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.`,
        ]
      },
      {
        route: '/vezdessush',
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