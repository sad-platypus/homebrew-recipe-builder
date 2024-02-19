import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useRefractometerSchema = () => {
  const t = useTranslations('calculators.errors');
  return z
    .object({
      brixInitial: z
        .number({ invalid_type_error: t('provide-number') })
        .positive({ message: t('negative-error') }),
      brixFinal: z
        .number({ invalid_type_error: t('provide-number') })
        .positive({ message: t('negative-error') }),
      correctionFactor: z
        .number({ invalid_type_error: t('provide-number') })
        .positive({ message: t('negative-error') }),
    })
    .refine(
      (data) => {
        return data.brixFinal <= data.brixInitial;
      },
      { message: t('higher-fg'), path: ['brixFinal'] }
    );
};
