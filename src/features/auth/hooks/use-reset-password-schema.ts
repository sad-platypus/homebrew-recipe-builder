import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useResetPasswordSchema = () => {
  const t = useTranslations('auth.schemas');

  return z.object({
    resetPasswordEmail  : z
      .string()
      .min(1, t('provide-email'))
      .email(t('incorrect-email')),
  });
};
