import React from 'react';
import './More.css';
import Arrow from "../../assets/right-arrow.svg"

export default function More(props) {
    const information = props.location.state.information;
    console.log(information.information);
  return (
    <div className="more-information">
      <button className="more-back" onClick={props.history.goBack}>
        <img className="img-left" src={Arrow} alt="Back"/>
      </button>
      <div className="information-text">
        <h2 id="more-title">{information.moreTitle}</h2>
        <p id="description">{information.moreText}</p>
        <img alt={information.moreImg} className="more-img" src={information.moreImg} />
        <p id="description">{information.moreTextPartTwo}</p>
        <img alt={information.moreImgTwo} className="more-img" src={information.moreImgTwo} />
        <p id="description">{information.moreTextPartThree}</p>
      </div>
    </div>
  );
}


