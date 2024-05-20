import {useRoute} from '@react-navigation/native';
import {Text, TextInput, View} from 'react-native';
import tw from 'twrnc';

export default function Comments() {
  const route = useRoute();
  console.log(route.params.postId);

  return (
    <View style={tw`bg-slate-900 h-full flex justify-between`}>
      <View>
        <Text
          style={tw`text-white text-center text-3xl font-bold py-3 shadow-lg shadow-white border-b`}>
          Comments
        </Text>
      </View>

      <View style={[tw``]}>
        <View style={tw`m-2 w-full`}>
          <TextInput
            placeholder="Add Comments"
            style={tw`border-b text-white w-full border-white p-2`}
            placeholderTextColor="gray"
          />
        </View>
        <View>
          <Text style={[tw`text-white bg-[#3A6A75] text-center p-1 px-2 text-lg rounded mx-2`]}>Send</Text>
        </View>
      </View>
    </View>
  );
}
