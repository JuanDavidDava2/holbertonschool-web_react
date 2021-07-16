import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });

  it('should verify that the component render `h1` tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it('should verify that the component render `img` tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });
});
