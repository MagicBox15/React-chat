import React, { useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

import './User.scss';

import photo1 from '../../../images/gallery1.jpg';
import photo2 from '../../../images/gallery2.jpg';
import photo3 from '../../../images/gallery3.jpg';
import photo4 from '../../../images/gallery4.jpg';
import more from '../../../images/more.png';
import userHearts from '../../../images/userHearts.png';
import arrow from '../../../images/galleryArrow.png';
// скачать иконку галочки без обрезанного края
import verified from '../../../images/verifiedIcon.png';

export const User = ({
  name = '',
  age = 0,
  favDate = new Date(),
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = 'https://ice.dating/get_data.js';

    const getData = async() => {
      const response = await fetch(url);
      const result = await response.text();

      // eslint-disable-next-line no-eval
      setData(eval(result));
    };

    getData();
  }, []);

  return (
    <div className="user">
      <div className="user__header">
        <div className="user__block">
          <div className="user__avatar">
            <img
              className="user__img"
              src={data && data[0].icon}
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
                  {name}
                  {/* {`${data && data[0].name}, `} */}
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
            <img
              className="user__more"
              src={more}
              alt="userMore"
            />
          </button>
        </div>
      </div>

      <div className="user__gallery">
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo1}
            alt="photo1"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo2}
            alt="photo2"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo3}
            alt="photo3"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo4}
            alt="photo4"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo1}
            alt="photo1"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo2}
            alt="photo2"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo3}
            alt="photo3"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo4}
            alt="photo4"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo1}
            alt="photo1"
          />
        </div>
        <div className="user__photo">
          <img
            className="user__galleryImg"
            src={photo2}
            alt="photo2"
          />
        </div>
        <button
          className="user__galleryButton"
          type="button"
        >
          <img
            className="user__galleryButtonImg"
            src={arrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
