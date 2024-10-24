import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='account' options={{ headerShown: false }} />
        <Stack.Screen name='auth' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
