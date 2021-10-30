/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import GameHome from '.';

describe('GameHome', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GameHome />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
