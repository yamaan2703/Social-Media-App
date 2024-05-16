import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  return (
    <>
      <View style={[tw`bg-slate-900 h-full`]}>
        <View style={[tw`bg-[#3A6A75] py-3 px-2`]}>
          <Text style={[tw`text-white italic text-xl font-sarif`]}>WE-HUG</Text>
        </View>

        <ScrollView>
          <View style={[tw` p-3`]}>
            <View
              style={[
                tw`card rounded-md shadow-md shadow-white p-3 my-2`,
              ]}>
              <View style={[tw`flex-row items-center justify-between`]}>
                <View style={[tw`flex-row items-center`]}>
                  <View style={[tw`pr-2`]}>
                    <Image
                      source={require('../images/Person.png')}
                      style={[tw`rounded-full w-[30px] h-[30px]`]}
                    />
                  </View>
                  <View>
                    <Text style={[tw`text-white`]}>Sam Micheal</Text>
                  </View>
                </View>
                <View>
                  <Text style={[tw`text-[#3A6A75] font-bold`]}>Follow</Text>
                </View>
              </View>

              <View style={[tw`h-[200px] my-3`]}>
                <Image
                  source={require('../images/image.jpg')}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

              <View style={[tw`flex-row justify-around`]}>
                <View>
                  <TouchableOpacity>
                    <Icon name="thumb-up" size={20} style={[tw`text-white `]} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Icon
                      name="mode-comment"
                      size={20}
                      style={[tw`text-white `]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={[
                tw`card  rounded-md shadow-md shadow-white p-3 my-2`,
              ]}>
              <View style={[tw`flex-row items-center justify-between`]}>
                <View style={[tw`flex-row items-center`]}>
                  <View style={[tw`pr-2`]}>
                    <Image
                      source={require('../images/Person.png')}
                      style={[tw`rounded-full w-[30px] h-[30px]`]}
                    />
                  </View>
                  <View>
                    <Text style={[tw`text-white`]}>Sam Micheal</Text>
                  </View>
                </View>
                <View>
                  <Text style={[tw`text-[#3A6A75] font-bold`]}>Follow</Text>
                </View>
              </View>

              <View style={[tw`h-[200px] my-3`]}>
                <Image
                  source={require('../images/image.jpg')}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

              <View style={[tw`flex-row justify-around`]}>
                <View>
                  <TouchableOpacity>
                    <Icon name="thumb-up" size={20} style={[tw`text-white `]} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Icon
                      name="mode-comment"
                      size={20}
                      style={[tw`text-white `]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={[
                tw`card  rounded-md shadow-md shadow-white p-3 my-2`,
              ]}>
              <View style={[tw`flex-row items-center justify-between`]}>
                <View style={[tw`flex-row items-center`]}>
                  <View style={[tw`pr-2`]}>
                    <Image
                      source={require('../images/Person.png')}
                      style={[tw`rounded-full w-[30px] h-[30px]`]}
                    />
                  </View>
                  <View>
                    <Text style={[tw`text-white`]}>Sam Micheal</Text>
                  </View>
                </View>
                <View>
                  <Text style={[tw`text-[#3A6A75] font-bold`]}>Follow</Text>
                </View>
              </View>

              <View style={[tw`h-[200px] my-3`]}>
                <Image
                  source={require('../images/image.jpg')}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

              <View style={[tw`flex-row justify-around`]}>
                <View>
                  <TouchableOpacity>
                    <Icon name="thumb-up" size={20} style={[tw`text-white `]} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Icon
                      name="mode-comment"
                      size={20}
                      style={[tw`text-white `]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={[
                tw`card  rounded-md shadow-md shadow-white p-3 my-2`,
              ]}>
              <View style={[tw`flex-row items-center justify-between`]}>
                <View style={[tw`flex-row items-center`]}>
                  <View style={[tw`pr-2`]}>
                    <Image
                      source={require('../images/Person.png')}
                      style={[tw`rounded-full w-[30px] h-[30px]`]}
                    />
                  </View>
                  <View>
                    <Text style={[tw`text-white`]}>Sam Micheal</Text>
                  </View>
                </View>
                <View>
                  <Text style={[tw`text-[#3A6A75] font-bold`]}>Follow</Text>
                </View>
              </View>

              <View style={[tw`h-[200px] my-3`]}>
                <Image
                  source={require('../images/image.jpg')}
                  style={[tw`rounded`, {width: '100%', height: '100%'}]}
                />
              </View>

              <View style={[tw`flex-row justify-around`]}>
                <View>
                  <TouchableOpacity>
                    <Icon name="thumb-up" size={20} style={[tw`text-white `]} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Icon
                      name="mode-comment"
                      size={20}
                      style={[tw`text-white `]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
