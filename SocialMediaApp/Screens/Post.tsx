import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { utils } from '@react-native-firebase/app';

export default function Post() {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);
  const [caption, setCaption] = useState('');

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response:any) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response:any) => {
      if (response.didCancel) {
        console.log('User cancelled gallery picker');
      } else if (response.errorCode) {
        console.log('Gallery Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handlePost = async () => {
    if (!imageUri) {
      Alert.alert('Please select an image');
      return;
    }

    try {
      const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const reference = storage().ref(`/images/${fileName}`);
      await reference.putFile(imageUri);
      const imageUrl = await reference.getDownloadURL();

     
      await firestore().collection('posts').add({
        caption,
        imageUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Post uploaded successfully');
      navigation.navigate('Home');
    } catch (error:any) {
      console.error('Error uploading image: ', error);
      Alert.alert('Error uploading image', error.message);
    }
  };

  return (
    <View style={tw`bg-slate-900 h-full`}>
      <View style={tw`h-full flex justify-center items-center`}>
        <View>
          <Text style={tw`text-4xl mb-10 font-extrabold text-white`}>New Post</Text>
        </View>

        <View style={tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`}>
          <View style={tw`h-[200px] my-3`}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={tw`rounded w-full h-full`} />
            ) : (
              <Image source={require('../images/dummy.jpg')} style={tw`rounded w-full h-full`} />
            )}
          </View>

          <View style={tw`flex flex-row justify-center`}>
            <TouchableOpacity onPress={openCamera} style={tw`p-2`}>
              <Icon name="photo-camera" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery} style={tw`p-2`}>
              <Icon name="image" size={25} color="white" />
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              placeholder="Add Caption"
              style={tw`border-b text-white border-white`}
              placeholderTextColor="gray"
              value={caption}
              onChangeText={setCaption}
            />
          </View>

          <TouchableOpacity onPress={handlePost} style={tw`mt-10`}>
            <Text style={tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto`}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
