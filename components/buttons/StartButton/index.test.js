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
