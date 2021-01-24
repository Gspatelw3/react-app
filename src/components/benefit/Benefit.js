import React from 'react';
import CardBenefit from '../../components/card-benefit/Card-benefit';

const Benefit = () => {
    return (
        <section className="benefit container">
            <div className="benefit__title">En ja, er zijn nog meer voordelen…</div>

            <div className="benefit__list">
                <div className="benefit__list-item">
                    <CardBenefit />
                </div>
                <div className="benefit__list-item">
                    <CardBenefit />
                </div>
                <div className="benefit__list-item">
                    <CardBenefit />
                </div>
            </div>
        </section>
    )
}
export default Benefit;