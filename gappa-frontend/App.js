import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import BottomTabs from './src/navigation/BottomTabs';
import ChatScreen from './src/screens/ChatScreen';
import NewChatScreen from './src/screens/NewChatScreen';
import NewGroupScreen from './src/screens/NewGroupScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0B141A' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="NewChat" component={NewChatScreen} />
        <Stack.Screen name="NewGroup" component={NewGroupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}