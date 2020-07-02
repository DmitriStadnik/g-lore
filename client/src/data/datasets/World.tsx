import {DataObj} from "../DataObj";
import testImage1 from "../images/50.jpg";
import React from "react";

const Test: Array<DataObj> = [
  {
    route: '/world',
    title: 'Мир',
    id: 1,
    parent: null,
  },
  {
    route: '/sozdanie-mira',
    title: 'История создания мира',
    id: 2,
    parent: 1,
    content: [
      `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.`,

      (<img src={testImage1} />),

      `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus.`
    ]
  },
  {
    route: '/hpownr',
    title: 'ХРОШНЯ',
    id: 9,
    parent: 1,
    content: [
      `TEST 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel.`,

      (<img src={testImage1} />),

      `TEST 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus.`
    ]
  },
];

export default Test;