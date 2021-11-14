import React from 'react';
import renderer from 'react-test-renderer';

import { InfoButton } from '.';

describe('InfoButton - null values', () => {

  it('renders correctly with a width of 48', () => {
    const tree = renderer.create(<InfoButton width={48} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with a width of 96', () => {
    const tree = renderer.create(<InfoButton width={96} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with no width', () => {
    const tree = renderer.create(<InfoButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});