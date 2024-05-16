import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';

export default function SignUp() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const OpenCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log(response);
    });
  };

  const OpenGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log(response);
    });
  };

  const SignUp = () => {
    firestore()
  .collection('Users')
  .add({
    userName: setUserName,
    email: setEmail,
    password: setPassword,
  })
  .then(() => {
    console.log('User added!');
  });
  }
  return (
    <>
      <View style={[tw`bg-slate-900 h-full flex justify-center items-center`]}>
        <View>
          <Text style={[tw`text-4xl mb-10 font-extrabold text-white`]}>
            WE-HUG
          </Text>
        </View>

        <View
          style={[
            tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`,
          ]}>
          <View>
            <Text style={[tw`text-white font-bold text-3xl my-2`]}>SignUp</Text>
          </View>
          <View style={[tw`flex justify-center items-center`]}>
            <Image
              source={require('../images/Person.png')}
              style={[tw`rounded-full w-[70px] h-[70px]`]}
            />
            <TouchableOpacity onPress={() => OpenGallery()}>
              <Text style={[tw`text-white py-2`]}>Upload Image</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Enter User Name"
              style={[tw`border-b text-white border-white`]}
              // placeholderTextColor={[tw`text-white`]}
              value={userName}
              onChangeText={(e) => setUserName(e)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter Email"
              style={[tw`border-b text-white border-white`]}
              // placeholderTextColor={[tw`text-white`]}
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter Password"
              style={[tw`border-b text-white border-white`]}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => SignUp()}>
              <Text
                style={[
                  tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`,
                ]}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[tw`my-5`]}>
            <Text style={[tw`flex items-center space-x-2 text-lg text-white`]}>
              I have already and Account.
            </Text>
            <TouchableOpacity
              style={[tw``]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={[tw`text-lg text-slate-900 font-bold `]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
