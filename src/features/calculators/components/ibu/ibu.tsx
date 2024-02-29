'use client';

import { CollapsibleWrapper } from '@/components/collapsible-wrapper';
import { Button, P } from '@/components/elements';
import { Form, InputField, RowOfInputs } from '@/components/form';
import { useTranslations } from 'next-intl';
import styles from './ibu.module.scss';
import { FieldValues } from 'react-hook-form';
import { useIBUShema } from '../../hooks';
import { calculateIBU } from '../../utils/calculate-ibu';
import { useState } from 'react';
import { DescriptionWrapper } from '../description-wrapper';
import { HopsRows } from './hops-rows';

export const IBU = () => {
  const t = useTranslations('calculators.ibu');
  const schema = useIBUShema();
  const defaultValues = {
    extract: null,
    volume: null,
    hopsRow: [{ alphAcids: null, weight: null, time: null }],
  };

  const [result, setResult] = useState('');
  const [fieldsLength, setFieldsLength] = useState(1);
  const handleSubmit = (data: FieldValues) => {
    const result = calculateIBU(data, fieldsLength);
    setResult(result);
  };

  return (
    <CollapsibleWrapper title={t('title')}>
      <Form
        defaultValues={defaultValues}
        className={styles.form}
        onSubmit={handleSubmit}
        schema={schema}
        id="ibuForm"
      >
        <InputField
          name="extract"
          label={t('extract')}
          type="number"
          step={0.1}
        />
        <InputField
          name="volume"
          label={t('volume')}
          type="number"
          step={0.1}
        />
        <HopsRows setFieldsLength={setFieldsLength} />
        <Button type="submit">{t('submit')}</Button>
        <InputField
          readOnly
          name="ibuResult"
          label={t('result')}
          value={result}
        />
      </Form>
      <DescriptionWrapper>
        <P>{t('description-p1')}</P>
        <P>{t('description-p2')}</P>
        <P>{t('description-p3')}</P>
      </DescriptionWrapper>
    </CollapsibleWrapper>
  );
};
