import { DataObj } from './DataObj';
import World from './datasets/World'
import Dristvar from './datasets/Dristvar'
import Gods from './datasets/Gods'
import Generico from "./datasets/Generico";
import Kokovo from "./datasets/Kokovo";
import Pizdrail from "./datasets/Pizdrail";
import Azirbaizhan from "./datasets/Azirbaizhan";
import Kso from "./datasets/Kso";

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
  ...Pizdrail,
  ...Kso,
  // ...Generico,
  // ...Nigermania,
  ...Azirbaizhan,
];