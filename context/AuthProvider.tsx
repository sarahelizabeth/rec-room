import { createContext, useContext, useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../utils/client';

interface AuthContextType {
  session: Session | null;
  setSession: (session: Session | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuthContext = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        setUser(session?.user ?? null);
        console.log('get sesh ', session);
      })
      .catch((error) => {
        console.log('error getting session: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      console.log('change sesh ', session);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession, user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
