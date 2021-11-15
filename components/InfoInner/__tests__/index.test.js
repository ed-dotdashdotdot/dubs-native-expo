import React from 'react';
import { shallow } from "enzyme";

import InfoInner from '../';

it(`renders correctly`, () => {
  const component = shallow(<InfoInner><Text>Children</Text><Text>More children</Text></InfoInner>);
  expect(component).toMatchSnapshot();
});
