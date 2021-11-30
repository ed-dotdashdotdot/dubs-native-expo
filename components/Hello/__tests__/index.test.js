import React from 'react';
import renderer, { create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render } from '@testing-library/react-native';

import Hello from '../'

describe('Hello component', () => {
  it(`should render component`, () => {
    const tree = renderer.create(<Hello />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it(`should render Hello correctly when no props are passed`, () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Hello />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
  it(`should render Hello correctly when props are passed`, () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Hello name="Ed" />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
  it(`should render the default name when no props are passed`, () => {
    const withoutProps = render(<Hello />);
    withoutProps.getByText('Hello, World!');
    expect(withoutProps.toJSON()).toMatchSnapshot();
  });
  it(`should render the name when it's passed in the props`, () => {
    const withProps = render(<Hello name="Ed" />);
    withProps.getByText('Hello, Ed');
    expect(withProps.toJSON()).toMatchSnapshot();
  });
});
