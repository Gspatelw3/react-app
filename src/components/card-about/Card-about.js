import React from 'react';
import { Link } from 'react-router-dom';

function CardAbout() {
    return (
        <Link to="/" className="card-about">
            <img src={process.env.PUBLIC_URL + '/img/about-card01.png'} alt="" />

            <div className="card-about__content">
                <div className="card-about__content-title">Lorem ipsum dolor</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <span className="button button--more">Bekijk al onze prijslijsten</span>
            </div>
        </Link>
    )
}
export default CardAbout;