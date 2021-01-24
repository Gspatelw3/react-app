import React from 'react';

const PhotoContent = () => {
    return (
        <section className="photo-content">
            <div className="photo-content__row container">
                <div className="photo-content__photo">
                    <div className="photo-content__photo-element"></div>

                    <div className="photo-content__photo-picture">
                        <img src="https://test.project-example.com/20201103-454/wp-content/uploads/photo-content01.png" alt="" />
                    </div>
                </div>

                <div className="photo-content__content">
                    <div className="photo-content__content-align">
                        <h5>Telefooncentrale: het nieuwe werken</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra fringilla. Donec aliquam semperLorem ipsum</p>
                        <ul>
                            <li>Ontwikkeld voor flexwerken</li>
                            <li>In de cloud of lokaal geïnstalleerd</li>
                            <li>Eenvoudig te installeren en te beheren</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="photo-content__row container">
                <div className="photo-content__photo">
                    <div className="photo-content__photo-element"></div>

                    <div className="photo-content__photo-picture">
                        <img src="https://test.project-example.com/20201103-454/wp-content/uploads/photo-content02.png" alt="" />
                    </div>
                </div>

                <div className="photo-content__content">
                    <div className="photo-content__content-align">
                        <h5>VoIP: vrijheid en flexibiliteit</h5>
                        <p>Met zakelijke VoIP-apps kunt u klanten doorverbinden naar collega’s zonder dat u hen hoeft te vragen een ander nummer te bellen.</p>
                        <ul>
                            <li>Vast nummer op mobiel met VoIP voor Android en iOS</li>
                            <li>Overal bellen met uw eigen nummer</li>
                            <li>Gemakkelijk in gebruik en beheer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="photo-content__row container">
                <div className="photo-content__photo">
                    <div className="photo-content__photo-element"></div>

                    <div className="photo-content__photo-picture">
                        <img src="https://test.project-example.com/20201103-454/wp-content/uploads/photo-content03.png" alt="" />			
                    </div>
                </div>

                <div className="photo-content__content">
                    <div className="photo-content__content-align">
                        <h5>CRM-integratie: weet wie belt</h5>
                        <p>Met CRM verkrijgt u een totaalinzicht in uw belbestand. U zult gelukkiger klanten hebben, meer oproepen afhandelen en meer verkopen!</p>
                        <ul>
                            <li>Weet wie er belt voordat u de telefoon opneemt</li>
                            <li>Bespaar tijd en laat een goede indruk achter</li>
                            <li>Automatisch nieuwe klantrecords</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PhotoContent;