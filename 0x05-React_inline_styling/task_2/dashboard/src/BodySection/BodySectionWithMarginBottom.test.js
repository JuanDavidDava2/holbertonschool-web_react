/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySectionWithMarginBottom />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('verifies that shallowing the component should render correctly BodySection and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const BodySecComponent = wrapper.find(BodySection);
    expect(BodySecComponent).toHaveLength(1);
    expect(BodySecComponent.props().title).toEqual('test title');
    expect(BodySecComponent.props().children.type).toEqual('p');
    expect(BodySecComponent.props().children.props.children).toEqual('test children node');
  });
});
