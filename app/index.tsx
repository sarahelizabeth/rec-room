import { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Session } from '@supabase/supabase-js';
import { colors } from '../constants';
import { Redirect, router } from 'expo-router';
import { useAuthContext } from '../context/AuthProvider';

export default function App() {
  const { session } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    // setIsLoading(true);
    router.push('/auth');
  };

  if (session) return <Redirect href='/account' />;

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={[styles.buttonContainer, isLoading && { opacity: 0.5 }]}
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>Go to Auth</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.brand500,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
