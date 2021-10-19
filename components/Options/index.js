import React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const Options = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (  
    <View style={[
      globalStyles.border,
      globalStyles.borderRadius8,
      styles.options,
    ]}>
      <Button
        accessibilityLabel="Back to home"
        // activeOpacity={0.5}
        color={'white'}
        title="Back to home"
        onPress={() => {
          dispatch(gameActions.setGameLevel(''));
          dispatch(gameActions.setGameStatus('game-home'));
        }}
      >
        {/* <View style={styles.options}> */}
          <Text>Hello</Text>
        {/* </View> */}
      </Button>
      {/* <View style={styles.buttonContainer}>
        <View style={styles.de}>
          <TouchableOpacity
            accessibilityLabel="Switch language to German"
            activeOpacity={0.5}
            color={'white'}
            title="German"
            >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/de.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.en}>
          <TouchableOpacity
            accessibilityLabel="Switch language to English"
            activeOpacity={0.5}
            color={'white'}
            title="English"
            >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/en.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.es}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Spanish"
            activeOpacity={0.5}
            color={'white'}
            title="Spanish"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/es.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.it}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Italian"
            activeOpacity={0.5}
            color={'white'}
            title="Italian"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/it.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.pt}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Portuguese"
            activeOpacity={0.5}
            color={'white'}
            title="Portuguese"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/pt.png')}
            />
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

export default Options;
