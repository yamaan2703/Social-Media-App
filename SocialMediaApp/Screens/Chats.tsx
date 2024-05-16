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

export default function Chats() {
  return (
    <>
      <View style={[tw`bg-slate-900 h-full`]}>
        
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

        <View>
          <Text style={[tw`text-white font-bold px-4 py-2`]}>Messages</Text>
        </View>

        <ScrollView>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                tw`m-2 flex-row items-center border p-2 shadow-sm shadow-white`,
              ]}>
              <View>
                <Image
                  source={require('../images/Person.png')}
                  style={[tw`rounded-full w-[50px] h-[50px]`]}
                />
              </View>
              <View>
                <Text style={[tw`text-white text-xl px-3`]}>
                  William Micheal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </>
  );
}
