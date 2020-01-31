import React from 'react';
import Tarwegroen from '../../assets/tarwe-groen.jpg'
import Info from '../information/Information'
import Schokland from '../../assets/schokland_polder.jpg'
import Schoklandcard from '../../assets/schokland_kaart.jpg'

function Sow() {
  const information = {
    id: 1,
    actionProperty: 'Zaaidatum',
    actionDate: '3 Maart 2019',
    personProfession: 'Boer',
    personName: 'Arjen de Boer',
    location: 'Schokland',
    img: Tarwegroen,
    mainTextColor: "#019640",
    secondTextColor: "#009640",
    bottomBarColor: "#8bffa6",
    linkToLeft: "/",
    linkToRight: "/harvest",
    title: "Hoe werkt deze boer?",
    page: "sow",
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

export default Sow;
