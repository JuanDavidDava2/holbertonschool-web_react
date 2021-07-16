import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    '\_\_html': PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
});

export default NotificationItemShape;
