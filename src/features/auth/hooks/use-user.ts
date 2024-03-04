'use client';

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, [user]);
  return user;
};
