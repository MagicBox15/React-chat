import React from 'react';
import { Message } from './Message/Message';

import './MessageList.scss';

export const MessageList = () => (
  <div className="messageList">
    <Message
      text="Кароч сегодня купила стекла"
      date={new Date(2021, 6, 2)}
    />
    <Message
      text="Для окон само собой. Ну и понеслись проблемы как ты
      понимаешь"
      date={new Date(2021, 11, 24)}
    />
    <Message
      text="Хай. Что за проблемы?"
      date={new Date(2021, 11, 26, 16, 20, 0)}
      myMessage
      isReaded
    />
  </div>
);
