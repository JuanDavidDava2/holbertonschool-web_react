import React from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

import './App.css';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.onLogoutFunction = this.onLogoutFunction.bind(this);
  }

  onLogoutFunction(e) {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onLogoutFunction);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onLogoutFunction);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
