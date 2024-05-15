import React from 'react';
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
import tw from 'twrnc';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        
        backgroundColor: "gray",
        activeTintColor: 'pink',
        inactiveTintColor: 'red',
        labelStyle: tw`text-red-500 font-bold`, // Text color for tab labels
      }}
    >
      <Tab.Screen 
        name="Home" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} style={[tw`text-red-500`, { color }]} />
        }} 
        component={Home} 
      />
      <Tab.Screen 
        name="Post" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="add" size={size} style={[tw`text-red-500`, { color }]} />
        }} 
        component={Post} 
      />
      <Tab.Screen 
        name="Chats" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="chat" size={size} style={[tw`text-red-500`, { color }]} />
        }}  
        component={Chats} 
      />
      <Tab.Screen 
        name="User" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="person" size={size} style={[tw`text-red-500`, { color }]} />
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
