'use server';

import { createClient } from '@/utils/supabase/server';

export const updatePassword = async (newPassword: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (data) {
    console.log('success!');
  } else if (error) {
    console.log(error.message);
  }
};
