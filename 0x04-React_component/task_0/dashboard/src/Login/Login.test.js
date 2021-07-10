import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('<Login />', () => {
  it('Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('verify that App renders a div with the class login', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('div.login')).toHaveLength(1);
  });
  it('Verify that the components render 2 input', () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find('div.login input')).toHaveLength(2);
  });
  it('Verify that the components render 2 label', () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find('div.login label')).toHaveLength(2);
  });
});
