import React from 'react';
import renderer from 'react-test-renderer';

import Translate from '.';

describe('Translate', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Translate textKey="textkey" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
