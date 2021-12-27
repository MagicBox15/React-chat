import React from 'react';
// передать ссылки на аватарки в пропсы в юзерсчат
// сократить ссылки импорта во всех файлах
import Avatar from '../../../../images/Subtract.png';

import './ChatItem.scss';

export const ChatItem = ({
  userAvatar = '',
  userName = '',
  text = '',
  myMessage = false,
}) => (
  <div className="chatItem">
    <div className="userAvatar">
      <img
        className="userAvatar__img"
        src={Avatar}
        alt=""
      />
    </div>
    <div className="chatInfo">
      <div className="chatInfo__userName">
        {userName}
      </div>
      <div className="chatInfo__lastMessage">
        {myMessage ? (
          <>
            <span className="span">{'Ты: '}</span>
            {text}
          </>
        ) : (
          `${text}`
        )}
      </div>
    </div>
  </div>
);

// {myMessage ? (
//   <span className="span">{'Ты: '}</span>
//   // {text}
// ) : (
//   // {text}
// )}
