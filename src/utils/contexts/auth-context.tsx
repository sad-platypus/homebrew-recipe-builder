'use client';

import { AuthError, Session, User, WeakPassword } from '@supabase/supabase-js';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { browserClient as supabase } from '../supabase/client';
import { FieldValues } from 'react-hook-form';
import { signIn } from '@/features/auth/actions';
import { useRouter } from 'next/navigation';

type AuthContext = {
  session: Session | null;
  handleLogin: (formData: FieldValues) => Promise<{
    data:
      | {
          user: User;
          session: Session;
          weakPassword?: WeakPassword | undefined;
        }
      | {
          user: null;
          session: null;
          weakPassword?: null | undefined;
        };
    error: AuthError | null;
  }>;
};

export const AuthContext = createContext<AuthContext>({
  session: null,
  handleLogin: async (formData) => ({
    data: {
      user: null,
      session: null,
    },
    error: null,
  }),
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
    const { data, error } = await signIn(formData);
    if (data.session) {
      setSession(data.session);
      router.push('/');
    }
    return { data, error };
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
