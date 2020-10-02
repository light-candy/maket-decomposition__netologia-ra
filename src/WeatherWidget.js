import React from 'react';
import { Widget } from './Widget';
/*Отображает среднюю температуру в течение дня, температуру в текущее и следующее время суток, картинку, ссылки на более подробные прогнозы*/
export function WeatherWidget(props){
    return(
<Widget title="Погода" link="#">
<div className="weather">
        <img src={props.icon} />
            <span className="weather__main"><a href={props.mainLink}>{props.mainTemp}</a></span>
        <div className="weather__sidebar">
            <a href={props.currentLink}>{props.currentName}{props.currentTemp},</a>
            <a href={props.nextLink}>{props.nextName}{props.nextTemp}</a>
        </div>
 </div>
</Widget>
    );
}
