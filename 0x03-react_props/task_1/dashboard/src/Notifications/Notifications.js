import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
