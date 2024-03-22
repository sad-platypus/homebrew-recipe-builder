import { useTranslations } from 'next-intl';
import { Card } from '../wrappers';


export const Error500 = () => {
   const t = useTranslations('error-500')

   return <Card title={t('title')}>{t('message')}</Card>
}