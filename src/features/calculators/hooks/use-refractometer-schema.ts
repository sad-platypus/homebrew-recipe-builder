import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useRefractometerSchema = () => {
  const t = useTranslations('calculators.errors');
  return z.object({
    brixInitial: z.number(),
    brixFinal: z.number(),
    correctionFactor: z.number(),
  });
};
