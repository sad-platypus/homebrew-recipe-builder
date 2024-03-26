import { Button } from '@/components/elements';
import {  InputField } from '@/components/form';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './ibu.module.scss';
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from 'react';
import { RowOfInputs } from './row-of-inputs/row-of-inputs';

export const HopsRows = ({
  setFieldsLength,
}: {
  setFieldsLength: Dispatch<SetStateAction<number>>;
}) => {
  const t = useTranslations('calculators.ibu');
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'hopsRow',
  });
  setFieldsLength(fields.length);
  return (
    <>
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
    </>
  );
};
