import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import LoaderKit from 'react-native-loader-kit';

export default function Post() {
  const navigation:any = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [loading, setLoading] = useState<any>(false);

  const openCamera = () => {
    const options: CameraOptions = { mediaType: 'photo' };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.error('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    const options: ImageLibraryOptions = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled gallery picker');
      } else if (response.errorCode) {
        console.error('Gallery Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handlePost = async () => {
    setLoading(true);
    if (!imageUri) {
      Alert.alert('Please select an image');
      return;
    }

    const currentUser = auth().currentUser;
    if (!currentUser) {
      Alert.alert('No user is logged in');
      return;
    }

    try {
      const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const reference = storage().ref(`/images/${fileName}`);
      await reference.putFile(imageUri);

      const imageUrl = await reference.getDownloadURL();

      const userId = await AsyncStorage.getItem('userId');
      const userDataString = await AsyncStorage.getItem('userData');
      const userData = userDataString ? JSON.parse(userDataString) : {};

      const newPost:any = {
        displayName: userData.displayName || currentUser.displayName,
        userImg: userData.userImg || currentUser.photoURL,
        email: currentUser.email,
        caption,
        imageUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
        postId: uuid.v4(),
        userId,
        likes: [],
        comments: [],
      };

     
      await firestore().collection('posts').doc(newPost.postId).set(newPost);
      
      const storedPostsString = await AsyncStorage.getItem('userPosts');
      const storedPosts = storedPostsString ? JSON.parse(storedPostsString) : [];

      storedPosts.push(newPost);
      await AsyncStorage.setItem('userPosts', JSON.stringify(storedPosts));

      Alert.alert('Post uploaded successfully');
      navigation.navigate('Home');
    } catch (error: any) {
      console.error('Error uploading image: ', error);
      Alert.alert('Error uploading image', error.message);
    }
    finally {
      setLoading(false);
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

        {loading && (
        <View style={tw`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50`}>
          <LoaderKit
            style={{ width: 100, height: 100 }}
            name={'BallClipRotatePulse'} 
            color={'#3A6A75'} 
          />
        </View>
      )}
      </View>
    </View>
  );
}
