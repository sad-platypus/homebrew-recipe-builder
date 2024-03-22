'use server';

import { createClient } from '@/utils/supabase/server';
import { FieldValues } from 'react-hook-form';
import { revalidatePath } from 'next/cache';
import { redirect } from '@/navigation';

export const signIn = async (formData: FieldValues) => {
  const supabase = createClient();

  const loginData = {
    email: formData.signInEmail,
    password: formData.signInPassword,
  };

  const { data, error } = await supabase.auth.signInWithPassword(loginData);

  if (error) {
    error.message === 'Invalid login credentials' ? null : redirect('/error-500');
    console.log('login error', error.message);
  } else if (data) {
    console.log('login data', data);
    revalidatePath('/', 'layout');
  }
  return { data, error };
};
