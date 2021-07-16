import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = React.memo(function NotificationItem (props) {
  const { id, type, html, value, markAsRead } = props;
  let item;
  value
    ? item = (
      <li
        data-notification-type={ type }
        onClick={ () => markAsRead(id) }
      >
        {value}
      </li>
    ) : item = (
      <li
        data-notification-type={ type }
        dangerouslySetInnerHTML={ html }
        onClick={ () => markAsRead(id) }
      />
    );
  return item;
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {}
};

export default NotificationItem;
