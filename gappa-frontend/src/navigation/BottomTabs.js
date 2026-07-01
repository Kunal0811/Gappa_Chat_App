import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const ICONS = {
  Chats: '💬',
  Status: '◉',
  Calls: '📞',
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: { backgroundColor: colors.header, borderTopColor: colors.border },
        tabBarIcon: () => <Text style={{ fontSize: 18 }}>{ICONS[route.name]}</Text>,
      })}
    >
      <Tab.Screen name="Chats" component={ChatListScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}