/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';
import {Button, StatusBar, StyleSheet, View, Image} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';
import ImagePicker from 'react-native-image-picker';

const App: () => React$Node = () => {
  const [uri, setUri] = useState();
  const cropViewRef = useRef();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Button
          title={'Pick Image'}
          onPress={() => {
            ImagePicker.launchImageLibrary({noData: true}, response => {
              setUri(response.uri);
            });
          }}
        />
        {uri !== undefined && <CropView
          sourceUrl={uri}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) => console.warn(res)}
          keepAspectRatio
          aspectRatio={{width: 5, height: 6}}
        />}
        <Button
          title={'Get Cropped View'}
          onPress={() => {
            cropViewRef.current.saveImage(true,90);
            // cropViewRef.current.rotateImage(true)
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cropView: {
    flex: 1,
    backgroundColor: 'red'
  },
});

export default App;
