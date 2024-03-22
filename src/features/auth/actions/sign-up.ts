'use server';

import { redirect } from '@/navigation';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export const signUp = async (formData: FieldValues) => {
  const supabase = createClient();
  const signUpData = {
    email: formData.signUpEmail,
    password: formData.signUpPassword,
    options: {
      data: { full_name: formData.signUpName },
    },
  };

  const { data, error } = await supabase.auth.signUp(signUpData);

  if (error) {
    redirect('/error-500');
    console.log('signup error', error.message);
  } else if (data && data.user?.identities?.length === 0) {
    redirect('/login/email-in-use');
  } else if (data) {
    console.log('signup data', data);
    revalidatePath('/', 'layout');
    redirect('/login/sign-up-success');
  }
};
