import React from 'react';

const CardProcess = (props) => {
    return (
        <div className="card-process" key={props.unId}>
            <div className={`card-process__hexagone`+ (props.exClass)} style={{ 'backgroundImage': `url(${props.imageSrc})`}}>
                <picture>
                    <img src={props.iconSrc} alt="" />
                </picture>

                <strong>{props.title}</strong>
            </div>

            <p>{props.description}</p>

            <a href={props.btnLink} className="button button--info">{props.btnLabel}</a>
        </div>
    )
}

export default CardProcess;