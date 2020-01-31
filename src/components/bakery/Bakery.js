import React from 'react';
import Machines from '../../assets/machines.jpg'
import Info from '../information/Information'
import Baker from "../../assets/baker-1.jpg";

function Bakery() {
  const information = {
    id: 1,
    actionProperty: 'Bakker',
    actionDate: '11 December 2019',
    personProfession: 'Recept',
    personName: 'Alice Bakker',
    location: 'Schokland',
    img: Machines,
    mainTextColor: "#12a9d0",
    secondTextColor: "#fafffe",
    bottomBarColor: "#00a6d0",
    title: "Het recept van de bakker",
    linkToLeft: "/miller",
    linkToRight: "/baked",
    page: "bakery",
    moreTitle: "Het geheime recept van het\n" +
        "schokkend lekker brood?",
    moreText: "Nee we kennen geen geheimen. Transparantie is voor ons heel belangrijk. Daarom delen we graag ons " +
        "recept en vertellen we welke ingrediënten we gebruiken en waarom we welke hulpstoffen gebruiken.",
    moreTextPartTwo: "Brood bakken doe je zo :)",
    moreTextPartThree: "",
    moreImg: Baker,
    moreImgTwo: "",
  };

  return <Info information={information}/>;
}

export default Bakery;
