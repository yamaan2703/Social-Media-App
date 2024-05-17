// import React, { useContext, useState } from "react";
// import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import tw from "twrnc";
// import { useNavigation } from "@react-navigation/native";
// import { AuthContext } from "../Config/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../Config/FirebaseConfig";

// export default function User() {
//   const { currentUser }:any = useContext(AuthContext);
//   const [userName, setUserName] = useState<any>("")
//   const navigation = useNavigation();

//   return (
//     <>
//       <View style={[tw`bg-slate-900 h-full`]}>
//         <View style={[tw`bg-[#3A6A75] py-3 px-2`]}>
//           <Text style={[tw`text-white italic text-xl font-serif`]}>WE-HUG</Text>
//         </View>

//         <ScrollView style={[tw`mt-5`]}>
//           <View>
//             <View style={[tw`flex justify-center items-center`]}>
//               {/* <Image
//                 source={{ uri: currentUser.photoURL }}
//                 style={[tw`rounded-full w-[100px] h-[100px]`]}
//               /> */}
//             </View>
//             <View style={[tw`my-2`]}>
//               <Text style={[tw`text-center text-white text-3xl font-semibold`]}>
//                 {/* {currentUser.displayName} */}
//               </Text>
//               <Text style={[tw`text-center text-white text-xl font-light`]}>
//                 {currentUser.user}
//               </Text>
//             </View>
//             <View style={[tw`flex-row justify-center items-center`]}>
//               <TouchableOpacity
//                 style={[tw`mx-auto`]}
//                 // onPress={() => navigation.navigate("EditProfile")} // Assuming you have an EditProfile screen in your navigation stack
//               >
//                 <Text
//                   style={[
//                     tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`,
//                   ]}
//                 >
//                   Edit Profile
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[tw`mx-auto`]}
//                 onPress={() => {
//                   signOut(auth)
//                     .then(() => {
//                       navigation.navigate("Login"); 
//                     })
//                     .catch((error) => {
//                       console.error("Sign Out Error", error);
//                     });
//                 }}
//               >
//                 <Text
//                   style={[
//                     tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`,
//                   ]}
//                 >
//                   Logout
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// }


import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../Config/AuthContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../Config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function User() {
  const { currentUser }: any = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const docRef = doc(db, "users", currentUser.uid); 
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getData();
    }
  }, [currentUser]);

  // if (loading) {
  //   return (
  //     <View style={[tw`flex-1 justify-center items-center`]}>
  //       <ActivityIndicator size="large" color="#3A6A75" />
  //     </View>
  //   );
  // }

  return (
    <View style={[tw`bg-slate-900 h-full`]}>
      <View style={[tw`bg-[#3A6A75] py-3 px-2`]}>
        <Text style={[tw`text-white italic text-xl font-serif`]}>WE-HUG</Text>
      </View>

      <ScrollView style={[tw`mt-5`]}>
        <View>
          <View style={[tw`flex justify-center items-center`]}>
            {userData?.photoURL ? (
              <Image
                source={{ uri: userData.photoURL }}
                style={[tw`rounded-full w-[100px] h-[100px]`]}
              />
            ) : (
              <View style={[tw`rounded-full w-[100px] h-[100px] bg-gray-300`]} />
            )}
          </View>
          <View style={[tw`my-2`]}>
            <Text style={[tw`text-center text-white text-3xl font-semibold`]}>
              {userData?.displayName}
            </Text>
            <Text style={[tw`text-center text-white text-xl font-light`]}>
              {currentUser.email}
            </Text>
          </View>
          <View style={[tw`flex-row justify-center items-center`]}>
            <TouchableOpacity
              style={[tw`mx-auto`]}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text
                style={[
                  tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`,
                ]}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[tw`mx-auto`]}
              onPress={() => {
                signOut(auth)
                  .then(() => {
                    navigation.navigate("Login");
                  })
                  .catch((error) => {
                    console.error("Sign Out Error", error);
                  });
              }}
            >
              <Text
                style={[
                  tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl p-1 w-[150px] mt-2`,
                ]}
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
