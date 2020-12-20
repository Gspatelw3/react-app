import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Banner() {
     return (
          <div className="banner container" style={{ 'backgroundImage': 'url(' + (process.env.PUBLIC_URL) + '/img/banner.png)' }}>
               <div className="banner__content">
                    <div className="banner__content-text">
                         <div className="banner__content-title">Zakelijke telefonie &amp; internet voor de beste prijs</div>

                         <Router>
                              <Link to="/" className="button button--gradient button--arrow button--white">Bereken uw prijs</Link>
                              <Link to="/" className="button button--white-outline">Ontdek onze oplossingen</Link>
                         </Router>
                    </div>
               </div>

               <div className="banner__overlay">
                    <img src={process.env.PUBLIC_URL + '/img/banner-overlay.svg'} alt="" />
               </div>
          </div>
     )
}

export default Banner;