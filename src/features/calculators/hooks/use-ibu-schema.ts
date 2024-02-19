import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useIBUShema = () => {
  const t = useTranslations('calculators.errors');
  return z.object({
    extract: z
      .number({ invalid_type_error: t('provide-number') })
      .positive({ message: t('negative-error') }),
    volume: z
      .number({ invalid_type_error: t('provide-number') })
      .positive({ message: t('negative-error') }),
    hopsRow: z.array(
      z.object({
        alphaAcids: z
          .number({ invalid_type_error: t('provide-number-array') })
          .positive({ message: t('negative-error-array') }),
        weight: z
          .number({ invalid_type_error: t('provide-number-array') })
          .positive({ message: t('negative-error-array') }),
        time: z
          .number({ invalid_type_error: t('provide-number-array') })
          .positive({ message: t('negative-error-array') }),
      })
    ),
  });
};
