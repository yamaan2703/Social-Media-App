import React, { useEffect, useState } from 'react';
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

export default function Chats() {
  const [users, setUsers] = useState<any>([]); 
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await firestore().collection("users").get();
        const userList = usersCollection.docs.map(doc => doc.data());
        setUsers(userList);
        setFilteredUsers(userList); 
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]); 

  return (
    <>
      <View style={tw`bg-slate-900 h-full`}>
        <View style={tw`m-2 flex flex-row items-center`}>
          <TextInput
            placeholder="Search ..."
            placeholderTextColor="white"
            style={tw`border rounded-full px-5 text-white border-white flex-1`}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={tw`p-2 text-white bg-[#3A6A75] rounded-full mx-1`}
          >
            <Icon name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={tw`text-white font-bold px-4 py-2`}>Messages</Text>
        </View>

        <ScrollView>
          {filteredUsers.map((user: any, index: any) => (
            <TouchableOpacity key={index}>
              <View
                style={tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`}
              >
                <View>
                  <Image
                    source={{ uri: user.userImg || require('../images/Person.png') }}
                    style={tw`rounded-full w-[50px] h-[50px]`}
                  />
                </View>
                <View>
                  <Text style={tw`text-white text-xl px-3`}>
                    {user.displayName || 'Unknown User'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
