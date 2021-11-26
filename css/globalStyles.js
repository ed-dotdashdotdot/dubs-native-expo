import { StyleSheet } from 'react-native';

import { 
  colours 
} from '../configuration/config.json';

const globalStyles = StyleSheet.create({
  bodyText: {
    color: colours.white,
    fontSize: 20,
    marginBottom: 12,
  },
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
  }
});

export default globalStyles;
