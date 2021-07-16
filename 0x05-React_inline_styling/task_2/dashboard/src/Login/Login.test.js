/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Login />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists());
  });

  it('should verify that the component render 2 `input` tags', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('should verify that the component render 2 `label` tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
