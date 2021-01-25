import { DataObj } from './DataObj';
import World from './datasets/World'
import Dristvar from './datasets/Dristvar'
import Gods from './datasets/Gods'
import Generico from "./datasets/Generico";
import Kokovo from "./datasets/Kokovo";

export const mainPage: DataObj = {
  title: 'Главная',
  content: [
    `Про говно, и не только. Но в основном про говно.`
  ]
}

export const data: Array<DataObj> = [
  ...World,
  ...Gods,
  ...Dristvar,
  ...Kokovo,
  // ...Generico,
  // ...Nigermania,
  // ...Azirbaizhan,
];