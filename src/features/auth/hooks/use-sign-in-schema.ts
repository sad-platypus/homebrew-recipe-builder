import { useTranslations } from 'next-intl';
import z from 'zod';

export const useSignInSchema = () => {
  const t = useTranslations('auth.schemas');

  return z.object({
    signInEmail: z
      .string()
      .min(1, t('provide-email'))
      .email(t('incorrect-email')),
    signInPassword: z.string().min(1, { message: t('provide-password') }),
  });
};
