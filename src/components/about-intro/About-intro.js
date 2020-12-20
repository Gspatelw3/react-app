import React from 'react';
import CardAbout from '../../components/card-about/Card-about'

function AboutIntro() {
     return (
          <div className="about-intro container">
               <div className="about-intro__intro">
                    <h3>Daarom kiest uw bedrijf voor Trimaxx</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam
			semper vulputate. Integer laoreet diam sit amet neque commodo ultricies.</p>
               </div>

               <ul className="about-intro__list">
                    <li className="about-intro__list-item">
                         <CardAbout />
                    </li>
                    <li className="about-intro__list-item">
                         <CardAbout />
                    </li>
                    <li className="about-intro__list-item">
                         <CardAbout />
                    </li>
                    <li className="about-intro__list-item">
                         <CardAbout />
                    </li>
               </ul>
          </div>
     )
}
export default AboutIntro;