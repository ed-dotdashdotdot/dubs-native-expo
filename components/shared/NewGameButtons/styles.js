import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  newGameButtons: {
    display: 'flex',
    alignSelf: 'center',
    width: '50%',
    maxWidth: 400,
    minWidth: 300,
  },
  newGameButtonsButton: {
    // borderWidth: 2,
    // borderColor: 'white',
    // borderStyle: 'solid',
    // borderRadius: 8,
    marginBottom: 12,
  },
  greenButton: {
    backgroundColor: 'green',
  },
  amberButton: {
    backgroundColor: 'orange',
  },
  redButton: {
    backgroundColor: 'red',
  },
});

export default styles;
