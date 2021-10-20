import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  info: {
    backgroundColor: '#666',
    // color: '#f00',
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
    color: 'white',
    // fontFamily: 'Courier New',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bodyText: {
    color: 'white',
    // fontFamily: 'Courier New',
    fontSize: 20,
    marginBottom: 24,
  },
  container: {
    width: 144,
    height: 144,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
    marginTop: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: 'absolute',
    // left: 12,
    // top: 0,
    // width: 144,
    // height: 144,
    // paddingVertical: 72,
    // paddingHorizontal: 72,
    resizeMode: "cover",
    width: 144,
    height: 72,
    // backgroundRepeat: 'repeat',
    // alignSelf: "flex-start"
    top: undefined,
  }
});

export default styles;
