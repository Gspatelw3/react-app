import React from 'react';

const CardBenefit = () => {
    return (
        <div className="card-benefit">
            <picture>
                <img src={process.env.PUBLIC_URL + `img/benefit01.png`} alt="" />
            </picture>

            <div className="card-benefit__content">
                <p>Videovergaderingen: simpel, zonder apps</p>
            </div>
        </div>
    )
}

export default CardBenefit;