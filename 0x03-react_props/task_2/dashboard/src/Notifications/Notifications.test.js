import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('li')).toHaveLength(3);
  });
  it('verify that Notifications renders the text Here is the list of notifications', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });
});
