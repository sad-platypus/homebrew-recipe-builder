import { FieldValues } from 'react-hook-form';
import { convertToSG } from '.';

export const calculateIBU = (data: FieldValues, fieldsLength: number) => {
  const wortSG = convertToSG(data.extract);
  const BignessFactor = 1.65 * Math.pow(0.000125, wortSG - 1);
  let SumOfIBUS = 0;
  for (let i = 0; i < fieldsLength; i++) {
    const AddedAlphaAcids =
      ((data.hopsRow[i].alphaAcids / 100) * data.hopsRow[i].weight * 1000) /
      data.volume;
    const BoilTimeFactor =
      (1 - Math.pow(Math.E, -0.04 * data.hopsRow[i].time)) / 4.15;
    const AlphaAcidUtilisation = BignessFactor * BoilTimeFactor;

    const IBUs = AlphaAcidUtilisation * AddedAlphaAcids;

    SumOfIBUS += IBUs;
    
  } 

  return SumOfIBUS.toFixed(1);
};
