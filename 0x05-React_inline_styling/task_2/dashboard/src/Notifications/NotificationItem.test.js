/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationItem />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it('should render with correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li.props()['data-notification-type']).toEqual('default');
    expect(li.text()).toEqual('test');
  });

  it('should render with correct inner html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const li = wrapper.find('li');
    expect(li.props()['data-notification-type']).toEqual('default');
    expect(li.html()).toContain('<u>test</u>');
  });
});
