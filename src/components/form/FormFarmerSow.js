import React from 'react';
import '../information/Information.css'
import './Form.css'
import Img from '../../assets/graanveld.jpg';
import {Link} from "react-router-dom";
import LeftArrow from "../../assets/right-arrow.svg";

function FormBakerSow() {
  return (
    <div className="form-container">
      <div className="root-container">
        <div className="center-screen-form">
          <div className="container-form">
            <div className="fixed-img" style={{backgroundImage: "url(" + Img + ")"}}/>
          </div>
          <Link className="form-back" to="/farmer">
            <img className="img-left" src={LeftArrow} alt="Back"/>
          </Link>
          <div className="complete-form">
            <div className="bakery-form">
              <form className='form' action="/farmer">
                <label htmlFor="oogst">
                  Oogstdatum
                  <input type="date" name="oogst"/>
                </label>

                <label htmlFor="image-upload">
                  Upload een foto<br/>
                  <input type="file" id='image-upload'/>
                </label>

                <label htmlFor="specs">
                  Specificaties
                  <textarea name="specs" className="description-form"/>
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

export default FormBakerSow;
