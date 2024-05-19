// import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import tw from 'twrnc';
// import {useNavigation} from '@react-navigation/native';
// import {useContext} from 'react';
// import {AuthContext} from '../Config/AuthContext';
// import auth from '@react-native-firebase/auth';

// export default function User() {
//   const navigation = useNavigation();
//   const {currentUser} = useContext<any>(AuthContext);

//   return (
//     <View style={[tw`bg-slate-900 h-full`]}>
//       <View style={[tw`bg-[#3A6A75] py-3 px-2`]}>
//         <Text style={[tw`text-white italic text-xl font-serif`]}>WE-HUG</Text>
//       </View>

//       <ScrollView style={[tw`mt-5`]}>
//         <View>
//           <View style={[tw`flex justify-center items-center`]}>
//             {/* <Image
//                 source={}
//                 style={[tw`rounded-full w-[100px] h-[100px]`]}
//               /> */}

//             <View style={[tw`rounded-full w-[100px] h-[100px] bg-gray-300`]} />
//           </View>
//           <View style={[tw`my-2`]}>
//             <Text style={[tw`text-center text-white text-3xl font-semibold`]}>
//               {/* William Micheal */}
//               {currentUser.displayName}
//             </Text>
//             <Text style={[tw`text-center text-white text-xl font-light`]}>
//               {/* william@gmail.com */}
//               {currentUser.email}

//             </Text>
//           </View>
//           <View style={[tw`flex-row justify-center items-center`]}>
//             <TouchableOpacity
//               style={[tw`mx-auto`]}
//               onPress={() => navigation.navigate('EditProfile')}>
//               <Text
//                 style={[
//                   tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`,
//                 ]}>
//                 Edit Profile
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//   style={tw`mx-auto`}
//   onPress={() => {
//     auth()
//       .signOut()
//       .then(() => {
//         console.log('User signed out!');
//         navigation.navigate('Login');
//       })
//       .catch(error => {
//         console.error('Error signing out: ', error);
//         Alert.alert('Error signing out', error.message);
//       });
//   }}
// >
//   <Text style={tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`}>
//     Logout
//   </Text>
// </TouchableOpacity>

//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function User() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userDoc = await firestore().collection('users').doc(currentUser.uid).get();
          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.error('User data not found!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    getUserData();
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Error signing out: ', error);
        Alert.alert('Error signing out', error.message);
      });
  };

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
              {userData ? userData.displayName : 'Loading...'}
            </Text>
            <Text style={tw`text-center text-white text-xl font-light`}>
              {userData ? userData.email : 'Loading...'}
            </Text>
          </View>
          <View style={tw`flex-row justify-center items-center`}>
            <TouchableOpacity
              style={tw`mx-auto`}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`mx-auto`}
              onPress={handleLogout}
            >
              <Text style={tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
