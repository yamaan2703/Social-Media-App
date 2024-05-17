import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../Config/FirebaseConfig'; // Adjust the import path as necessary

export default function SignUp() {
  const [error, setError] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [displayName, setDisplayName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigation = useNavigation();

  const handleImageChange = (response:any) => {
    if (response.assets && response.assets.length > 0) {
      setSelectedImage(response.assets[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      const storage = getStorage();
      const storageRef = ref(storage, `images/${selectedImage.fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: selectedImage.fileName,
      });

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          setError(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              photoURL: downloadURL,
              displayName,
              email,
            });
            // await setDoc(doc(db, "usersChats", res.user.uid), {});
            navigation.navigate('Home');
          } catch (error) {
            setError(error);
          }
        }
      );
    } catch (error) {
      setError(error);
    }
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, handleImageChange);
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, handleImageChange);
  };

  return (
    <View style={[tw`bg-slate-900 h-full flex justify-center items-center`]}>
      <View>
        <Text style={[tw`text-4xl mb-10 font-extrabold text-white`]}>
          WE-HUG
        </Text>
      </View>

      <View
        style={[
          tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`,
        ]}>
        <View>
          <Text style={[tw`text-white font-bold text-3xl my-2`]}>SignUp</Text>
        </View>
        <View style={[tw`flex justify-center items-center`]}>
          <Image
            source={selectedImage ? { uri: selectedImage.uri } : require('../images/Person.png')}
            style={[tw`rounded-full w-[70px] h-[70px]`]}
          />
          <TouchableOpacity onPress={openGallery}>
            <Text style={[tw`text-white py-2`]}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Enter User Name"
            value={displayName}
            onChangeText={setDisplayName}
            style={[tw`border-b text-white border-white`]}
          />
        </View>
        <View>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={[tw`border-b text-white border-white`]}
          />
        </View>
        <View>
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[tw`border-b text-white border-white`]}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleSubmit}>
            <Text
              style={[
                tw`bg-slate-900 text-white text-center text-xl rounded-3xl p-2 w-[150px] mx-auto mt-10`,
              ]}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[tw`my-5`]}>
          <Text style={[tw`flex items-center space-x-2 text-lg text-white`]}>
            I already have an account.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[tw`text-lg text-slate-900 font-bold `]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
