import React, { useEffect, useRef } from 'react';
import { Image, Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ExpoFastImage from 'expo-fast-image';

import axios from 'axios';

import {
  ipAddress,
} from '../../configuration/config.json';

const Axios = ({ imageRef }) => {
  const { images } = useSelector(state => state);
  const { imagesActions } = { ...allActions };
  const dispatch = useDispatch();

  // const myContainer = useRef(null);
  
  // const getImage = async imageRef => {
  //   // online file
  //   // let onlineEntriesData = [];
  //   const imageUrl = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;
  //   console.log(imageUrl)
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       mode: 'cors',
  //       // url: `http://localhost/dubs-cdn/get-thumbs.php?category=${category}`,
  //       url: imageUrl,
  //       // data: JSON.stringify({
  //       //   session_id: 'SESSION_ID',
  //       // }),
  //       headers: {
  //         'Content-Type': 'image/jpeg'
  //       },
  //       // timeout: 5000,
  //       responseType: 'blob',
  //     })
  //     // .then(response => {
  //       const imageBlob = await response.blob;
  //       console.log(response.blob);

  //       // return [URL.createObjectURL(imageBlob), null];
       
  //     // })
  //     // .catch(error => {
  //       // console.log('ERROR:', error);
  //     // })
  //     // .finally();
  //   } 
    
  //   catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getImage('2');
  // }, []);



  // possible solution: 
  // https://javascript.tutorialink.com/how-to-fetch-and-display-an-image-from-an-express-backend-server-to-a-react-js-frontend/

  const imageUrl = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;
  // console.log(imageUrl)
  useEffect(() => {
    // console.log("myContainer...", myContainer.current);
    axios
      .get(
        imageUrl,
        { 
          responseType: "blob" 
        }
      )
      .then(response => {
        let reader = new window.FileReader();
        reader.readAsDataURL(response.data); 
        reader.onload = () => {
          const imageDataUrl = reader.result;
          // myContainer.text("uri", imageDataUrl);

          // ##### MAYBE SET THE IMAGE BLOB TO THE STATE
          dispatch(imagesActions.setImagesFetch(imageDataUrl));

          // console.log(imageDataUrl);
          // return imageDataUrl;
          // return imageDataUrl
        }
      })
  }, [imageUrl]);

  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Axios Test
      </Text>
      {/* <View
        style={{
          backgroundColor: '#0000aa40',
          borderColor: 'white',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 2,
          height: 00,
          width: 100,
        }}
      > */}
        <Image
          cacheKey={`image-${imageRef}-a12tgtggtqwe3ttasd-small`}
          style={{
            height: 50,
            width: 50,
          }}
          source={{ uri: images.fetch }}
        />
        <ExpoFastImage
          cacheKey={`image-${imageRef}-e12tt3tgtgtgrg-small`}
          style={{
            height: 50,
            width: 50,
          }}
          uri={ imageUrl }
        />
        <ExpoFastImage
          cacheKey={`image-${imageRef}-8tt7giufre345we-small`}
          style={{
            height: 50,
            width: 50,
          }}
          uri={ `http://${ipAddress.server}/dubs-cdn/image/?image=7.jpg&size=small` }
        />
      {/* </View> */}
    </View>
  )
};

export default Axios;
