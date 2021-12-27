import React from 'react';

import './FavUsers.scss';

export const FavUsers = () => (
  <div className="favUsers">
    <div className="favUsers__photo">
      <img
        className="favUsers__img"
        src=""
        alt="favUsers"
      />
    </div>
    <div className="favUsers__info">
      <div className="favUsers__title">
        Ты им нравишься!
      </div>
      <div className="favUsers__text">
        Узнай, кто без ума от...
      </div>
    </div>
  </div>
);
