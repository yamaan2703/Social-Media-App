// import {
//   Image,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import tw from 'twrnc';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Explore() {
//   return (
//     <>
//       <View style={[tw`bg-slate-900 h-full`]}>
//         <View>
//           <Text
//             style={[
//               tw`text-white text-3xl font-bold px-1 py-2 shadow-md shadow-white text-center`,
//             ]}>
//             Explore
//           </Text>
//         </View>
//         <View style={[tw`m-2 flex flex-row items-center`]}>
//           <TextInput
//             placeholder="Search ..."
//             style={[
//               tw`border rounded-full px-5 text-white border-white flex-1`,
//             ]}
//           />
//           <TouchableOpacity
//             style={[tw`p-2 text-white bg-[#3A6A75] rounded-full mx-1`]}>
//             <Icon name="search" size={25} style={[tw``]} />
//           </TouchableOpacity>
//         </View>

//         <ScrollView>
//           <View style={[tw`flex-col justify-center p-5`]}>
//             <View style={[tw`flex-row justify-center my-2`]}>
//               <View
//                 style={[
//                   tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
//                 ]}>
//                 <View style={[tw`flex-row justify-center`]}>
//                   <Image
//                     source={require('../images/Person.png')}
//                     style={[tw`rounded-full w-[70px] h-[70px]`]}
//                   />
//                 </View>
//                 <View>
//                   <Text style={[tw`text-white py-2 text-lg`]}>
//                     William Michael
//                   </Text>
//                 </View>
//               </View>

//               <View
//                 style={[
//                   tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
//                 ]}>
//                 <View style={[tw`flex-row justify-center`]}>
//                   <Image
//                     source={require('../images/Person.png')}
//                     style={[tw`rounded-full w-[70px] h-[70px]`]}
//                   />
//                 </View>
//                 <View>
//                   <Text style={[tw`text-white py-2 text-lg`]}>
//                     William Michael
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             <View style={[tw`flex-row justify-center my-2`]}>
//               <View
//                 style={[
//                   tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
//                 ]}>
//                 <View style={[tw`flex-row justify-center`]}>
//                   <Image
//                     source={require('../images/Person.png')}
//                     style={[tw`rounded-full w-[70px] h-[70px]`]}
//                   />
//                 </View>
//                 <View>
//                   <Text style={[tw`text-white py-2 text-lg`]}>
//                     William Michael
//                   </Text>
//                 </View>
//               </View>

//               <View
//                 style={[
//                   tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
//                 ]}>
//                 <View style={[tw`flex-row justify-center`]}>
//                   <Image
//                     source={require('../images/Person.png')}
//                     style={[tw`rounded-full w-[70px] h-[70px]`]}
//                   />
//                 </View>
//                 <View>
//                   <Text style={[tw`text-white py-2 text-lg`]}>
//                     William Michael
//                   </Text>
//                 </View>
//               </View>
//             </View>

           
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

export default function Explore() {
  const [users, setUsers] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await firestore().collection('users').get();
      const usersList = usersCollection.docs.map(doc => doc.data());
      setUsers(usersList);
      setFilteredUsers(usersList);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = users.filter(user =>
        user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  return (
    <View style={[tw`bg-slate-900 h-full`]}>
      <View>
        <Text
          style={[
            tw`text-white text-3xl font-bold px-1 py-2 shadow-md shadow-white text-center`,
          ]}>
          Explore
        </Text>
      </View>
      <View style={[tw`m-2 flex flex-row items-center`]}>
        <TextInput
          placeholder="Search ..."
          style={[
            tw`border rounded-full px-5 text-white border-white flex-1`,
          ]}
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={[tw`p-2 text-white bg-[#3A6A75] rounded-full mx-1`]}>
          <Icon name="search" size={25} style={[tw``]} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={tw`p-5 flex flex-wrap flex-row justify-between`}>
          {filteredUsers.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-[48%] bg-[#3A6A75] py-5 px-2 rounded-2xl shadow-xl shadow-white mb-4`}
              onPress={() => console.log('User clicked', user.displayName)}
            >
              <View style={tw`flex-row justify-center`}>
                <Image
                  source={{ uri: user.userImg || require('../images/Person.png') }}
                  style={tw`rounded-full w-[70px] h-[70px]`}
                />
              </View>
              <View>
                <Text style={tw`text-white py-2 text-lg text-center`}>
                  {user.displayName}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
