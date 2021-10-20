import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  languageSelectorContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    height: 52,
    width: '100%',
    position: 'absolute',
    bottom: 24,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
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
    // boxSizing: 'border-box',
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

export default styles;
