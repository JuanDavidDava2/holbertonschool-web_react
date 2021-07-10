import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          position: 'absolute',
          right: 20,
        }}
        onClick={() => console.log('Close button has been clicked')}
        aria-label='close'
      >
        <img src={closeIcon} alt='close-icon' width='10px' />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
