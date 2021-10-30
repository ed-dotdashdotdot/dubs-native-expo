/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import Heading from '.';

describe('Heading', () => {
  it('renders correctly', () => {
    const props = {
      gameStatus: 'game-ready',
      textKey: 'textKey',
      type: 'h2'
    };
    const tree = renderer
      .create(<Heading {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
