import styles from './ChatBot.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ChatBot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  return (
    <div className={clsx(styles.chat, chatVisible ? styles.active : styles.hidden)}>
      <div
        onClick={() => setChatVisible(!chatVisible)}
        className={clsx(styles.buttonChat, chatVisible ? styles.active : styles.hidden)}
      >
        Text Area
      </div>
      <div className={chatVisible ? styles.fullChatBox : styles.chatBox}>
        <div className={styles.chatBoxContainer}>
          <div className={styles.chatContainer}>
            <ul>
              <li>Bot message</li>
            </ul>
          </div>
        </div>
        <div className={styles.message}>
          <input type='text' placeholder='Contact with support'></input>
          <Button>
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
