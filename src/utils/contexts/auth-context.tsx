'use client';

import { Session } from '@supabase/supabase-js';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { browserClient as supabase } from '../supabase/client';
import { FieldValues } from 'react-hook-form';
import { signIn } from '@/features/auth/actions/sign-in';
import { useRouter } from 'next/navigation';

type AuthContext = {
  session: Session | null;
  handleLogin: (formData: FieldValues) => Promise<void>;
};

export const AuthContext = createContext<AuthContext>({
  session: null,
  handleLogin: async (formData: FieldValues) => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('session', session);
      if (event === 'SIGNED_OUT') {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  //auth state listener fails to update session after login, so this will handle it instead
  const handleLogin = async (formData: FieldValues) => {
    const data = await signIn(formData);
    setSession(data.session);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{ session: session, handleLogin: handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
