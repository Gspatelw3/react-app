import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function CardAbout() {
     return (
          <Router>
               <Link to="/" className="card-about">
                    <img src={process.env.PUBLIC_URL + '/img/about-card01.png'} alt="" />

                    <div className="card-about__content">
                         <div className="card-about__content-title">Lorem ipsum dolor</div>

                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                         <span className="button button--more">Bekijk al onze prijslijsten</span>
                    </div>
               </Link>
          </Router>
     )
}
export default CardAbout;