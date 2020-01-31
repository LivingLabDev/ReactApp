import React from 'react';
import '../information/Information.css'
import './Form.css'
import Img from '../../assets/graanveld.jpg';
import {Link} from "react-router-dom";
import LeftArrow from "../../assets/right-arrow.svg";

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
                  Product
                  <input type="text" id="tarwe" name="tarwe" placeholder="Tarwe"/>
                </label>

                <label>
                  <Link className="button" to="/farmer/sow">
                    Zaai-informatie
                  </Link>
                </label>

                <label htmlFor="oogst">
                  Oogstdatum
                  <input type="date" name="oogst" placeholder="Datum"/>
                </label>

                <label htmlFor="hectare">
                  Hectare
                  <input type="text" name="hectare"/>
                </label>

                <label htmlFor="natuur">
                  % natuur op perceel
                  <input type="text" name="natuur"/>
                </label>

                <label htmlFor="opbrengst">
                  Opbrengst (kilogram)
                  <input type="text" name="opbrengst"/>
                </label>

                <label htmlFor="weer">
                  Weersomstandigheden
                  <input type="text" name="weer"/>
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
