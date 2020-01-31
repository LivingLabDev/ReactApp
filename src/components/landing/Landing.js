import React from 'react';
import './Landing.css';
import Blij from '../../assets/Blijbrood-logo.svg';
import Oranjeblij from '../../assets/oranje_blij.png';
import {Link} from "react-router-dom";
import Arrow from "../../assets/right-arrow.svg";

export default function Landing() {
  return (
    <div className="Landing">
      <div className='arrow-right-div-landing'>
        <Link to="/sow">
          <div className="arrow-right">
            <img className="arrow-img" src={Arrow} alt='right arrow'/>
          </div>
        </Link>
      </div>

      <div className="Landing_heading">
        <div className="Landing_navbar">
          <Link className="Landing_login" to="/login">Log in</Link>
        </div>

        <div className="Landing_title">
          <img className="Landing_blij" src={Blij} alt="Blij"/>
        </div>
      </div>

      <div className="Landing_heading_small">
        <div className="Landing_navbar">
          <div className="Landing_title">
            <img className="Landing_blij" src={Blij} alt="Blij"/>
          </div>
          <Link className="Landing_login" to="/login">Log in</Link>
        </div>
      </div>

      <div className="Landing_subtitle">
        Bijzonder brood van bijzonder graan uit Schokland
      </div>

      <div className="Landing_circle">
      </div>

      <div className="Landing_text">
        Van dit brood krijg je vlinders in je buik &eacute;n in de wei.
        Daarvan wordt toch iedereen blij? Goed<br/>
        voor jou en Goed voor iedereen
      </div>

    <div className="Landing_footer">
        Brood waar je <img className="Information_blij" src={Oranjeblij} alt="Blij"/> van wordt
    </div>

    </div>
  );
}
