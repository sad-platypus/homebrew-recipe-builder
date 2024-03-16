'use server';

import { createClient } from '@/utils/supabase/server';
import { getLocale } from 'next-intl/server';

export const resetPassword = async (email: string) => {
  const supabase = createClient();
  const locale = await getLocale();
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `http://localhost:3000/auth/confirm?locale=${locale}&type=recovery`,
  });
  if (data) {
    console.log('success!', data);
  } else if (error) {
    console.log('pass reset error:', error);
  }
};
