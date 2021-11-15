import React from 'react';
import { shallow } from "enzyme";

import WhatIsBossModeCard from '../';

describe('WhatIsBossModeCard component', () => {
  it(`renders correctly in normal mode`, () => {
    const props = {
      display: 'normal'
    };
    const component = shallow(<WhatIsBossModeCard {...props} />);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly in boss mode`, () => {
    const props = {
      display: 'boss'
    };
    const component = shallow(<WhatIsBossModeCard {...props} />);
    expect(component).toMatchSnapshot();
  });
});
