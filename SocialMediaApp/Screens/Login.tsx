import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      setEmail(''); 
      setPassword(''); 
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={tw`bg-slate-900 h-full flex justify-center items-center`}>
      <View>
        <Text style={tw`text-4xl mb-10 font-extrabold text-white`}>WE-HUG</Text>
      </View>
      <View style={tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`}>
        <View>
          <Text style={tw`text-white font-bold text-3xl my-2`}>Login</Text>
        </View>
        <View>
          <TextInput
            placeholder="Enter Email"
            style={tw`border-b text-white border-white`}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="gray"
          />
        </View>
        <View>
          <TextInput
            placeholder="Enter Password"
            style={tw`border-b text-white border-white`}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="gray"
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`my-5`}>
          <Text style={tw`text-lg text-white`}>Create Your Account.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={tw`text-lg text-slate-900 font-bold`}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
