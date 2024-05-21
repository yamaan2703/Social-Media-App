// import React, { useEffect, useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRoute } from '@react-navigation/native';
// import tw from 'twrnc';
// import firestore from '@react-native-firebase/firestore';
// let userName = ""
// let profile_pics = ""

// export default function Comments() {
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);
//   const [userId, setUserId] = useState('');
//   const route = useRoute();
//   const { postId } = route.params;

//   useEffect(() => {
//     const fetchUserId = async () => {
//       const id = await AsyncStorage.getItem("userId");
//       const userName = await AsyncStorage.getItem("userName");
//       const profile_pics = await AsyncStorage.getItem("profile_pics");
//       if (id && userName && profile_pics) {
//         setUserId(id);
//       }
//     };

//     const fetchComments = async () => {
//       try {
//         const postDoc = await firestore().collection("posts").doc(postId).get();
//         if (postDoc.exists) {
//           const postData = postDoc.data();
//           if (postData && postData.comments) {
//             setComments(postData.comments);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching comments: ", error);
//       }
//     };

//     fetchUserId();
//     fetchComments();
//   }, [postId]);

//   const handleSendComment = async () => {
//     if (comment.trim()) {
//       const newComment = { userId, text: comment.trim(), timestamp: new Date() };
//       const updatedComments = [...comments, newComment];

//       try {
//         await firestore().collection("posts").doc(postId).update({ comments: updatedComments });
//         setComments(updatedComments);
//         setComment('');
//       } catch (error) {
//         console.error("Error updating comments: ", error);
//       }
//     }
//   };

//   return (
//     <View style={tw`bg-slate-900 h-full flex justify-between`}>
//       <View>
//         <Text style={tw`text-white text-center text-3xl font-bold py-2 shadow-md border shadow-white`}>
//           Comments
//         </Text>
//       </View>

//       <ScrollView style={tw`m-2 flex-1`}>
//         {comments.map((c:any, index) => (
//           <View key={index} style={tw`flex flex-row items-center mb-4`}>
//             <View style={tw`mr-3`}>
//               {c.userImg ? (
//                 <Image
//                   source={{ uri: c.userImg.uri }}
//                   style={tw`rounded-full w-[40px] h-[40px]`}
//                 />
//               ) : (
//                 <Image
//                   source={require('../images/Person.png')}
//                   style={tw`rounded-full w-[30px] h-[30px]`}
//                 />
//               )}
//             </View>
//             <View style={tw`bg-slate-800 p-3 m-2 rounded flex-1`}>
//               <Text style={tw`text-white`}>{c.text}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       <View style={tw`m-2 w-full`}>
//         <TextInput
//           value={comment}
//           onChangeText={setComment}
//           placeholder="Add Comment"
//           style={tw`border-b text-white w-full border-white p-1 px-2 m-2`}
//           placeholderTextColor="gray"
//         />
//         <View>
//           <TouchableOpacity onPress={handleSendComment}>
//             <Text style={tw`text-white bg-[#3A6A75] text-center p-1 px-2 text-lg rounded mx-2`}>
//               Send
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';
import firestore from '@react-native-firebase/firestore';

export default function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState<any>('');
  const [userName, setUserName] = useState<any>('');
  const [profilePics, setProfilePics] = useState<any>('');
  const route = useRoute();
  const { postId } = route.params;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        const name = await AsyncStorage.getItem('userName');
        const profilePics = await AsyncStorage.getItem('profile_pics');
        if (id || name || profilePics) {
          setUserId(id);
          setUserName(name);
          setProfilePics(profilePics);
    
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    const fetchComments = async () => {
      try {
        const postDoc = await firestore().collection('posts').doc(postId).get();
        if (postDoc.exists) {
          const postData = postDoc.data();
          if (postData && postData.comments) {
            setComments(postData.comments);
          }
        }
      } catch (error) {
        console.error('Error fetching comments: ', error);
      }
    };

    fetchUserData();
    fetchComments();
  }, [postId]);

  const handleSendComment = async () => {
    if (comment.trim()) {
      const newComment = {
        userId,
        userName,
        // userImg: { uri: profilePics },
        text: comment.trim(),
        timestamp: new Date(),
      };
      const updatedComments = [...comments, newComment];

      try {
        await firestore().collection('posts').doc(postId).update({ comments: updatedComments });
        setComments(updatedComments, newComment);
        setComment('');
      } catch (error) {
        console.error('Error updating comments: ', error);
      }
    }
  };

  return (
    <View style={tw`bg-slate-900 h-full flex justify-between`}>
      <View>
        <Text style={tw`text-white text-center text-3xl font-bold py-2 shadow-md border shadow-white`}>
          Comments
        </Text>
      </View>

      <ScrollView style={tw`m-2 flex-1`}>
        {comments.map((c:any, index:any) => (
          <View key={index} style={tw`flex flex-row items-center mb-4`}>
            <View style={tw`mr-3`}>
              {c.userImg?.uri ? (
                <Image
                  source={{ uri: c.userImg.uri }}
                  style={tw`rounded-full w-[40px] h-[40px]`}
                />
              ) : (
                <Image
                  source={require('../images/Person.png')}
                  style={tw`rounded-full w-[30px] h-[30px]`}
                />
              )}
            </View>
            <View style={tw`bg-slate-800 p-3 m-2 rounded flex-1`}>
              <Text style={tw`text-white font-bold`}>{c.userName || "Guest"}</Text>
              <Text style={tw`text-white`}>{c.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={tw`m-2 w-full`}>
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Add Comment"
          style={tw`border-b text-white w-full border-white p-1 px-2 m-2`}
          placeholderTextColor="gray"
        />
        <View>
          <TouchableOpacity onPress={handleSendComment}>
            <Text style={tw`text-white bg-[#3A6A75] text-center p-1 px-2 text-lg rounded mx-2`}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
