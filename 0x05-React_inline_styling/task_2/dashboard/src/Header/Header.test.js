/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Header />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists());
  });

  it('should verify that the component render `h1` tag', () => {

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should verify that the component render `img` tag', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
