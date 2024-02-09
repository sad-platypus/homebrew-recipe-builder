import z from 'zod';

export const buildSchema = (t: (key: string) => string) => {
  return z.object({
    beerVolume: z
      .number({ invalid_type_error: t('provide-number') })
      .min(5, { message: t('less-than-5') }),
    desiredCarbonation: z.number({ invalid_type_error: t('provide-number') }),
    beerTemperature: z.number({ invalid_type_error: t('provide-number') }),
    sugarSource: z.number(),
  });
};
