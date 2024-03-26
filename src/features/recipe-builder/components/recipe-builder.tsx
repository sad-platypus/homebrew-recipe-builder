import { H1 } from '@/components/elements/headers/h1';
import { useTranslations } from 'next-intl';

export const RecipeBuilder = () => {
  const t = useTranslations('recipe-builder')
  return <H1>{t('title')}</H1>;
};
