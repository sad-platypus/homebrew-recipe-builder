'use client';

import { createClient } from '@/utils/supabase/client';
import { Session } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>();
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();
  }, [session]);
  return session;
};
