import React from 'react';

const NotificationItem = ({ type, value, html }) =>
  value ?
    <li data-notification-type={type}>{value}</li>
    :
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>

export default NotificationItem;
