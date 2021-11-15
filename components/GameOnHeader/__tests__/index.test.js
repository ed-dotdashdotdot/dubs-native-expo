import React from 'react';
import { shallow } from "enzyme";

import GameOnHeader from '../';

describe('GameOnHeader component', () => {
  it.each`
    bossMode | level 
    ${true}  | ${'easy'}
    ${false} | ${'easy'}
    ${true}  | ${'normal'}
    ${false} | ${'normal'}
    ${true}  | ${'hard'}
    ${false} | ${'hard'}
  `(
    "should render correctly when 'bossMode' is '$bossMode' and 'level' is '$level'",
    ({ bossMode, level }) => {
      const props = {
        bossMode,
        level,
      };
      const component = shallow(<GameOnHeader {...props} />);
      expect(component).toMatchSnapshot();
    }
  );
});
