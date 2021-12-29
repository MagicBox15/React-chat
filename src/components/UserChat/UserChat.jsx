import React from 'react';
import { User } from './User/User';
import { MessageList } from './MessageList/MessageList';

import './UserChat.scss';

export const UserChat = () => (
  <div className="userChat">
    <div className="userChat">
      <User
        name="Раиса&nbsp;"
        age={24}
        favDate={new Date(2021, 11, 25)}
      />
      <MessageList />
    </div>
  </div>
);
