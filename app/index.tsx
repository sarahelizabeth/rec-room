import { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import Auth from './(auth)/Auth';
import Account from './(auth)/Account';
import { View } from 'react-native';
import { Session } from '@supabase/supabase-js';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <View>{session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}</View>;
}
