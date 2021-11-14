import React from 'react';
import renderer from 'react-test-renderer';

import WhatIsBossModeCardEquals from '../';

describe('WhatIsBossModeCardEquals', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WhatIsBossModeCardEquals />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
