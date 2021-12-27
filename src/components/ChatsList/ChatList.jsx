import React from 'react';
import { ChatFilter } from './ChatFilter/ChatFilter';
import { FavUsers } from './FavUsers/FavUsers';
import { UsersChats } from './UsersChats/UsersChats';

import './ChatsList.scss';

export const ChatList = () => (
  <div className="chatList">
    <div className="chatList">
      <ChatFilter />
      <FavUsers />
      <UsersChats />
    </div>
  </div>
);
