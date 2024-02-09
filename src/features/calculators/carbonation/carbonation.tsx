'use client';

import { CollapsibleWrapper } from '@/components/collapsible-wrapper';
import { InputField, Form, SelectField } from '@/components/form';
import { useTranslations } from 'next-intl';
import { FieldValues } from 'react-hook-form';
import { useState } from 'react';
import { calculateCarbonation } from './calculation';
import { buildSchema } from './schema';
import { P, Button } from '@/components/elements';

export const Carbonation = () => {
  const t = useTranslations('carbonation');
  const carbonationSchema = buildSchema(t);
  const sugarTypeOptions = [
    { text: t('saccharose'), value: 0.51 },
    { text: t('glucoseMH'), value: 0.44 },
    { text: t('glucose'), value: 0.49 },
    { text: t('DME'), value: 0.375 },
  ];

  const [resultValue, setResultValue] = useState<string>('');
  const submitHandler = (data: FieldValues) => {
    setResultValue(calculateCarbonation(data));
  };

  return (
    <CollapsibleWrapper title={t('title')}>
      <Form
        onSubmit={submitHandler}
        id="carbonationForm"
        schema={carbonationSchema}
      >
        <InputField
          name="beerVolume"
          label={t('volume')}
          type="number"
          step={0.1}
          min={0}
        />
        <InputField
          name="desiredCarbonation"
          label={t('desired')}
          type="number"
          step={0.1}
          min={0}
        />
        <InputField
          name="beerTemperature"
          label={t('temperature')}
          type="number"
          step={0.1}
          min={0}
        />
        <SelectField
          isValueANumber={true}
          name="sugarSource"
          label={t('sugar')}
          options={sugarTypeOptions}
        />
        <InputField
          name="desiredCarbonation"
          label={t('desired')}
          type="number"
          step={0.1}
          min={0}
        />
        <InputField
          name="beerTemperature"
          label={t('temperature')}
          type="number"
          step={0.1}
          min={0}
        />
        <SelectField
          isValueANumber={true}
          name="sugarSource"
          label={t('sugar')}
          options={sugarTypeOptions}
        />
        <InputField
          name="carbonationResult"
          label={t('result')}
          type="number"
          readOnly
          value={resultValue}
        />
        <Button type="submit">{t('submit')}</Button>
      </Form>
      <div>
        <P>{t('description-p1')}</P>
        <P>{t('description-p2')}</P>
        <P>{t('description-p3')}</P>
        <P>{t('description-p4')}</P>
        <P>{t('description-p5')}</P>
        <P>{t('description-p6')}</P>
        <P>{t('description-p7')}</P>
      </div>
    </CollapsibleWrapper>
  );
};
