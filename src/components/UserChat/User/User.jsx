import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

import './User.scss';
import userAvatar from '../../../images/Subtract.png';
import more from '../../../images/more.png';
import userHearts from '../../../images/userHearts.png';
// скачать иконку галочки без обрезанного края
import verified from '../../../images/verifiedIcon.png';

export const User = ({
  name = '',
  age = 0,
  favDate = new Date(),
}) => (
  <div className="user">
    <div className="user__header">
      <div className="user__block">
        <div className="user__avatar">
          <img
            className="user__img"
            src={userAvatar}
            alt="userAvatar"
          />
        </div>
        <div className="user__infoBlock">
          <div className="user__info">
            <div className="user__title">
              <img
                className="user__verified"
                src={verified}
                alt="verified_Icon"
              />
              <span className="user__name">
                {`${name}, `}
              </span>
              <span className="user__age">
                {age}
              </span>
            </div>
          </div>
          <div className="user__favInfo">
            <img
              className="user__favIcon"
              src={userHearts}
              alt="userFavIcon"
            />
            <p className="user__favText">
              Вы понравились друг другу&nbsp;
              {formatDistanceToNow(favDate, {
                addSuffix: true,
                locale: ru,
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="user__extra">
        <button className="user__extraButton" type="button">
          {/* нарисовать кнопку вместо картинки или скачать лучшее качество */}
          <img
            className="user__more"
            src={more}
            alt="userMore"
          />
        </button>
      </div>
    </div>
    <div className="user__gallery">
      photo gallery
    </div>
  </div>
);
