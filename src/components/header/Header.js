import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

            if (scroll >= 200) {
                $('.header').addClass('header--fixed');
            } else {
                $('.header').removeClass('header--fixed');
            }

            if (scroll >= 350) {
                $('.header').addClass('header--active');
            } else {
                $('.header').removeClass('header--active');
            }
        });

        $('.js-menu-toggle').click(function (e) {
            e.preventDefault();
            let $el = $(this).attr('href');

            $($el).fadeToggle('fast');
            $('body, html').toggleClass('is-active');
            $('.header').toggleClass('header--open');
            $(this).toggleClass('is-active');
        });
    }

    render() {
        return (
            <header className="header container" data-component="header">
                <Link className="header__logo" to="/">
                    <img src={process.env.PUBLIC_URL + '/img/logo.svg'} />
                    <img src={process.env.PUBLIC_URL + '/img/logo-sticky.svg'} />
                </Link>

                <div className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link to="/vaste-telefonie" className="header__menu-link">Vaste telefonie</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/mobiele-telefonie" className="header__menu-link">Mobiele telefonie</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/internet" className="header__menu-link">Internet</Link>
                        </li>
                    </ul>

                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link to="/over-ons" className="header__menu-link">Over ons</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/contact" className="header__menu-link">Contact</Link>
                        </li>
                    </ul>

                    <div className="header__menu-btn">
                        <a href="#" className="button button--arrow">offerte aanvragen</a>
                    </div>
                </div>

                <a href="#nav" className="header__toggle js-menu-toggle">
                    <span>Toggle</span>
                </a>

                <div className="header__mobile" id="nav">
                    <div className="header__mobile-title">Onze diensten</div>

                    <ul className="header__mobile-list">
                        <li className="header__mobile-item">
                            <a className="header__mobile-link" href="#">Vaste telefonie</a>
                        </li>
                        <li className="header__mobile-item">
                            <a className="header__mobile-link" href="#">Mobiele telefonie</a>
                        </li>
                        <li className="header__mobile-item">
                            <a className="header__mobile-link" href="#">Internet</a>
                        </li>
                    </ul>

                    <a href="#" className="button button--sm button--secondary">Vraag offerte aan</a><br />

                    <a className="header__mobile-tel" href="tel:+31 (0)77 206 63 00"><i className="icon-tel"></i> +31 (0)77 206 63
				00</a>

                    <div className="header__mobile-wrap">
                        <ul className="header__mobile-nav">
                            <li className="header__mobile-navitem">
                                <a href="#" className="header__mobile-navlink">Over ons</a>
                            </li>
                            <li className="header__mobile-navitem">
                                <a href="#" className="header__mobile-navlink">Ons team</a>
                            </li>
                            <li className="header__mobile-navitem">
                                <a href="#" className="header__mobile-navlink">Cases</a>
                            </li>
                        </ul>

                        <div className="header__mobile-info">
                            <address className="header__mobile-address">Huiskensstraat 72, <br />5916 PN Venlo</address>

                            <a className="header__mobile-email" href="mailto:info@trimaxx.nl">info@trimaxx.nl</a>
                        </div>
                    </div>

                    <a href="#" className="header__mobile-logo">
                        <img src={process.env.PUBLIC_URL + '/logo-alt.svg'} alt="" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;