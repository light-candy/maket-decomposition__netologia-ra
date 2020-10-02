import React from 'react';
import { Widget } from './Widget';
import { PopularWidgetItem } from './PopularWidgetItem';
/*Отображает список популярных тем*/
const popular = [
    {theme:"Недвижимость", subtheme:"о сталинках", link:"#"},
    {theme:"Маркет", subtheme:"люстры и светильники", link:"#"},
    {theme:"Авто.ру", subtheme:"привод 4x4 до 500 000", link:"#"}
];
export function PopularWidget(props){
    const popularItems = popular.map((item) => <PopularWidgetItem {...item} />);
    return(
        <Widget title="Посещаемое" link="#">
            <ul>
            {popularItems}
            </ul>
        </Widget>
    );
}
