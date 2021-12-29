import React, { useState, useEffect } from 'react';
import { Message } from './Message/Message';
import { InputMessage } from './InputMessage/InputMessage';

import './MessageList.scss';

export const MessageList = () => {
  const url = 'https://ice.dating/get_data.js';
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async() => {
      const response = await fetch(url);
      const result = await response.text();

      // eslint-disable-next-line no-eval
      setData(eval(result));
    };

    getData();
  }, []);

  return (
    <div className="messageList">
      <div className="messageList__list">
        <Message
          className="messageList__message"
          name={data && data[0].name}
          text="Кароч сегодня купила стекла"
          date={new Date(2021, 6, 2)}
        />
        <Message
          text="Для окон, само собой. Ну и понеслось, как ты понимаешь"
          date={new Date(2021, 8, 2)}
        />
        <Message
          text="Хай. Что за проблемы?"
          date={new Date(2021, 11, 2)}
          myMessage
          isReaded
        />
      </div>
      <div className="messageList__input">
        <InputMessage
          placeholder="Твое сообщение... (Enter чтобы отправить)"
        />
      </div>
    </div>
  );
};
