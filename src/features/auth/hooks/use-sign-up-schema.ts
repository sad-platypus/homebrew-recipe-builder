import { useTranslations } from 'next-intl';
import z from 'zod';

export const useSignUpSchema = () => {
  const t = useTranslations('auth.schemas');

  return z
    .object({
      signUpEmail: z
        .string()
        .min(1, t('provide-email'))
        .email(t('incorrect-email')),
      signUpPassword: z
        .string()
        .min(8, { message: t('too-short') })
        .refine((value) => /[a-z]/.test(value), {
          message: t('lower-case'),
        })
        .refine((value) => /[A-Z]/.test(value), {
          message: t('upper-case'),
        })
        .refine((value) => /[0-9]/.test(value), {
          message: t('number'),
        }),
      confirmSignUpPassword: z.string(),
      signUpName: z
        .string()
        .min(4, t('wrong-length'))
        .max(20, t('wrong-length'))
        .regex(/^[a-zA-Z0-9 ]+$/, {
          message: t('name'),
        }),
    })
    .refine(
      (data) => {
        return data.signUpPassword === data.confirmSignUpPassword;
      },
      { message: t('match-passwords'), path: ['confirmSignUpPassword'] }
    );
};
