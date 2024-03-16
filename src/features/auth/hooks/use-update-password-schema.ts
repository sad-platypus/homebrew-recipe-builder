import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useUpdatePasswordSchema = () => {
   const t = useTranslations('auth.schemas')
   return z.object({
      updatedPassword: z
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
        updatedPasswordConfirm: z.string(),
   }).refine(
      (data) => {
        return data.updatedPassword === data.updatedPasswordConfirm;
      },
      { message: t('match-passwords'), path: ['updatedPasswordConfirm'] }
    );
}