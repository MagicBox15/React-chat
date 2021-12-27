import React from 'react';
import { ChatItem } from './ChatItem/ChatItem';

import './UsersChats.scss';

export const UsersChats = () => (
  <div className="usersChats">
    <div className="usersChats">
      <ChatItem userName="Раиса" text="Ну это ни в какие рамки" myMessage />
      <ChatItem userName="Светлана" text="Взаимная симпатия" />
      <ChatItem userName="Биба" text="Та я ему то же самое сказала..." />
      <ChatItem userName="Владлена" text="Отправила тебе подарок" />
    </div>
  </div>
);
