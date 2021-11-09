// /* eslint-disable no-undef */
// import React from 'react';
// // import { render } from 'react-dom';
// import renderer from 'react-test-renderer';
// import StartButton from '.';

// describe('StartButton', () => {
//   // it('should render correctly', () => {
//   //   const propsMock = {
//   //     gameData: [],
//   //     position: null,
//   //     startTextKey: 'start'
//   //   };
//   //   // render(<StartButton {...propsMock} />);
//   //   expect(container.textContent).toMatch("Start");
//   // });
  
//   // test('renders correctly', () => {
//   //   const propsMock = {
//   //     gameData: [],
//   //     position: null,
//   //     startTextKey: 'start'
//   //   };
//   //   const tree = renderer.create(<StartButton {...propsMock} />).toJSON();
//   //   expect(tree).toMatchSnapshot();
//   // });

// });


import React from "react";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import StartButton from "./";

describe("StartButton", () => {
  const props = {
    gameData: [],
    position: null,
    startTextKey: 'start'
  };
  it("renders correctly", () => {
    const result = shallow(<StartButton {...props} />);
    expect(result).toMatchSnapshot();
  });
});
