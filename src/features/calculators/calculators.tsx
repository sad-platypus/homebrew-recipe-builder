import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { Carbonation } from './carbonation/carbonation';
import { H1 } from '@/components/elements/headers/h1';
import { pick } from 'lodash';

export const Calculators = () => {
  const t = useTranslations('calculators');
  const translations = useMessages();
  return (
    <>
      <H1>{t('title')}</H1>
      <NextIntlClientProvider messages={pick(translations, 'carbonation')}>
        <Carbonation />
      </NextIntlClientProvider>
    </>
  );
};
