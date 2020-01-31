import React from 'react';
import Bakkerij from '../../assets/brood-en-co-bakkerij-96.jpg'
import Info from '../information/Information'
import Baker from "../../assets/baker-2.jpg";

function Baked() {
  const information = {
    id: 1,
    actionProperty: 'Gebakken',
    actionDate: '3 Maart 2019',
    personProfession: 'Bakker',
    personName: 'Alice Bakker',
    location: 'Schokland',
    img: Bakkerij,
    mainTextColor: "#0ecaff",
    secondTextColor: "#f3ffff",
    bottomBarColor: "#5cf6ff",
    title: "Hoe werkt deze bakker?",
    linkToLeft: "bakery",
    linkToRight: "ending",
    page: "baked",
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

export default Baked;
