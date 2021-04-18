import React,{Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import 'slick-carousel';

class Testimonials extends Component {
    componentDidMount() {
        $('.js-review-slider').slick({
            rows: 0,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 5000,
        });
    }
    render() {

        return (
            <section className="testimonials container">
                <div className="testimonials__quote">
                    <div className="testimonials__quote-wrap">
                        <div className="testimonials__quote-title">Klantreferentie</div>

                        <div className="testimonials__quote-slider js-review-slider">
                            <div className="testimonials__quote-slide">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam semper vulputate. Integer laoreet diam sit amet neque</p>

                                <strong>Juul Reumkens  |  Rock the Web B.V.</strong>
                            </div>

                            <div className="testimonials__quote-slide">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam semper vulputate. Integer laoreet diam sit amet neque</p>

                                <strong>Juul Reumkens  |  Rock the Web B.V.</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials__content">
                    <div className="testimonials__content-text">
                        <div className="testimonials__content-title">Ook het maximale uit uw zakelijke telefonie halen?</div>

                        <Link to="#" className="button">DIRECT AANVRAGEN</Link>
                    </div>

                    <div className="testimonials__content-image">
                        <img src={process.env.PUBLIC_URL + '/img/testimonial01.png'} alt="" />
                    </div>
                </div>
            </section>

        )
    }
}
export default Testimonials;