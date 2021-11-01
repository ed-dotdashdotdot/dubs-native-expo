import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  border: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius12: {
    borderRadius: 12,
  },
  fontFamilyCourier: {
    fontFamily: 'Courier New',
  },
  colorWhite: {
    color: 'white',
  },
  padding8: {
    padding: 8,
  },
  padding12: {
    padding: 12,
  },
  backgroundAmber: {
    backgroundColor: '#ff9900',
  },
  backgroundGreen: {
    backgroundColor: '#00aa00',
  },
  backgroundRed: {
    backgroundColor: '#aa0000',
  },
  infoInner: {
    // backgroundColor: 'magenta',
    paddingTop: 24,
    paddingRight: 12,
    paddingBottom: 0,
    paddingLeft: 12,
  },
});

export default globalStyles;
