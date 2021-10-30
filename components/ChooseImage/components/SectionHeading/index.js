/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Text, ScrollView, View, } from 'react-native';
// import classnames from 'classnames';

import Translate from '../../../Translate';

// import './css/index.scss';

const SectionHeading = props => {
  const {
    // children,
    // classes,
    gameStatus,
    textKey,
    // type,
    // ...rest
  } = { ...props };
  // const Component = type;

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   document
  //   //     .querySelector(`.info ${type}`)
  //   //     .focus();
  //   // }, 0);
  // }, []);

  return (
    <View
      // className={classnames(
      //   gameStatus || null,
      //   // classes,
      // )}
      // tabIndex={type === 'h2' ? '-1' : null}
      // {...rest}
      style={[
        {
          borderColor: 'white',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 2,
          borderBottomWidth: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: 12,
        }
      ]}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <Translate textKey={textKey} />
      </Text>
    </View>
  );
};

// Heading.defaultProps = {
//   type: 'h2'
// };

export default SectionHeading;
