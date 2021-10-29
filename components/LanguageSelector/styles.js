import { StyleSheet } from 'react-native';

const languageSelectorStyles = StyleSheet.create({
  languageSelectorContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    height: 48,
    width: '100%',
    position: 'absolute',
    bottom: 12,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 2,
    backgroundColor: 'red',
  },
  languageSelector: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  de: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  en: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  es: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  it: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  pt: {
    aspectRatio: 1/1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  flag: {
    height: 46,
    width: 46,
  },
});

export default languageSelectorStyles;
