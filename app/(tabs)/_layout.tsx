import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { TabIcon } from '../../components/TabIcon';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => <TabIcon icon='home' focused={focused} color={color} name='Home' />,
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => <TabIcon icon='message-circle' focused={focused} color={color} name='Chat' />,
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => <TabIcon icon='plus' focused={focused} color={color} name='Create' />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => <TabIcon icon='user' focused={focused} color={color} name='Profile' />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
