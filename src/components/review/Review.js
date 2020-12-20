import React, { Component } from 'react';
import $ from 'jquery';
import slick from 'slick-carousel';

class Review extends Component {
     componentDidMount() {
          $('.js-review-slider').slick( {
			rows: 0,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 5000,
		} );      
     }
     render() {
          return (
               <section className="review">
                    <svg className="svg">
                         <clipPath id="my-clip" clipPathUnits="objectBoundingBox"><path d="M0.705,0 C0.737,0,0.767,0.019,0.783,0.051 L0.988,0.449 C1,0.481,1,0.519,0.988,0.55 L0.783,0.949 C0.767,0.981,0.737,1,0.705,1 L0.295,1 C0.263,1,0.233,0.981,0.217,0.949 L0.012,0.549 C-0.004,0.518,-0.004,0.48,0.012,0.448 L0.217,0.05 C0.233,0.019,0.263,0,0.295,0 L0.705,0"></path></clipPath>
                    </svg>

                    <div className="review__image">
                         <img src={process.env.PUBLIC_URL + '/img/review.png'} alt="" />
                    </div>

                    <div className="review__content">
                         <div className="review__content-wrap">
                              <div className="review__content-title">Klantreferentie</div>

                              <div className="review__content-slider js-review-slider">
                                   <div className="review__content-slide">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam semper vulputate. Integer laoreet diam sit amet neque commodo ult</p>

                                        <strong>Juul Reumkens  |  Rock the Web B.V.</strong>
                                   </div>

                                   <div className="review__content-slide">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam semper vulputate. Integer laoreet diam sit amet neque commodo ult</p>

                                        <strong>Juul Reumkens  |  Rock the Web B.V.</strong>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section >
          )
     }
}

export default Review;