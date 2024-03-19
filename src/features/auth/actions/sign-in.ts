'use server';

import { createClient } from '@/utils/supabase/server';
import { FieldValues } from 'react-hook-form';
import { revalidatePath } from 'next/cache';

export const signIn = async (formData: FieldValues) => {
  const supabase = createClient();

  const loginData = {
    email: formData.signInEmail,
    password: formData.signInPassword,
  };

  const { error, data } = await supabase.auth.signInWithPassword(loginData);

  if (error) {
    console.log('login error', error.message);
  } else if (data) {
    console.log('signed in');
    revalidatePath('/', 'layout');
  }

  return data
};
