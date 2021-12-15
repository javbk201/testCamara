import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ImagePicker from 'react-native-image-picker';

const App = () => {

  const options = {
    title: 'Añade una nueva foto',
    takePhotoButtonTitle: 'Usar la cámara',
    chooseFromLibraryButtonTitle: 'Escoger de la galería',
    mediaType: 'photo',
    cancelButtonTitle: 'Cancelar',
    quality: 0.5,
    storageOptions: {
      skipBackup: true,
      cameraRoll: false,
    },
  };

  const onPress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        return;
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        return;
      } else if (response.customButton) {
        onPressCustomButton?.(response?.customButton)
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
          data: response.data
        };
        console.log(source);
        callback(source)
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      <Text>Camara</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f1c9c9",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
