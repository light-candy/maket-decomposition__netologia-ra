import React from 'react';
import './App.css';
import { Featured } from './Featured';
import { News } from './News';
import { ExchangeRates } from './ExchangeRates';
import { SearchMenu } from './SearchMenu';
import { SearchBar } from './SearchBar';
import { Banner } from './Banner';
import { WeatherWidget } from './WeatherWidget';
import { PopularWidget } from './PopularWidget';
import { MapWidget } from './MapWidget';
import { TVWidget }  from './TVWidget';
import { OnAirWidget } from './OnAirWidget';

function App() {
  return (
    <>
 <div className="top-panel">
   <div className="news-column">
<News />
<ExchangeRates />
    </div>
<Featured title="Работа над ошибками" text="Смотрите на Яндексе и запоминайте" image=".." link="#" />
</div>
    <SearchMenu />
 <SearchBar />
  <Banner image="#" />
      <div className="widgets">
        <div className="widgets-col">
          <WeatherWidget
    icon="#"
    mainLink="#"
    mainTemp="+17"
    currentLink="#"
    currentName="Утром"
    currentTemp="+17"
    nextLink="#"
    nextName="Днём"
    nextTemp="+20"
  />
  <PopularWidget />
        </div>
        <div className="widgets-col">
          <MapWidget />
  <TVWidget />
        </div>
        <div className="widgets-col"><OnAirWidget />
        </div>
  </div>
    </>
  );
}

export default App;
