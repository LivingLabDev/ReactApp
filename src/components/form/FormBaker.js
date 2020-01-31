import React from 'react';
import '../information/Information.css'
import './Form.css'
import Img from '../../assets/graanveld.jpg';
import LeftArrow from '../../assets/right-arrow.svg'
import {Link} from "react-router-dom";

function FormBaker() {
  return (
    <div className="form-container">
      <div className="root-container">
        <div className="center-screen-form">
          <div className="container-form">
            <div className="fixed-img" style={{backgroundImage: "url(" + Img + ")"}}/>
          </div>
          <Link className="form-back" to="/">
            <img className="img-left" src={LeftArrow} alt="Back"/>
          </Link>
          <div className="complete-form">
            <div className="bakery-form">
              <form className='form' action="/">
                <label htmlFor="locatie">
                  Locatie
                  <input type="text" id="locatie" name="locatie" placeholder="Locatie"/>
                </label>

                <label htmlFor="tarwe">
                  Recept
                  <input type="text" id="tarwe" name="tarwe" placeholder="Tarwe"/>
                </label>

                <label htmlFor="description">
                  Beschrijving
                  <textarea name="textarea" className="description-form"/>
                </label>

                <label htmlFor="description">
                  Hulpstoffen
                  <textarea name="textarea" className="description-form"/>
                </label>

                <label htmlFor="tarwe">
                  Droge stof
                  <input type="text" id="oogsten" name="oogsten" placeholder="Zaaien"/>
                </label>

                <label htmlFor="image-upload">
                  Upload een foto:<br/>
                  <input type="file" id='image-upload'/>
                </label>

                <input type="submit" value="Opslaan"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBaker;
