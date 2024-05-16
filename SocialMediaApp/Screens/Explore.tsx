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

export default function Explore() {
  return (
    <>
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
          />
          <TouchableOpacity
            style={[tw`p-2 text-white bg-[#3A6A75] rounded-full mx-1`]}>
            <Icon name="search" size={25} style={[tw``]} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={[tw`flex-col justify-center p-5`]}>
            <View style={[tw`flex-row justify-center my-2`]}>
              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>
            </View>

            <View style={[tw`flex-row justify-center my-2`]}>
              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>
            </View>

            <View style={[tw`flex-row justify-center my-2`]}>
              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>
            </View>

            <View style={[tw`flex-row justify-center my-2`]}>
              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>

              <View
                style={[
                  tw`bg-[#3A6A75] mx-auto py-5 px-2 rounded-2xl shadow-xl shadow-white`,
                ]}>
                <View style={[tw`flex-row justify-center`]}>
                  <Image
                    source={require('../images/Person.png')}
                    style={[tw`rounded-full w-[70px] h-[70px]`]}
                  />
                </View>
                <View>
                  <Text style={[tw`text-white py-2 text-lg`]}>
                    William Michael
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
