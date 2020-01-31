import React from 'react';
import './Information.css';
import {Link} from "react-router-dom";
import Arrow from "../../assets/right-arrow.svg"
import Slot from "../../assets/BlockChainSlot.svg"

export default function Information(props) {
  const information = props.information;

  return (
    <div className={`root-container information-${information.page}`}>
      <div className='arrow-left-div'>
        <Link to={information.linkToLeft}>
          <div className="arrow-left">
            <img className="arrow-img img-left" src={Arrow} alt='left arrow'/>
          </div>
        </Link>
      </div>

      <div className='arrow-right-div'>
        <Link to={information.linkToRight}>
          <div className="arrow-right">
            <img className="arrow-img" src={Arrow} alt='right arrow'/>
          </div>
        </Link>
      </div>

      <div className="center-screen">
        <div className="fixed-img" style={{backgroundImage: "url(" + information.img + ")"}}/>

        <div className="Information">
          <div className="Information_text" style={{color: information.mainTextColor}}>
            <h3>{information.title}</h3>
            <div><div className="Information_titles">{information.actionProperty}:</div> {information.actionDate}</div>
            <div><div className="Information_titles">{information.personProfession}:</div> {information.personName}</div>
            <div><div className="Information_titles">Locatie:</div> {information.location}</div>
            <div>
              <div className="Information_titles">Blockchain hash:</div>
              <span title="07ea1a2f36a4c9af6e17cd0755564c645878f74ce6c8a7858c18d3d9602335a4"> d9602335a4</span>
            </div>
          </div>

          <div className="more-buttons">
            <Link className="more-link" to={{pathname: "/more", state: {information: information}}}>
              <div className="information-button" style={{backgroundColor: information.bottomBarColor}}>
                <p id="info-p">Meer info</p>
              </div>
            </Link>
            <Link to="/blockchain">
              <div className="information-button" style={{backgroundColor: information.bottomBarColor}}>
                <img alt="Blockchain" className="slot-img" src={Slot}/> Blockchain
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
