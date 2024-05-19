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


import React, { useContext } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Config/AuthContext';
import auth from '@react-native-firebase/auth';

export default function User() {
  const navigation = useNavigation();
  const { currentUser } = useContext<any>(AuthContext);

  if (!currentUser) {
    return (
      <View style={tw`bg-slate-900 h-full flex justify-center items-center`}>
        <Text style={tw`text-white`}>Loading...</Text>
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
            {currentUser.photoURL ? (
              <Image
                source={{ uri: currentUser.photoURL }}
                style={tw`rounded-full w-[100px] h-[100px]`}
              />
            ) : (
              <View style={tw`rounded-full w-[100px] h-[100px] bg-gray-300`} />
            )}
          </View>
          <View style={tw`my-2`}>
            <Text style={tw`text-center text-white text-3xl font-semibold`}>
              {currentUser.displayName}
            </Text>
            <Text style={tw`text-center text-white text-xl font-light`}>
              {currentUser.email}
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
              onPress={() => {
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
              }}
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
