import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
  it('verify that App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
  it('verify that App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });

  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});
