import React from 'react';
import { Widget } from './Widget';
import { TVWidgetItem } from './TVWidgetItem';
/*Отображает список программ, которые сейчас в эфире*/
const onAir = [
{onair:"02.00", program:"Управление как искусство", channel:"Успех", link:"#"},
    {onair:"02.15", program:"Ночь. Мир в это время", channel:"earthTV", link:"#"},
    {onair:"02.25", program:"Андрей Вознесенский", channel:"Совершенно секретно", link:"#"},
];
export function OnAirWidget(){
    const onAirItems = onAir.map((item) => <TVWidgetItem {...item} onair="→" />);
    return(
        <Widget title="В эфире" link="#">
          <ul>
            {onAirItems}
        </ul>
         </Widget>
    );
}
