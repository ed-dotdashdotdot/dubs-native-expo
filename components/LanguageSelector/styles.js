import { StyleSheet } from 'react-native';

const languageSelectorStyles = StyleSheet.create({
  // languageSelectorContainer: {
  //   bottom: 12,
  //   height: 48,
  //   position: 'absolute',
  //   width: '100%',
  // },
  // languageSelector: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   height: 48,
  //   width: '100%',
  // },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  flag: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  flagImage: {
    height: 46,
    width: 46,
  },
});

export default languageSelectorStyles;
