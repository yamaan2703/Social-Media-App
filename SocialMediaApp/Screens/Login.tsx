import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/FirebaseConfig'; // Adjust the import path as necessary

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <View style={[tw`bg-slate-900 h-full flex justify-center items-center`]}>
      <View>
        <Text style={[tw`text-4xl mb-10 font-extrabold text-white`]}>
          WE-HUG
        </Text>
      </View>
      <View style={[tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`]}>
        <View>
          <Text style={[tw`text-white font-bold text-3xl my-2`]}>Login</Text>
        </View>
        <View>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={[tw`border-b text-white border-white`]}
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
          />
        </View>
        <View>
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[tw`border-b text-white border-white`]}
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
          />
        </View>
        {err && <Text style={[tw`text-red-500`]}>Invalid email or password</Text>}
        <View>
          <TouchableOpacity onPress={handleSubmit}>
            <Text
              style={[
                tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[tw`my-5`]}>
          <Text style={[tw`text-lg text-white`]}>Create Your Account.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={[tw`text-lg text-slate-900 font-bold`]}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
