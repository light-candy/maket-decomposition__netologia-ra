import React from 'react';
/*Отображает один популярный запрос, его категорию + ссылку*/
export function PopularWidgetItem(props){
    return(
            <li><a href={props.link}><span className="popular__theme">{props.theme}</span> - <span className="popular__subtheme">{props.subtheme}</span></a></li>
    );
}
