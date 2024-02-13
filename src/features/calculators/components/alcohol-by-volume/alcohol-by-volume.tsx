'use client';
import { CollapsibleWrapper } from '@/components/collapsible-wrapper';
import { Form, InputField } from '@/components/form';
import { useTranslations } from 'next-intl';
import { useABVSchema } from '../../hooks/use-abv-schema';
import { useState } from 'react';
import { Button, P } from '@/components/elements';
import { FieldValues } from 'react-hook-form';
import { calculateABV } from '../../utils';
import { DescriptionWrapper } from '@/features/calculators/components';

export const AlcoholByVolume = () => {
  const t = useTranslations('calculators.abv');
  const abvSchema = useABVSchema();
  const [abv, setAbv] = useState('');
  const [attenuation, setAttenuation] = useState('');
  const handleSubmit = (data: FieldValues) => {
    const results = calculateABV(data);
    setAbv(results.abv);
    setAttenuation(results.attenuation);
  };

  return (
    <CollapsibleWrapper title={t('title')}>
      <Form
        id="abvForm"
        schema={abvSchema}
        onSubmit={handleSubmit}
      >
        <InputField
          label={t('OG')}
          name="abvOG"
          type="number"
          min={0}
          step={0.1}
        />
        <InputField
          label={t('FG')}
          name="abvFG"
          type="number"
          min={0}
          step={0.1}
        />
        <InputField
          label={t('result')}
          name="abvResult"
          readOnly
          value={abv}
        />
        <InputField
          label={t('attenuation')}
          name="attenuation"
          readOnly
          value={attenuation}
        />
        <Button type="submit">{t('submit')}</Button>
      </Form>
      <DescriptionWrapper>
        <P>{t('description-p1')}</P>
        <P>{t('description-p2')}</P>
        <P>{t('description-p3')}</P>
        <P>{t('description-p4')}</P>
      </DescriptionWrapper>
    </CollapsibleWrapper>
  );
};
