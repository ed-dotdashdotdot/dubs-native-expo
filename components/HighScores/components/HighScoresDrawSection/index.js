import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import HighScoresSectionHeading from '../HighScoresSectionHeading';
import HighScoresGrid from '../HighScoresGrid';

import { ucFirst } from '../../../../js/helpers/ucFirst';

// axios load images into each area
// build backend to handle requests
// handle no connection
// store a number of images locally in-case there's no connection
// use loading animation for each section
// can images get loaded into app - this way, if conection goes offline they can still be used

const HighScoresDrawSection = props => {
  const {
    dimensions,
    section,
  } = { ...props };

  const duration = useSelector(state => state.duration);

  const { imagesActions } = { ...allActions };
  const dispatch = useDispatch();

  // const imagesValue = section;

  const highScoresFilter = duration.highScores.filter(val => {
    return val.indexOf(`${section}--`) !== -1;
  });
  // console.log(highScoresFilter);
  // console.log('---');


  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  // var myArray = ['1_Document', '11_Document', '2_Document'];
  // console.log(highScoresFilter.sort(collator.compare));

  // highScoresFilter.sort();




  let highScoresList;

  if (highScoresFilter.length !== 0) {
    // build object
    highScoresList = highScoresFilter.map(val => {
      return {
        duration: val.split('--')[0],
        image: val.split('--')[2],
      };
    });
  }

  // console.log(highScoresList);
  // console.log(highScoresList.length);
  // console.log('---');

  // const highScoresList123 = [
  //   {
  //     image: '1',
  //     duration: '22.22'
  //   },
  //   {
  //     image: '2',
  //     score: '33.33'
  //   },
  //   {
  //     image: '3',
  //     score: '1:44.44'
  //   },
  //   {
  //     image: '4',
  //     score: '3:01.22'
  //   },
  // ];

  return highScoresFilter.length !== 0 ? (
    <View 
      style={{
        marginBottom: 12,
      }}
    >
      <HighScoresSectionHeading 
        textKey={section} 
      />
      <HighScoresGrid 
        dimensions={dimensions}
        highScoresList={highScoresList} 
        section={section}
      />
    </View>
  ) : null;
};

export default HighScoresDrawSection;
