import React from 'react';

function CardAbout() {
     return (
          <a href="#" className="card-about">
               <img src={process.env.PUBLIC_URL+'/img/about-card01.png'} alt="" />

               <div className="card-about__content">
                    <div className="card-about__content-title">Lorem ipsum dolor</div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <span className="button button--more">Bekijk al onze prijslijsten</span>
               </div>
          </a>
     )
}
export default CardAbout;