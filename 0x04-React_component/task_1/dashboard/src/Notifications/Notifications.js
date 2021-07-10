import React from "react";
import PropTypes from "prop-types";

import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils";

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">
        <p>Your Notifications</p>
      </div>
      {
        displayDrawer && (
          <div className='Notifications'>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                position: 'absolute',
                right: 20,
              }}
              aria-label="close"
            >
              <img src={closeIcon} alt='close-icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
