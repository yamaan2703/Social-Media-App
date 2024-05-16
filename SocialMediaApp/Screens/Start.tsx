import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc"

export default function Start () {
    const navigation = useNavigation()
    return (
        // Displat Screen 
        <>
        <View style={[tw`bg-slate-900 h-full flex justify-center items-center`]}>
            <View>
                <Image 
                source={require('../images/Frame.png')}
                style={[tw``]}
                />
            </View>
            <View>
                <Text style={[tw`text-white text-2xl py-1 text-center`]}>Welcom to</Text>
                <Text style={[tw`text-white text-5xl py-1 font-extrabold text-center`, { fontFamily: "Salsa-Regular" }]}>WE-HUG</Text>

            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={[
                tw`bg-[#3A6A75] text-white text-center text-xl rounded-3xl py-3 w-48 mx-auto mt-10`,
              ]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
            </View>
        </View>
        </>
    )
}