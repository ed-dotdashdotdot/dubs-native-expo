import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import axios from 'axios';

import { useSelector } from 'react-redux';
// import allActions from '../../../../actions';

import ChooseImageSectionHeading from '../ChooseImageSectionHeading';
import ChooseImageDrawGrid from '../ChooseImageDrawGrid';
// import ChooseImageGridError from '../ChooseImageGridError';
import Translate from '../../../Translate';

import { ucFirst } from '../../../../js/helpers/ucFirst';

// axios load images into each area
// build backend to handle requests
// handle no connection
// store a number of images locally in-case there's no connection
// use loading animation for each section
// can images get loaded into app - this way, if conection goes offline they can still be used

const ChooseImageDrawSection = ({ dimensions, section }) => {
  const { images } = useSelector(state => state);

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

  return (
    <View
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
        <ChooseImageSectionHeading 
          textKey={`chooseACategory.${imagesValue.name}`} 
        />
      )}
      {
        imagesValue.loaded && (
          <ChooseImageDrawGrid 
            dimensions={dimensions}
            imageList={imagesValue.images} 
          />
        )
      }
      {/* {imagesValue.error && <ChooseImageGridError title={imagesValue.name} />} */}
    </View>
  );
};

export default ChooseImageDrawSection;
