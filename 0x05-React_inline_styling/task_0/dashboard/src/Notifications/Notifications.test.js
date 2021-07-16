import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications /> with default `displayDrawer` value (false)', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Notifications />);
  });

  it('should render correctly without `listNotifications` property', () => {
    expect(wrapper.exists());
  });

  it('should check that the menu item is being displayed', () => {
    expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
  });

  it('should check that the div.Notifications is not being displayed', () => {
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });
});

describe('<Notifications listNotifications={[]} />', () => {
  it('should render correctly when `listNotifications` property is passed as an empty array', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.exists());
    expect(wrapper.find('div.Notifications p').text()).toEqual('No new notification for now');
  });
});

describe('<Notifications /> with `displayDrawer=true`', () => {
  let wrapper;
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
  ];

  beforeAll(() => {
    wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
  });

  it('should check that the menu item is being displayed', () => {
    expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
  });

  it('should check that the div.Notifications is being displayed', () => {
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });

  it('should verify that `Notifications` renders three list items', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('should verify that `Notifications` renders the text `Here is the list of notifications`', () => {
    expect(wrapper.find('p').first().text()).toEqual('Here is the list of notifications');
  });

  it('should verify that the first `NotificationItem` element renders the right html', () => {
    expect(wrapper.find(NotificationItem).first().render().text()).toEqual('New course available');
  });
});

describe('<Notifications /> as pure component', () => {
  it("should verify that when updating the props of the component with the same list, the component doesn’t rerender", () => {
    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" }
    ];

    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );

    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdateSpy).toHaveReturnedWith(false);
    jest.restoreAllMocks();
  });

  it("should verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    const wrapper = shallow(
      <Notifications displayDrawer />
    );

    wrapper.setProps({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "default", value: "New resume available" }
      ]
    });

    expect(shouldComponentUpdateSpy).toHaveReturnedWith(true);
    jest.restoreAllMocks();
  });
});
