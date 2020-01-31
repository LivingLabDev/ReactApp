import React from 'react';
import Graanveld from '../../assets/graanveld.jpg'
import Info from '../information/Information'
import Schokland from "../../assets/schokland_polder.jpg";
import Schoklandcard from "../../assets/schokland_kaart.jpg";

function Harvest() {
  const information = {
    id: 1,
    actionProperty: 'Oogstdatum',
    actionDate: '18 Augustus 2019',
    personProfession: 'Boer',
    personName: 'Arjen de Boer',
    location: 'Schokland',
    img: Graanveld,
    mainTextColor: "#eb571f",
    secondTextColor: "#e6332b",
    bottomBarColor: "#fff373",
    title: "Hoe werkt deze boer?",
    linkToLeft: "/sow",
    linkToRight: "/miller",
    page: 'harvest',
    moreTitle: "Circulair Schokland",
    moreText: "Graan  voor brood komt zelden uit Nederland. Het is veelal onrendabel of van te lage kwaliteit. " +
        "Daarmee is het niet minder belangrijk voor de diversiteit van het Nederlandse Landschap",
    moreTextPartTwo: "Op Schokland werken we samen met de het Flevolandschap en de boer om het circulair" +
        " en hoogwaardig te produceren.",
    moreTextPartThree: "Hoe dat precies werkt is hier te ontdekken.",
    moreImg: Schokland,
    moreImgTwo: Schoklandcard,
  };

  return <Info information={information}/>;
}

export default Harvest;
