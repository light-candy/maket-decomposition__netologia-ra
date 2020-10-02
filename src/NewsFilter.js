import React from 'react';
/*Отображает фильтры новостей, получает из News обработчик выбора, передаёт наверх в News, какой фильтр выбран*/
export function NewsFilter(props){
    const filters = [
        {name:"Сейчас в СМИ"},
        {name:"в Германии"},
        {name:"Рекомендуем"},
    ];
    return(
        <ul className="news__filter-panel">
          {filters.map((item) => <li className={props.selected === item.name ? "news__filter active" : "news__filter"} onSelect={props.onSelect}>{item.name}</li>)}
        </ul>
    );
}
