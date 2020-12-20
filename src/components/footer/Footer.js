import React from 'react';

function Footer() {
     return (
          <footer className="footer">
               <div className="footer__curve">
                    <img src={process.env.PUBLIC_URL + '/img/footer-curve.svg'} alt="" />
               </div>

               <div className="footer__button container">
                    <a href="#" className="button button--chat">Chat met maxx</a>
               </div>

               <div className="footer__main container">
                    <div className="footer__contact">
                         <div className="footer__contact-title">Trimaxx</div>

                         <address className="footer__contact-address">Huiskensstraat 72, <br />5916 PN Venlo</address>

                         <a className="footer__contact-tel" href="tel:+31 (0)77 206 63 00">+31 (0)77 206 63 00</a><br />

                         <a className="footer__contact-email" href="mailto:info@trimaxx.nl">info@trimaxx.nl</a>
                    </div>

                    <div className="footer__menu">
                         <div className="footer__menu-title">Onze diensten</div>

                         <ul className="footer__menu-list">
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Vaste telefonie</a>
                              </li>
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Mobiele telefonie</a>
                              </li>
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Internet verbindingen</a>
                              </li>
                         </ul>
                    </div>

                    <div className="footer__menu">
                         <div className="footer__menu-title">Meer informatie</div>

                         <ul className="footer__menu-list">
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Over ons</a>
                              </li>
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Ons team</a>
                              </li>
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Contact</a>
                              </li>
                              <li className="footer__menu-item">
                                   <a href="#" className="footer__menu-link">Offerte</a>
                              </li>
                         </ul>
                    </div>

                    <div className="footer__advice">
                         <div className="footer__advice-title">Persoonlijk advies nodig?</div>

                         <div className="footer__advice-wrap">
                              <div className="footer__advice-image">
                                   <img src={process.env.PUBLIC_URL + '/img/footer.png'} alt="" />
                              </div>

                              <div className="footer__advice-content">
                                   <p>Wij zijn 24/7 bereikbaar<br /> voor onze klanten via:</p>

                                   <a className="footer__advice-tel" href="tel:+31 77 324 2333">+31 77 324 2333</a>
                              </div>
                         </div>
                    </div>

                    <div className="footer__logo">
                         <a href="#">
                              <img src={process.env.PUBLIC_URL + '/img/footer-logo.svg'} alt="" />
                         </a>
                    </div>
               </div>

               <div className="footer__copyright container">
                    <a href="#" className="footer__copyright-logo">
                         <img src={process.env.PUBLIC_URL + '/img/footer-logo-icon.svg'} alt="" />
                    </a>

                    <p>© 2020 Trimaxx. All Rights Reserved</p>

                    <ul className="footer__copyright-list">
                         <li className="footer__copyright-item">
                              <a href="#" className="footer__copyright-link">Algemene voorwaarden</a>
                         </li>
                         <li className="footer__copyright-item">
                              <a href="#" className="footer__copyright-link">Privacy statement</a>
                         </li>
                         <li className="footer__copyright-item">
                              <a href="#" className="footer__copyright-link">Cookies</a>
                         </li>
                    </ul>
               </div>
          </footer>
     )
}
export default Footer;