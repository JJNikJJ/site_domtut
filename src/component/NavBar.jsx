import React, { useState } from "react";
import "./style_component/style_NavBar.css";
import logo_light from "../media/logo_light.png";
import map_locator from "../media/map_locator.png";
import favourite from "../media/icon_favourite.png";
import search_icon from "../media/icon_search.png";
import cities from "../mock/city.json";

const NavBar = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].id);

  const handleCityChange = (e) => {
    setSelectedCity(parseInt(e.target.value, 10));
  };

  return (
    <nav>
      <ul>
        <li>
          <img src={logo_light} alt="Логотип компании DOMICTUT" />
        </li>
        <li>
          <div className="city">
            <img src={map_locator} alt="Картинка для карты" />
            <div className="list_city">
              <select
                className="select-style"
                value={selectedCity}
                onChange={handleCityChange}
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </li>
        <li>Каталог</li>
        <li>Быстрые подборки</li>
        <li>Частые вопросы</li>
        <li>Сотрудничество</li>
        <li>
          <img src={favourite} alt="Картинка понравивавших вариантов" />
        </li>
        <li>
          <div className="search">
            <img src={search_icon} alt="Поиск по сайту" />
            <div className="SearchSite">Поиск по сайту</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
