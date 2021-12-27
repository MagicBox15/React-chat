import React from 'react';
import './App.scss';
import { UserChat } from './components/UserChat/UserChat';
import { ChatList } from './components/ChatsList/ChatList';

export const App = () => (
  <div className="App">
    <ChatList />
    <UserChat />
  </div>
);
