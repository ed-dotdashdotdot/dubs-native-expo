import React from 'react';
import { render } from '@testing-library/react-native';

import Header from '../';

describe('Header component', () => {
  it(`should render correctly`, () => {
    const tree = render(<Header />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
