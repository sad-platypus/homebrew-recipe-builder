'use client';

import { CollapsibleWrapper } from '@/components/collapsible-wrapper';
import { Button, P } from '@/components/elements';
import { Form, InputField, RowOfInputs } from '@/components/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import styles from './ibu.module.scss';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { DescriptionWrapper } from '..';
import { useIBUShema } from '../../hooks';
import { calculateIBU } from '../../utils/calculate-ibu';
import { useState } from 'react';

export const IBU = () => {
  const t = useTranslations('calculators.ibu');
  const schema = useIBUShema();
  const methods = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      extract: null,
      volume: null,
      hopsRow: [{ alphAcids: null, weight: null, time: null }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'hopsRow',
  });
  const [result, setResult] = useState('');
  const arrayLength = fields.length;
  const handleSubmit = (data: FieldValues) => {
    const result = calculateIBU(data, arrayLength);
    setResult(result);
  };
  const errors = methods.formState.errors;

  return (
    <CollapsibleWrapper title={t('title')}>
      <Form
        parentMethods={methods}
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
        {fields.map((field, index) => {
          return (
            <RowOfInputs
              errors={errors}
              index={index}
              key={field.id}
            >
              <InputField
                className={styles.rowInput}
                name={`hopsRow.${index}.alphaAcids`}
                label={t('alphaAcids')}
                type="number"
                step={0.1}
              />
              <InputField
                className={styles.rowInput}
                name={`hopsRow.${index}.weight`}
                label={t('weight')}
                type="number"
                step={0.1}
              />
              <InputField
                className={styles.rowInput}
                name={`hopsRow.${index}.time`}
                label={t('time')}
                type="number"
                step={0.1}
              />
              {index > 0 ? (
                <Button
                  className={styles.button}
                  onClick={() => remove(index)}
                >
                  {t('remove')}
                </Button>
              ) : null}
            </RowOfInputs>
          );
        })}
        <Button
          type="button"
          onClick={() => append({ alphAcids: null, weight: null, time: null })}
        >
          {t('append')}
        </Button>

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
