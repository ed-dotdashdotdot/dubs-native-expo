import { StyleSheet } from 'react-native';

import { colours } from '../configuration/config.json';

const globalStyles = StyleSheet.create({
  border: {
    borderColor: colours.white,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  // borderRadius12: {
  //   borderRadius: 12,
  // },
  // fontFamilyCourier: {
  //   fontFamily: 'Courier New',
  // },
  // colorWhite: {
  //   color: colours.white,
  // },
  // padding8: {
  //   padding: 8,
  // },
  // padding12: {
  //   padding: 12,
  // },
  // backgroundAmber: {
  //   backgroundColor: '#ff9900',
  // },
  // backgroundGreen: {
  //   backgroundColor: '#00aa00',
  // },
  // backgroundRed: {
  //   backgroundColor: '#aa0000',
  // },
  infoInner: {
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 24,
  },
});

export default globalStyles;
