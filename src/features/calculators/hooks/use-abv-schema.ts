import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useABVSchema = () => {
  const t = useTranslations('calculators.errors');
  return z
    .object({
      abvOG: z.number({ invalid_type_error: t('provide-number') }).positive({message: t('negative-error')}),
      abvFG: z.number({ invalid_type_error: t('provide-number') }).positive({message: t('negative-error')}),
    })
    .refine(
      (data) => {
        return data.abvFG <= data.abvOG;
      },
      { message: t('higher-fg'), path: ['abvFG'] }
    );
};
