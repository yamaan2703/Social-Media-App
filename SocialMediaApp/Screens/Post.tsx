import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

export default function Post() {
  const navigation = useNavigation();

  const OpenCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      console.log(response);
    });
  };

  const OpenGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log(response);
    });
  };

  return (
    <View style={[tw`bg-slate-900 h-full`]}>
      <View style={[tw`h-full flex justify-center items-center`]}>
        <View>
          <Text style={[tw`text-4xl mb-10 font-extrabold text-white`]}>New Post</Text>
        </View>

        
   
        <View style={[tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`]}>
        <View style={[tw`h-[200px] my-3`]}>
                <Image
                  source={require('../images/image.jpg')}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

          <View style={[tw`flex flex-row justify-center`]}>
            <TouchableOpacity onPress={() => OpenCamera()} style={[tw`p-2`]}>
              <Icon name="photo-camera" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenGallery()} style={[tw`p-2`]}>
              <Icon name="image" size={25} color="white" />
            </TouchableOpacity>
          </View>

          <View>
            <TextInput placeholder="Add Caption" 
            style={[tw`border-b text-white border-white`]}
            // placeholderTextColor={[tw`text-white`]}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[tw`mt-10`]}>
            <Text style={[tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto`]}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
