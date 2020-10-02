import React from 'react';
import { ExchangeRatesItem } from './ExchangeRatesItem';
const rates = [
{currency:"USD MOEX", rate:63.52, growth:"+0.09", link:"#"},
{currency:"EUR MOEX", rate:70.86, growth:"+0.14", link:"#"},
{currency:"НЕФТЬ", rate:64.90, growth:"+1.63%", link:"#"}
];
/*Отображает данные о курсах валют в виде списка*/
export function ExchangeRates(){
    const exchangeRates = rates.map((item) => <ExchangeRatesItem {...item} />);
return(
<ul className="exchange-rates">
{exchangeRates}
<li><a href="#">...</a></li>
</ul>
);
}
