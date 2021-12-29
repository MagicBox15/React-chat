import React from 'react';
import smile from '../../../../images/smile.png';
import pic from '../../../../images/pic.png';
import gift from '../../../../images/gift.png';
import send from '../../../../images/send.png';

import './InputMessage.scss';

export const InputMessage = ({
  placeholder = '',
}) => (
  <div className="inputMessage">
    <input
      className="inputMessage__input"
      type="text"
      placeholder={placeholder}
      // onChange={}
    />
    <div className="inputMessage__buttons">
      <button
        className="inputMessage__smile"
        type="button"
      >
        <img
          className="inputMessage__smileIcon"
          src={smile}
          alt="smileIcon"
        />
      </button>
      <button
        className="inputMessage__pic"
        type="button"
      >
        <img
          className="inputMessage__picIcon"
          src={pic}
          alt="picIcon"
        />
      </button>
      <button
        className="inputMessage__gift"
        type="button"
      >
        <img
          className="inputMessage__giftIcon"
          src={gift}
          alt="giftIcon"
        />
      </button>
      <button
        className="inputMessage__send"
        type="button"
      >
        <img
          className="inputMessage__sendIcon"
          src={send}
          alt="sendIcon"
        />
      </button>
    </div>
  </div>
);
