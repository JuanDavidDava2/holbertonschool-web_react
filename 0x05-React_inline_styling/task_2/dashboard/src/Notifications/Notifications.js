import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.container)}>
        <div id="menuItem" className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div id="notifications" className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt="close button"
                style={{ width: "10px", height: "10px" }}
              />
            </button>
            {listNotifications.length ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map(({ id, type, html, value }) => (
                    <NotificationItem key={id} id={id} type={type} html={html} value={value} markAsRead={this.markAsRead} />)
                  )}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '35%',
    position: 'absolute',
    top: '10px',
    right: '30px',
  },

  menuItem: {
    textAlign: 'end',
  },

  notifications: {
    position: 'relative',
    border: '2px dashed #e01d3f',
    padding: '0 0.5rem',
    margin: '1rem 0',
  },

  button: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'transparent', 
    border: 'none',
    cursor: 'pointer',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
