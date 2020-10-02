import React from 'react';
/* Отображает картинку, заголовок, подзаголовок и ссылку на актуальный контент */

export function Featured(props) {
    return(
        <div className="featured">
            <a href={props.link}>
            <img className="featured__image" src={props.image}/>
            </a>
            <h5><a href={props.link}>{props.title}</a></h5>
            <p>{props.text}</p>
        </div>
    );
}
