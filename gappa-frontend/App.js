import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import our newly created screens
import RegistrationScreen from './src/screens/RegistrationScreen';
import ChatListScreen from './src/screens/ChatListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Registration"
        screenOptions={{
          // Hide the default ugly headers so we can build our own modern UI
          headerShown: false, 
          cardStyle: { backgroundColor: '#121212' }
        }}
      >
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}