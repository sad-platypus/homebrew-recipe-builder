'use server';

import { redirect } from '@/navigation';
import { createClient } from '@/utils/supabase/server';

export const resetPassword = async (email: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    redirect('/error-500')
    console.log('pass reset error:', error);
  } else if (data) {
    console.log('success!', data);
  }
};
