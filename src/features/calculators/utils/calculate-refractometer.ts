import { FieldValues } from 'react-hook-form';
import { convertToPlato } from '.';

export const calculateRefractometer = (data: FieldValues) => {
  const { brixInitial, brixFinal, correctionFactor } = data;
  const correctedBrixInitial = brixInitial / correctionFactor;
  const correctedBrixFinal = brixFinal / correctionFactor;
  const resultInSG =
    1.0 -
    0.0044993 * correctedBrixInitial +
    0.011774 * correctedBrixFinal +
    0.00027581 * Math.pow(correctedBrixInitial, 2) -
    0.0012717 * Math.pow(correctedBrixFinal, 2) -
    0.00000728 * Math.pow(correctedBrixInitial, 3) +
    0.000063293 * Math.pow(correctedBrixFinal, 3);
  const resultInPlato = convertToPlato(resultInSG);

  return {
    final: resultInPlato.toFixed(1),
    initial: correctedBrixInitial.toFixed(1),
  };
};
