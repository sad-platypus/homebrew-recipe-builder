'use server';

import { redirect } from '@/navigation';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export const signUp = async (data: FieldValues) => {
  const supabase = createClient();
  const signUpData = {
    email: data.signUpEmail,
    password: data.signUpPassword,
    options: {
      data: { full_name: data.signUpName },
    },
  };

  const { error } = await supabase.auth.signUp(signUpData);

  if (error) {
    console.log(error.message);
  } else {
    revalidatePath('/', 'layout');
    redirect('/login/sign-up-success');
  }
};
