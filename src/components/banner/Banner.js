import React from 'react';

function Banner() {
     return (
          <div className="banner container" style={{'backgroundImage': 'url('+(process.env.PUBLIC_URL)+'/img/banner.png)'}}>
               <div className="banner__content">
                    <div className="banner__content-text">
                         <div className="banner__content-title">Zakelijke telefonie &amp; internet voor de beste prijs</div>

                         <a href="#" className="button button--gradient button--arrow button--white">Bereken uw prijs</a>
                         <a href="#" className="button button--white-outline">Ontdek onze oplossingen</a>
                    </div>
               </div>

               <div className="banner__overlay">
                    <img src={process.env.PUBLIC_URL+'/img/banner-overlay.svg'} alt="" />
               </div>
          </div>
     )
}

export default Banner;