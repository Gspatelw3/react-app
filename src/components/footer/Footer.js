import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Footer extends Component {
     render() {
          return (
               <Router>
                    <footer className="footer">
                         <div className="footer__curve">
                              <img src={process.env.PUBLIC_URL + '/img/footer-curve.svg'} alt="" />
                         </div>

                         <div className="footer__button container">
                              <Link to="/" className="button button--chat">Chat met maxx</Link>
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
                                             <Link to="/" className="footer__menu-link">Vaste telefonie</Link>
                                        </li>
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Mobiele telefonie</Link>
                                        </li>
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Internet verbindingen</Link>
                                        </li>
                                   </ul>
                              </div>

                              <div className="footer__menu">
                                   <div className="footer__menu-title">Meer informatie</div>

                                   <ul className="footer__menu-list">
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Over ons</Link>
                                        </li>
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Ons team</Link>
                                        </li>
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Contact</Link>
                                        </li>
                                        <li className="footer__menu-item">
                                             <Link to="/" className="footer__menu-link">Offerte</Link>
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
                                   <Link to="/">
                                        <img src={process.env.PUBLIC_URL + '/img/footer-logo.svg'} alt="" />
                                   </Link>
                              </div>
                         </div>

                         <div className="footer__copyright container">
                              <Link to="/" className="footer__copyright-logo">
                                   <img src={process.env.PUBLIC_URL + '/img/footer-logo-icon.svg'} alt="" />
                              </Link>

                              <p>© 2020 Trimaxx. All Rights Reserved</p>

                              <ul className="footer__copyright-list">
                                   <li className="footer__copyright-item">
                                        <Link to="/" className="footer__copyright-link">Algemene voorwaarden</Link>
                                   </li>
                                   <li className="footer__copyright-item">
                                        <Link to="/" className="footer__copyright-link">Privacy statement</Link>
                                   </li>
                                   <li className="footer__copyright-item">
                                        <Link to="/" className="footer__copyright-link">Cookies</Link>
                                   </li>
                              </ul>
                         </div>
                    </footer>
               </Router>
          )
     }
}
export default Footer;