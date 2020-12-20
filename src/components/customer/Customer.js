import React, { Component } from 'react';
import $ from 'jquery';

class Customer extends Component {
     componentDidMount() {
          $('.js-customer-slider').slick({
               rows: 0,
               infinite: false,
               slidesToShow: 5,
               responsive: [
                    {
                         breakpoint: 992,
                         settings: {
                              slidesToShow: 4,
                         }
                    },
                    {
                         breakpoint: 768,
                         settings: {
                              slidesToShow: 3,
                         }
                    },
                    {
                         breakpoint: 576,
                         settings: {
                              slidesToShow: 2,
                         }
                    }
               ]
          });
     }
     render() {
          return (
               <section className="customer container">
                    <div className="customer__title">Voor onze klanten gaan we <strong>to the maxx</strong></div>

                    <div className="customer__slider js-customer-slider">
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer01.png'} alt="" />
                              </picture>
                         </div>
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer02.png'} alt="" />
                              </picture>
                         </div>
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer03.png'} alt="" />
                              </picture>
                         </div>
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer04.png'} alt="" />
                              </picture>
                         </div>
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer04.png'} alt="" />
                              </picture>
                         </div>
                         <div className="customer__slider-slide">
                              <picture>
                                   <img src={process.env.PUBLIC_URL + '/img/customer05.png'} alt="" />
                              </picture>
                         </div>
                    </div>
               </section>

          )
     }
}
export default Customer; 