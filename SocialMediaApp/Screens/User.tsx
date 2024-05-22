import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        const userId = await AsyncStorage.getItem('userId');
        const userData = await AsyncStorage.getItem('userData');
        
        if (currentUser && userId && userData) {
          const userDoc = await firestore().collection('users').doc(userId).get();
          
          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.error('User data not found!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      // await AsyncStorage.removeItem('userId');
      console.log('User signed out!');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Error signing out: ', error);
      Alert.alert('Error signing out', error.message);
    }
  };

  const handleEditPage = () => {
    navigation.navigate('EditProfile');
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-slate-900`}>
        <Text style={tw`text-white text-2xl`}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={tw`bg-slate-900 h-full`}>
      <View style={tw`bg-[#3A6A75] py-3 px-2`}>
        <Text style={tw`text-white italic text-xl font-serif`}>WE-HUG</Text>
      </View>

      <ScrollView style={tw`mt-5`}>
        <View>
          <View style={tw`flex justify-center items-center`}>
            {userData && userData.userImg ? (
              <Image
                source={{ uri: userData.userImg }}
                style={tw`rounded-full w-[100px] h-[100px]`}
              />
            ) : (
              <Image
                source={require('../images/Person.png')}
                style={tw`rounded-full w-[70px] h-[70px]`}
              />
            )}
          </View>
          <View style={tw`my-2`}>
            <Text style={tw`text-center text-white text-3xl font-semibold`}>
              {userData ? userData.displayName : 'No name'}
            </Text>
            <Text style={tw`text-center text-white text-xl font-light`}>
              {userData ? userData.email : 'No email'}
            </Text>
          </View>
          <View style={tw`flex-row justify-center items-center`}>
            <TouchableOpacity
              style={tw`mx-auto`}
              onPress={handleEditPage}
            >
              <Text
                style={tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`mx-auto`}
              onPress={handleLogout}
            >
              <Text
                style={tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
