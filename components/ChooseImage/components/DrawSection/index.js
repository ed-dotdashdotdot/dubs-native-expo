/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import allActions from '../../../../actions';

import SectionHeading from '../SectionHeading';
import ImageGrid from '../ImageGrid';
import ImageGridError from '../ImageGridError';
import Translate from '../../../Translate';

import ucFirst from '../../../../js/helpers/ucFirst';

// axios load images into each area
// build backend to handle requests
// handle no connection
// store a number of images locally in-case there's no connection
// use loading animation for each section
// can images get loaded into app - this way, if conection goes offline they can still be used

const DrawSection = props => {
  const {
    dimensions,
    section,
  } = { ...props };

  const images = useSelector(state => state.images);

  const { imagesActions } = { ...allActions };
  const dispatch = useDispatch();

  const imagesValue = images[`section${ucFirst(section)}`];

  // const getImageCategory = category => {
  //   // online file
  //   let onlineEntriesData = [];
  //   try {
  //     axios({
  //       method: 'post',
  //       url: `http://localhost/dubs-cdn/get-thumbs.php?category=${category}`,
  //       data: JSON.stringify({
  //         session_id: 'SESSION_ID',
  //       }),
  //       timeout: 5000
  //     }).then(response => {
  //       onlineEntriesData = response.data;
  //       if (onlineEntriesData && onlineEntriesData.length > 0) {
  //         const dispatchSection = `setImagesSection${category}`;
  //         console.log('dispatchSection:');
  //         console.log(dispatchSection);
  //         if (category === 'architecture') {
  //           dispatch(imagesActions.setImagesSectionArchitecture({
  //             name: 'architecture',
  //             loading: false,
  //             loaded: true,
  //             error: false,
  //             total: 0,
  //             images: response.data,
  //           }));
  //         } else if (category === 'nature') {
  //           dispatch(imagesActions.setImagesSectionNature({
  //             name: 'nature',
  //             loading: false,
  //             loaded: true,
  //             error: false,
  //             total: 0,
  //             images: response.data,
  //           }));
  //         } else if (category === 'patterns') {
  //           dispatch(imagesActions.setImagesSectionPatterns({
  //             name: 'patterns',
  //             loading: false,
  //             loaded: true,
  //             error: false,
  //             total: 0,
  //             images: response.data,
  //           }));
  //         } else if (category === 'technology') {
  //           dispatch(imagesActions.setImagesSectionTechnology({
  //             name: 'technology',
  //             loading: false,
  //             loaded: true,
  //             error: false,
  //             total: 0,
  //             images: response.data,
  //           }));
  //         } else if (category === 'typography') {
  //           dispatch(imagesActions.setImagesSectionTypography({
  //             name: 'technology',
  //             loading: false,
  //             loaded: true,
  //             error: false,
  //             total: 0,
  //             images: response.data,
  //           }));
  //         }
  //       }
  //     }).catch(error => {
  //       // console.log('ERROR:', error);
  //     }).finally();
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (imagesValue.images.length === 0 || imagesValue.loaded === false) {
  //     getImageCategory(imagesValue.name);
  //   }
  // }, []);

  console.log(imagesValue.images)

  return (
    <View 
      key={`${imagesValue.name}`}
      style={{
        marginBottom: 12,
      }}
    >
      {!imagesValue.loaded && imagesValue.error === false ? (
        <TouchableOpacity
          data-section={imagesValue.name}
        >
          <Text>
            <Translate textKey={`chooseACategory.${imagesValue.name}`} />
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <SectionHeading 
            textKey={`chooseACategory.${imagesValue.name}`} 
          />
        </>
      )}
      {
        imagesValue.loaded && (
          <ImageGrid 
            dimensions={dimensions}
            imageList={imagesValue.images} 
          />
        )
      }
      {/* {imagesValue.error && <ImageGridError title={imagesValue.name} />} */}
    </View>
  );
};

export default DrawSection;
