import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  info: {
    color: '#f00',
    borderColor: '#fff',
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    height: '100%',
    justifyContent: 'center',
    margin: 12,
    overflow: 'scroll',
    textAlign: 'center',
    width: '100%',
  },
  infoInner: {
    paddingTop: 48,
    paddingRight: 24,
    paddingBottom: 0,
    paddingLeft: 24,
  },
  infoHeading: {
    fontFamily: 'Courier New',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bodyText: {
    color: 'white',
    fontFamily: 'Courier New',
    fontSize: 20,
    marginBottom: 24,
  }
});

export default styles;
