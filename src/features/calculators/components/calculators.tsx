import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { H1 } from '@/components/elements/headers/h1';
import { pick } from 'lodash';
import { AlcoholByVolume } from './alcohol-by-volume';
import { Carbonation } from './carbonation';
import { IBU } from './ibu';
import { RefractometerCorrection } from './refractometer-correction';

export const Calculators = () => {
  const t = useTranslations('calculators');
  const translations = useMessages();
  return (
    <>
      <H1>{t('title')}</H1>
      <NextIntlClientProvider messages={pick(translations, 'calculators')}>
        <Carbonation />
        <AlcoholByVolume />
        <RefractometerCorrection />
        <IBU />
      </NextIntlClientProvider>
    </>
  );
};
