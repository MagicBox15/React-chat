import React from 'react';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

import readed from '../../../../images/isReaded.png';
import notReaded from '../../../../images/checked.png';
import './Message.scss';

export const Message = ({
  text = '',
  date = new Date(),
  myMessage = false,
  isReaded = false,
}) => (
  <div className={classNames('message', { 'message--myMessage': myMessage })}>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">
          {text}
        </p>
      </div>
      <div className="message__date">
        {myMessage && isReaded ? (
          <span className="message__checked">
            <img
              className="message__checkedImg"
              src={readed}
              alt="checked"
            />
          </span>
        ) : (
          <span className="message__notReaded">
            <img
              className="message__notReadedImg"
              src={notReaded}
              alt="notReaded"
            />
          </span>
        )}
        {formatDistanceToNow(date, {
          addSuffix: true,
          locale: ru,
        })}
      </div>
    </div>
  </div>
);
