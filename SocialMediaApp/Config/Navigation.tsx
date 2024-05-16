import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import Start from '../Screens/Start';
import User from '../Screens/User';
import Chats from '../Screens/Chats';
import Post from '../Screens/Post';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform, View } from 'react-native';
import Explore from '../Screens/Explore';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  // activeTintColor: 'white', 
  // inactiveTintColor: 'rgb(15, 23, 42)', 
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "rgb(15, 23, 42)",
    // color: "white"
  
  },
};

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Home" 
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" size={25} color={color}/>,
        }} 
        component={Home} 
      />
      <Tab.Screen 
        name="Explore" 
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="search" size={25} color={color}/>,
        }} 
        component={Explore} 
      />
      <Tab.Screen 
        name="Post" 
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3A6A75",
                color: "white",
                width: Platform.OS === "ios" ? 50 : 60,
                height: Platform.OS === "ios" ? 50 : 60,
                top: Platform.OS === "ios" ? -10 : -20,
                borderRadius: 50 
              }}
            >
              <Icon name="add" size={25} color="white" />
            </View>
          ),
          headerShown: false,
        }} 
        component={Post} 
      />
      <Tab.Screen 
        name="Chats" 
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="chat" size={25}  color={color}/>,
        }}  
        component={Chats} 
      />
      <Tab.Screen 
        name="User" 
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="person" size={25} color={color} />,
        }} 
        component={User} 
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
