import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native";

export default function User () {
    const navigation = useNavigation()
    return (
        <>
        <View style={[tw`bg-slate-900 h-full flex justify-center items-center`]}>
        <View>
            <Text style={[tw`text-4xl mb-10 font-extrabold text-white`]}>
                WE-HUG
            </Text>
        </View>

        <View style={[tw`p-5 bg-[#3A6A75] rounded-xl shadow-2xl shadow-slate-100 w-[300px]`]}>
        <View style={[tw`flex justify-center items-center`]}>
          <Image 
                source={require('../images/Person.png')}
                style={[tw`rounded-full w-[70px] h-[70px]`]}
                />
          </View>
          <View>
            <Text style={[tw` text-center text-white text-xl font-bold my-2`]}>William Micheal</Text>
          </View>
          <View>
            <Text style={[tw` text-center text-white text-xl my-2`]}>williammicheal@gmail.com</Text>
          </View>

          <View style={[tw`flex-row justify-around`]}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={[
                tw`bg-slate-900 text-white text-center text-lg rounded-3xl py-2 px-5 mx-auto mt-10`,
              ]}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={[
                tw`bg-slate-900 text-white text-center text-lg rounded-3xl py-2  px-5 mx-auto mt-10`,
              ]}
            >
              Logout
            </Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        </View>
        </>
    )
}