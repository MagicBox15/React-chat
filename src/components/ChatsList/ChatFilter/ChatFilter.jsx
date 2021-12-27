import React from 'react';

import './ChatFilter.scss';

export const ChatFilter = () => {
  const handleSelectChange = () => {
    /* eslint-disable no-console */
    console.log('click');
  };

  return (
    <div className="chatFilter">
      <div className="chatFilter">
        <form className="chatFilter__form">
          <div className="chatFilter__custom">
            <select
              className="chatFilter__select"
              onChange={handleSelectChange}
            >
              <option value="all">Все</option>
              <option value="online">Онлайн</option>
              <option value="favourite">Вы понравились друг другу</option>
              <option value="search">Поиск</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
