'use server';

import { redirect } from '@/navigation';
import { createClient } from '@/utils/supabase/server';

export const updatePassword = async (newPassword: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    console.log('pass update error', error.message);
    redirect('/error-500');
  } else if (data) {
    console.log('pass update success!');
    redirect('/my-profile');
  }
};
