import React from 'react';
import '../information/Information.css'
import '../form/Form.css';
import Img from '../../assets/graanveld.jpg';
import LeftArrow from "../../assets/right-arrow.svg";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="form-container">
      <div className="root-container">
        <div className="center-screen">
          <div className="container">
            <div className="fixed-img" style={{backgroundImage: "url(" + Img + ")"}}/>
          </div>
          <Link className="form-back" to="/">
            <img className="img-left" src={LeftArrow} alt="Back"/>
          </Link>
          <div className="Information">
            <div className="Information_text">
              <p>Login</p>
              <form className="form">
                <input type="text" id="name" name="Name" placeholder="Name"/>
                <input type="password" id="password" name="Password" placeholder="Password"/>
              </form>
              <form className="form" action="/baker">
                <input type="submit" value="Bakker"/>
              </form>
              <form className="form" action="/farmer">
                <input type="submit" value="Boer"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
