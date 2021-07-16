import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });

  it('should verify that the component render 2 `input` tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(2);
  });

  it('should verify that the component render 2 `label` tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});
