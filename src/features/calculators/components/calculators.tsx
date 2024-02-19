import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { AlcoholByVolume, Carbonation, IBU, RefractometerCorrection } from '.';
import { H1 } from '@/components/elements/headers/h1';
import { pick } from 'lodash';

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
