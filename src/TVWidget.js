import React from 'react';
import { Widget } from './Widget';
import { TVWidgetItem } from './TVWidgetItem';
/*Отображает список тв-программ на ближайшее время*/
const tv = [
    {onair:"02.00", program:"ТНТ.Best", channel:"ТНТ International", link:"#"},
    {onair:"02.15", program:"Джинглики", channel:"Карусель INT", link:"#"},
    {onair:"02.25", program:"Наедине со всеми", channel:"Первый", link:"#"},
];

export function TVWidget(){
    const TVItems = tv.map((item) => <TVWidgetItem {...item} />);
    return(
        <Widget title="Телепрограмма" link="#">
            <button className="button_onair">В эфире</button>
          <ul>
            {TVItems}
        </ul>
         </Widget>
    );
}
