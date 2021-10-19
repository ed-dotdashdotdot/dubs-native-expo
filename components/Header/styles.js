import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: '#000',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    position: 'absolute',
    top: 48,
    width: 256,
    zIndex: 100,
  },
  headerD: {
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: 'red',
    borderLeftWidth: 2,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderTopWidth: 2,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '25%',
  },
  headerU: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    width: '25%',
  },
  headerB: {
    alignContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    width: '25%',
  },
  headerS: {
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    width: '25%',
  },
});

export default styles;
