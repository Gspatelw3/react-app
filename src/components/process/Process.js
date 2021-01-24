import React, { Component } from 'react';

class Process extends Component {
    render() {
        return (
            <div className="process container">
                <div className="process__title">Hoe onze telecom-oplossingen uw bedrijf ontzorgen</div>

                <svg className="svg">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.705,0 C0.737,0,0.767,0.019,0.783,0.051 L0.988,0.449 C1,0.481,1,0.519,0.988,0.55 L0.783,0.949 C0.767,0.981,0.737,1,0.705,1 L0.295,1 C0.263,1,0.233,0.981,0.217,0.949 L0.012,0.549 C-0.004,0.518,-0.004,0.48,0.012,0.448 L0.217,0.05 C0.233,0.019,0.263,0,0.295,0 L0.705,0"></path></clipPath>
                </svg>

                <ul className="process__list">
                    <li className="process__list-item">
                        <div className="process__list-block">
                            <div className="process__list-hexagone" style={{ 'backgroundImage': 'url(' + (process.env.PUBLIC_URL) + '/img/process01.png' }}>
                                <picture>
                                    <img src={process.env.PUBLIC_URL + '/img/telefone-icon.svg'} alt="" />
                                </picture>

                                <strong>Vaste <br />telefonie</strong>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <a href="#" className="button button--info">MEER INFO</a>
                        </div>
                    </li>
                    <li className="process__list-item">
                        <div className="process__list-block">
                            <div className="process__list-hexagone process__list-hexagone--pink" style={{ 'backgroundImage': 'url(' + (process.env.PUBLIC_URL) + '/img/process01.png' }}>
                                <picture>
                                    <img src={process.env.PUBLIC_URL + '/img/telefone-icon.svg'} alt="" />
                                </picture>

                                <strong>Vaste <br />telefonie</strong>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <a href="#" className="button button--pink-alt">MEER INFO</a>
                        </div>
                    </li>
                    <li className="process__list-item">
                        <div className="process__list-block">
                            <div className="process__list-hexagone process__list-hexagone--purple" style={{ 'backgroundImage': 'url(' + (process.env.PUBLIC_URL) + '/img/process01.png' }}>
                                <picture>
                                    <img src={process.env.PUBLIC_URL + '/img/telefone-icon.svg'} alt="" />
                                </picture>

                                <strong>Vaste <br />telefonie</strong>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <a href="#" className="button button--purple-alt">MEER INFO</a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Process;