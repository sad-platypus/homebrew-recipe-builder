'use client';

import { CollapsibleCard } from '@/components/wrappers';
import { Form, InputField } from '@/components/form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRefractometerSchema } from '@features/calculators/hooks';
import { FieldValues } from 'react-hook-form';
import { Button, P } from '@/components/elements';
import { calculateRefractometer } from '@features/calculators/utils';
import { DescriptionWrapper } from '../description-wrapper';

export const RefractometerCorrection = () => {
  const t = useTranslations('calculators.refractometer');
  const refractometerSchema = useRefractometerSchema();

  const [finalPlato, setFinalPlato] = useState('');
  const [initialPlato, setInitialPlato] = useState('');
  const handleSubmit = (data: FieldValues) => {
    const results = calculateRefractometer(data);
    setInitialPlato(results.initial);
    setFinalPlato(results.final);
  };

  return (
    <CollapsibleCard title={t('title')}>
      <Form
        id="refractometerForm"
        schema={refractometerSchema}
        onSubmit={handleSubmit}
      >
        <InputField
          label={t('brix-initial')}
          name="brixInitial"
          type="number"
          step={0.1}
        />
        <InputField
          label={t('brix-final')}
          name="brixFinal"
          type="number"
          step={0.1}
        />
        <InputField
          label={t('correction-factor')}
          name="correctionFactor"
          type="number"
          step={0.001}
        />
        <Button type="submit">{t('submit')}</Button>
        <InputField
          label={t('result-initial')}
          name="initialPlatoResult"
          readOnly
          value={initialPlato}
        />
        <InputField
          label={t('result-final')}
          name="finalPlatoResult"
          readOnly
          value={finalPlato}
        />
      </Form>
      <DescriptionWrapper>
        <P>{t('description-p1')}</P>
        <P>{t('description-p2')}</P>
        <P>{t('description-p3')}</P>
        <P>{t('description-p4')}</P>
      </DescriptionWrapper>
    </CollapsibleCard>
  );
};
