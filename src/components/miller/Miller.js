import React from 'react';
import Maalderij from '../../assets/Maalderij-klein.jpg'
import Info from '../information/Information'
import MillerOne from '../../assets/miller-1.jpg';
import MillerTwo from '../../assets/miller-2.jpg';

function Miller() {
  const information = {
    id: 1,
    actionProperty: 'Verwerkingsdatum',
    actionDate: '23 november 2019',
    personProfession: 'Molenaar',
    personName: 'Hans Molenaar',
    location: 'Schokland',
    img: Maalderij,
    mainTextColor: "#e30613",
    secondTextColor: "#fffeff",
    bottomBarColor: "#e30613",
    title: "Hoe werkt deze molenaar?",
    linkToLeft: "/harvest",
    linkToRight: "/bakery",
    page: "miller",
    moreTitle: "2019\n" +
        "Goed graanjaar?\n" +
        "Goed broodjaar...",
    moreText: "De kwaliteit en de chemische samenstelling van het graan kunnen variëren, het brood\n" +
        "dus ook.. soms wat hoger, dan weer wat lager...",
    moreTextPartTwo: "",
    moreTextPartThree: "",
    moreImg: MillerOne,
    moreImgTwo: MillerTwo,
  };

  return <Info information={information}/>;
}

export default Miller;
