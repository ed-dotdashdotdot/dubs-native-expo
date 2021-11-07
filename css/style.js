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
  infoInner: {
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 24,
  },
  padding12: {
    padding: 12,
  },
});

export default globalStyles;
