'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from '@/navigation';
import { createClient } from '@/utils/supabase/server';
import { FieldValues } from 'react-hook-form';
import { getLocale } from 'next-intl/server';
import { useSession } from '../hooks';

export const signIn = async (formData: FieldValues) => {
  const supabase = createClient();
  const locale = await getLocale();
  
  const data = {
    email: formData.signInEmail,
    password: formData.signInPassword,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    console.log(error.message);
  } else {
    revalidatePath(`/${locale}`, 'layout');
    redirect('/');
  }
};
