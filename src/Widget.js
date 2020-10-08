import React from 'react';
import { WidgetItem } from './WidgetItem';
/*Шаблон для виджетов*/
export function Widget(props){
    return(
        <div className="widget">
          <h5 className="widget__title">
            <a href={props.link}>{props.title}</a>
          </h5>
          {(props.data) ?
          <ul>
            {props.data.map((item) => <WidgetItem {...item} />)}
          </ul> : null
          }
          {props.children}
        </div>
    );
}
