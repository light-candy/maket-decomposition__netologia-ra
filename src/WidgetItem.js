import React from 'react';
/*Отображает элемент списка в виджете*/
export function WidgetItem(props){
    return(
        <li>
          <a href={props.link}>
           {(props.onair) ? <span className="tv__onair">{props.onair} </span> : null}
           {(props.program) ? <span className="tv__program">{props.program} </span> : null}
           {(props.channel) ? <span className="tv__channel">{props.channel}</span> : null}
           {(props.theme) ? <span className="popular__theme">{props.theme} </span> : null}
           {(props.subtheme) ? <span className="popular__subtheme">- {props.subtheme}</span> : null}
          </a>
        </li>
    );
}
