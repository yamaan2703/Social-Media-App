import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem('userId');
      if (id) {
        setUserId(id);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot(
        querySnapshot => {
          const postList: any[] = [];
          querySnapshot.forEach(documentSnapshot => {
            postList.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setPosts(postList);
        },
        error => {
          console.error('Error fetching posts: ', error);
        },
      );

    return () => unsubscribe();
  }, []);

  const handleLike = async (postId: string) => {
    const postRef = firestore().collection('posts').doc(postId);
    try {
      const doc = await postRef.get();
      if (doc.exists) {
        const postData = doc.data();
        let likes = postData?.likes || [];

        if (likes.includes(userId)) {
          likes = likes.filter((id: string) => id !== userId);
        } else {
          likes.push(userId);
        }

        await postRef.update({likes});
        setPosts(prevPosts =>
          prevPosts.map(post => (post.id === postId ? {...post, likes} : post)),
        );
      }
    } catch (error) {
      console.error('Error updating likes: ', error);
    }
  };

  const isLiked = (likes: string[] = []) => likes.includes(userId);

  return (
    <View style={tw`bg-slate-900 h-full`}>
      <View style={tw`bg-[#3A6A75] py-3 px-2`}>
        <Text style={tw`text-white italic text-xl font-serif`}>WE-HUG</Text>
      </View>

      <ScrollView>
        <View style={tw`p-3`}>
          {posts.map(post => (
            <View
              key={post.id}
              style={tw`card rounded-md shadow-md shadow-white p-3 my-2`}>
              <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <View style={tw`pr-2`}>
                    <Image
                      source={require('../images/Person.png')}
                      style={tw`rounded-full w-[30px] h-[30px]`}
                    />
                  </View>
                  <View>
                    <Text style={tw`text-white`}>{post.email}</Text>
                  </View>
                </View>
                <View>
                  <Text style={tw`text-[#3A6A75] font-bold`}>Follow</Text>
                </View>
              </View>

              <View style={tw`h-[200px] my-3`}>
                <Image
                  source={{uri: post.imageUrl}}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

              <View style={tw`m-2`}>
                <Text style={tw`text-white`}>{post.caption}</Text>
              </View>
              <View style={tw`flex-row justify-around`}>
                <View style={[tw`flex-row items-center`]}>
                  <Text style={tw`text-white p-1 text-md`}>
                    {post.likes ? post.likes.length : 0}
                  </Text>
                  <TouchableOpacity onPress={() => handleLike(post.id)}>
                    <Icon
                      name="thumb-up"
                      size={25}
                      style={tw`${
                        isLiked(post.likes) ? 'text-red-500' : 'text-white'
                      }`}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Comments', {postId: post.id})
                    }>
                    <Icon
                      name="mode-comment"
                      size={25}
                      style={tw`text-white`}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
