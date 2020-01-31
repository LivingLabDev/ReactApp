import React from 'react';
import './Ending.css';
import {Link} from "react-router-dom";
import Blij from "../../assets/blauw_blij.png";
import Arrow from "../../assets/right-arrow.svg";

export default function Ending() {
  return (
    <div className="Ending root-container">
      <div className='arrow-left-div'>
        <Link to="/bakery">
          <div className="arrow-left">
            <img className="arrow-img img-left" src={Arrow} alt='left arrow'/>
          </div>
        </Link>
      </div>

      <div className="Ending_subtitle">Power to the Polder</div>
      <div className="Ending_img-container"/>
      <div className="Ending_circle"/>

      <Link className="Ending_button" to="/">
        Brood waar je <img className="Information_blij" src={Blij} alt="Blij"/> van wordt
      </Link>
    </div>
  );
}
