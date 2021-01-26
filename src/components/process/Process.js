import React, { Component } from 'react';

const processData = [
    {
        id: 1,
        title: 'Vaste \ntelefonie',
        icon: `${process.env.PUBLIC_URL}/img/telefone-icon.svg`,
        image: `${process.env.PUBLIC_URL}/img/process01.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        btnLabel: 'MEER INFO',
        btnLink: '#',
        ColorStyle: 'cyan'
    },
    {
        id: 2,
        title: 'Vaste \ntelefonie',
        icon: `${process.env.PUBLIC_URL}/img/telefone-icon.svg`,
        image: `${process.env.PUBLIC_URL}/img/process01.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        btnLabel: 'MEER INFO',
        btnLink: '#',
        ColorStyle: 'pink'
    },
    {
        id: 3,
        title: 'Vaste \ntelefonie',
        icon: `${process.env.PUBLIC_URL}/img/telefone-icon.svg`,
        image: `${process.env.PUBLIC_URL}/img/process01.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        btnLabel: 'MEER INFO',
        btnLink: '#',
        ColorStyle: 'purple'
    }
]

const newData = processData.map((val, index) => {
    return <li key={val.id} className="process__list-item">
        <div className="process__list-block">
            <div className="process__list-hexagone" style={{ 'backgroundImage': `url(${val.image})`}}>
                <picture>
                    <img src={val.icon} alt="" />
                </picture>

                <strong>{val.title.replace('\n',`<br>`)}</strong>
            </div>

            <p>{val.description}</p>

            <a href={val.btnLink} className="button button--info">{val.btnLabel}</a>
        </div>
    </li>
});

class Process extends Component {
    render() {
        return (
            <div className="process container">
                <div className="process__title">Hoe onze telecom-oplossingen uw bedrijf ontzorgen</div>

                <svg className="svg">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.705,0 C0.737,0,0.767,0.019,0.783,0.051 L0.988,0.449 C1,0.481,1,0.519,0.988,0.55 L0.783,0.949 C0.767,0.981,0.737,1,0.705,1 L0.295,1 C0.263,1,0.233,0.981,0.217,0.949 L0.012,0.549 C-0.004,0.518,-0.004,0.48,0.012,0.448 L0.217,0.05 C0.233,0.019,0.263,0,0.295,0 L0.705,0"></path></clipPath>
                </svg>

                <ul className="process__list">
                    {newData}
                </ul>
            </div>
        )
    }
}
export default Process;