import { useTranslations } from 'next-intl';
import z from 'zod';


export const useCarbonationSchema = () => {
 const t= useTranslations('calculators.errors')

 return z.object({
  beerVolume: z
    .number({ invalid_type_error: t('provide-number') })
    .min(5, { message: t('less-than-5') }),
  desiredCarbonation: z.number({ invalid_type_error: t('provide-number') }).positive({message: t('negative-error')}),
  beerTemperature: z.number({ invalid_type_error: t('provide-number') }).min(5, { message: t('less-than-5') }),
  sugarSource: z.number(),
});
}