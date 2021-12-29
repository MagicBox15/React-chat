import React, { useEffect, useState } from 'react';
import { ChatItem } from './ChatItem/ChatItem';
// import avatar1 from '../../../images/1.jpg';
import avatar2 from '../../../images/2.jpg';
import avatar3 from '../../../images/3.jpg';
import avatar4 from '../../../images/4.jpg';

import './UsersChats.scss';

export const UsersChats = () => {
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
    <div className="usersChats">
      <div className="usersChats">
        <ChatItem
          avatar={data && data[0].icon}
          userName="Раиса"
          text="Хай. Что за проблемы?"
          myMessage
          isActive
        />
        <ChatItem
          avatar={avatar2}
          userName="Светлана"
          text="Взаимная симпатия"
          isSympathy
        />
        <ChatItem
          avatar={avatar3}
          userName="Биба"
          text="Та я ему то же самое сказала..."
        />
        <ChatItem
          avatar={avatar4}
          userName="Владлена"
          text="Отправила тебе подарок"
          isGift
        />
      </div>
    </div>
  );
};
