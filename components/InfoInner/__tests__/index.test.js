import React from 'react';
import { shallow } from "enzyme";

import InfoInner from '../';

describe('InfoInner component', () => {
  it(`renders correctly with no children`, () => {
    const component = shallow(<InfoInner />);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with one child`, () => {
    const component = shallow(<InfoInner><Text>Child</Text></InfoInner>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly with multiple children`, () => {
    const component = shallow(<InfoInner><Text>Child</Text><Text>Another child</Text></InfoInner>);
    expect(component).toMatchSnapshot();
  });
});
