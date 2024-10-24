import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../constants';

export const TabIcon = ({ icon, focused, color, name }: { icon: any; focused: boolean; color: string; name: string }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Feather name={icon} size={25} color={focused ? color : colors.gray500} />
      <Text style={{ color: focused ? color : colors.gray500, fontSize: 12, fontFamily: 'Poppins-Regular' }}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
