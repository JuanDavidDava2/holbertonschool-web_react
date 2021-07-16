/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

  it('should verify that the component at the very least render the text `Copyright`', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').first().text()).to.include('Copyright');
  });
});
