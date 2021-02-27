import {DataObj} from "../DataObj";
import {compareObjectsByTitle} from "../../utils";

const Nigermania: Array<DataObj> = [
  {
    title: 'Нигермания',
    children: [
      {
        title: 'Нигермания',
        isMainArticle: true,
        content: [
          `Нигермания - таинственное южное государство, страна пустынь и гетто.`,
          `<h6>История</h6>`,
          `Во время древнего расселения дристов, одна группа переселенцев зашла намного дальше остальных на юг. Они обнаружили там протоку, за которой виднелась земля.
          Попав на южный континент, они много лет блуждали по бескрайним пустыням, пока не обнаружили огромный оазис, идеально подходящий для основания поселения.
          Истощив запасы ископаемых говн, переселенцы стали питаться тем, что находили вокруг, и обнаружили, что многие травы влияют на разум и вызывают привыкание.`,
          `Довольно быстро переселенцы разделились на безнадежных наркоманов и тех, кто отказывался поддаваться соблазну. Вторые стали строить города и управлять
          первыми с помощью наркотиков. Население разрослось довольно быстро, особенно в неблагополучных районах, потому большая часть территории покрылась
          гетто, где царит разврат, наркомания и безработица, на каждой улице звучит рэп и звуки выстрелов. Это последние известия, которые Дриствар получил от
          государства, которое назвало себя Нигермания, прежде чем оно оборвало все контакты с внешним миром.`,
          `За прошедшие годы было несколько контактов с нигерами. Когда Дриствар послал дипломатов на юг, они обнаружили укрепленные границы и вооруженных до
          зубов нигеров-пограничников, которые не дали им даже приблизиться к границам. Засланные разведчики докладывали о гигантских гетто, переполненных наркоманами
          и агрессивными рэперами, прежде чем их вычисляли местные власти. Среди недостоверной информации, которую передавали разведчики, был слух о том, что
          южнее всех гетто находится огромный мегаполис, где базируется власть Нигермании.`,
          `<h6>Террористическая деятельность</h6>`,
          `Хоть Нигермания не контактирует с внешним миром, изредка нигеры появляются на континенте. По большей части они пытаются распространять наркотики, прикрываясь
          странствующими рэперами, но некоторые из них пытаются похищать людей и вывозить их в Нигерманию в неизвестных целях. Один из таких террористов был пойман,
          и из него удалось выбить, что он член организации Присраки, но отрицал принадлежность к правительству Нигермании.`,
          `<h6>Факты</h6>`,
          `Изредка в Дриствар попадают нигеры-беженцы, которых в дристваре любезно называют черножопошниками. Они в среднем долго адаптируются к жизни в Дристваре,
          ведь им плохо понятна идея денег. Они заявляют, что за работу в Нигермании им платят наркотиками.`,
          `От захваченных нигерманских террористов дристварские дознаватели часто слышали, как они славят некого Опездолаха, но ни один из них не признался,
          что это значит.`,
        ]
      },
    ].sort(compareObjectsByTitle)
  },

];

export default Nigermania;