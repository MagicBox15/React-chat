import React from 'react';
import classNames from 'classnames';

import present from '../../../../images/present.png';
import sympathy from '../../../../images/sympathyHearts.png';

// передать ссылки на аватарки в пропсы в юзерсчат
// сократить ссылки импорта во всех файлах
import './ChatItem.scss';

export const ChatItem = ({
  avatar = '',
  userName = '',
  text = '',
  myMessage = false,
  isActive = false,
  isGift = false,
  isSympathy = false,
}) => {
  const typeMessage = () => {
    if (isGift) {
      return (
        <>
          <img
            className="presentIcon"
            src={present}
            alt="presentIcon"
          />
          <span className="span">Отправила тебе подарок</span>
        </>
      );
    }

    if (isSympathy) {
      return (
        <>
          <img
            className="sympathyIcon"
            src={sympathy}
            alt="sympathyIcon"
          />
          <span className="span">Взаимная симпатия</span>
        </>
      );
    }

    if (myMessage) {
      return (
        <>
          <span className="myMessageSpan">Ты:&nbsp;</span>
          {text}
        </>
      );
    }

    return `${text}`;
  };

  return (
    <div className={classNames('chatItem', { chatActive: isActive })}>
      <div className="userAvatar">
        <img
          className="userAvatar__img"
          src={avatar}
          alt="userAvatar"
        />
      </div>
      <div className="chatInfo">
        <div className="chatInfo__userName">
          {userName}
        </div>
        <div className={classNames('chatInfo__lastMessage', {
          chatInfo__gift: isGift,
          chatInfo__sympathy: isSympathy,
        })}
        >
          {typeMessage()}
        </div>
      </div>
    </div>
  );
};

// {myMessage ? (
//   <span className="span">{'Ты: '}</span>
//   // {text}
// ) : (
//   // {text}
// )}
