import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ImageDetail from '../';

describe('ImageDetail', () => {
  it(`renders correctly on small phones`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "1",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 320,
        width: 568,
      },
      image: '1'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on medium phones`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 667,
        width: 375,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on large phones`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 812,
        width: 375,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on small tablets (landscape)`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 768,
        width: 1024,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on small tablets (portrait)`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 1024,
        width: 768,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on large tablets (landscape)`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 1024,
        width: 1366,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it(`renders correctly on large tablets (portrait)`, () => {
    const initialState = { 
      game:{
        bossMode: true,
      },
      images: {
        detail: "2",
      }
    };
    const mockStore = configureStore();
    let store, wrapper;
    const props = {
      dimensions: {
        height: 1366,
        width: 1024,
      },
      image: '2'
    };
    store = mockStore(initialState);
    const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
    expect(component).toMatchSnapshot();
  });
});
