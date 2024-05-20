// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
// import tw from 'twrnc';
// import { useNavigation } from '@react-navigation/native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignUp() {
//   const navigation = useNavigation();
//   const [displayName, setDisplayName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [userImg, setUserImg] = useState<any>(null);

//   const handleSignUp = async () => {
//     if (!email || !password || !displayName) {
//       Alert.alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await auth().createUserWithEmailAndPassword(email, password);
//       const userId = res.user.uid;
//       let imageUrl = '';

//       if (userImg) {
//         const fileName = userImg.fileName || new Date().getTime().toString();
//         const reference = storage().ref(`/user_images/${fileName}`);
//         await reference.putFile(userImg.uri);
//         imageUrl = await reference.getDownloadURL();
//       }
      
//       await firestore().collection('users').doc(userId).set({
//         displayName: displayName,
//         email: email,
//         userImg: imageUrl,
//       });
      
//       await AsyncStorage.setItem('users', )

      

//       console.log('User added!');
//       console.log('User account created & signed in!');
//       navigation.navigate('Home');
//     } catch (error: any) {
//       if (error.code === 'auth/email-already-in-use') {
//         Alert.alert('That email address is already in use!');
//       } else if (error.code === 'auth/invalid-email') {
//         Alert.alert('That email address is invalid!');
//       } else {
//         Alert.alert(error.message);
//       }
//     }
//   };

//   const openCamera = () => {
//     launchCamera({ mediaType: 'photo' }, (response : any) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         setUserImg(response.assets[0]);
//       }
//     });
//   };

//   const openGallery = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response : any) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         setUserImg(response.assets[0]);
//       }
//     });
//   };

//   return (
//     <View style={tw`bg-slate-900 h-full flex justify-center items-center`}>
//       <View>
//         <Text style={tw`text-4xl mb-10 font-extrabold text-white`}>WE-HUG</Text>
//       </View>

//       <View style={tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`}>
//         <View>
//           <Text style={tw`text-white font-bold text-3xl my-2`}>SignUp</Text>
//         </View>
//         <View style={tw`flex justify-center items-center`}>
//           {userImg ? (
//             <Image
//               source={{ uri: userImg.uri }}
//               style={tw`rounded-full w-[70px] h-[70px]`}
//             />
//           ) : (
//             <Image
//               source={require('../images/Person.png')}
//               style={tw`rounded-full w-[70px] h-[70px]`}
//             />
//           )}
//           <TouchableOpacity onPress={openGallery}>
//             <Text style={tw`text-white py-2`}>Upload Image</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TextInput
//             placeholder="Enter User Name"
//             style={tw`border-b text-white border-white`}
//             value={displayName}
//             onChangeText={setDisplayName}
//             placeholderTextColor="gray"
//           />
//         </View>
//         <View>
//           <TextInput
//             placeholder="Enter Email"
//             style={tw`border-b text-white border-white`}
//             value={email}
//             onChangeText={setEmail}
//             placeholderTextColor="gray"
//           />
//         </View>
//         <View>
//           <TextInput
//             placeholder="Enter Password"
//             style={tw`border-b text-white border-white`}
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//             placeholderTextColor="gray"
//           />
//         </View>
//         <View>
//           <TouchableOpacity onPress={handleSignUp}>
//             <Text style={tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`}>
//               SignUp
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={tw`my-5`}>
//           <Text style={tw`flex items-center space-x-2 text-lg text-white`}>
//             I already have an account.
//           </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={tw`text-lg text-slate-900 font-bold`}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function SignUp() {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userImg, setUserImg] = useState<any>(null);

  const handleSignUp = async () => {
    if (!email || !password || !displayName) {
      Alert.alert("Please fill in all fields");
      return;
    }

    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      const userId = res.user.uid;
      let imageUrl = '';

      if (userImg) {
        const fileName = userImg.fileName || new Date().getTime().toString();
        const reference = storage().ref(`/user_images/${fileName}`);
        await reference.putFile(userImg.uri);
        imageUrl = await reference.getDownloadURL();
      }
      
      const userData = {
        displayName: displayName,
        email: email,
        userImg: imageUrl,
        userId: uuid.v4(),
      };

      await firestore().collection('users').doc(userId).set(userData);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      await AsyncStorage.setItem('userId', JSON.stringify(userId));

      console.log('User added!');
      console.log('User account created & signed in!');
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        Alert.alert(error.message);
      }
    }
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setUserImg(response.assets[0]);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setUserImg(response.assets[0]);
      }
    });
  };

  return (
    <View style={tw`bg-slate-900 h-full flex justify-center items-center`}>
      <View>
        <Text style={tw`text-4xl mb-10 font-extrabold text-white`}>WE-HUG</Text>
      </View>

      <View style={tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`}>
        <View>
          <Text style={tw`text-white font-bold text-3xl my-2`}>SignUp</Text>
        </View>
        <View style={tw`flex justify-center items-center`}>
          {userImg ? (
            <Image
              source={{ uri: userImg.uri }}
              style={tw`rounded-full w-[70px] h-[70px]`}
            />
          ) : (
            <Image
              source={require('../images/Person.png')}
              style={tw`rounded-full w-[70px] h-[70px]`}
            />
          )}
          <TouchableOpacity onPress={openGallery}>
            <Text style={tw`text-white py-2`}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Enter User Name"
            style={tw`border-b text-white border-white`}
            value={displayName}
            onChangeText={setDisplayName}
            placeholderTextColor="gray"
          />
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
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`my-5`}>
          <Text style={tw`flex items-center space-x-2 text-lg text-white`}>
            I already have an account.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={tw`text-lg text-slate-900 font-bold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
