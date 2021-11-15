import React from 'react';
import { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ImageDetail from '../';

describe('ImageDetail component', () => {
  describe('when level is easy', () => {
    describe('when bossMode is off', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
    describe('when bossMode is on', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'easy',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('when level is normal', () => {
    describe('when bossMode is off', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
    describe('when bossMode is on', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'normal',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('when level is hard', () => {
    describe('when bossMode is off', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: false,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
    describe('when bossMode is on', () => {
      it(`renders correctly on small phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 320,
            width: 568,
          },
          image: '1',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on medium phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 667,
            width: 375,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large phones`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 812,
            width: 375,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 768,
            width: 1024,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on small tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 768,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (landscape)`, () => {
        const initialState = { 
          game:{},
          images: {},
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1024,
            width: 1366,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
      it(`renders correctly on large tablets (portrait)`, () => {
        const initialState = { 
          game:{},
          images: {}
        };
        const mockStore = configureStore();
        let store, wrapper;
        const props = {
          bossMode: true,
          dimensions: {
            height: 1366,
            width: 1024,
          },
          image: '2',
          level: 'hard',
        };
        store = mockStore(initialState);
        const component = shallow(<Provider store={store}><ImageDetail {...props} /></Provider>);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
