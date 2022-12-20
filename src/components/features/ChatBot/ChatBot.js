import styles from './ChatBot.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '../../common/Button/Button';

const ChatBot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  return (
    <div className={clsx(styles.chat, chatVisible ? styles.active : styles.hidden)}>
      <div
        onClick={() => setChatVisible(!chatVisible)}
        className={clsx(styles.buttonChat, chatVisible ? styles.active : styles.hidden)}
      >
        Ask for help!
      </div>
      <div className={chatVisible ? styles.fullChatBox : styles.chatBox}>
        <div className={styles.chatBoxContainer}>
          <div className={styles.chatContainer}>
            <ul>
              <li>How can I help You?</li>
            </ul>
          </div>
        </div>
        <div className={styles.message}>
          <input type='text' placeholder='Contact with support'></input>
          <Button variant='small'>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
