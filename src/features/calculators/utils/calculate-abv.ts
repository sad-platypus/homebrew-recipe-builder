import { FieldValues } from 'react-hook-form';
import { convertToSG } from '.';

export const calculateABV = (data: FieldValues) => {
  const convertedOG = convertToSG(data.abvOG);
  const convertedFG = convertToSG(data.abvFG);
  const attenuation = 100 - (data.abvFG / data.abvOG) * 100;
  const abv = (convertedOG - convertedFG) * 131.25;
  //alternative equation - more precise for high abv?:
  //   const abv =
  //     ((76.08 * (convertedOG - convertedFG)) / (1.775 - convertedOG)) *
  //     (convertedFG / 0.794);

  return { abv: abv.toFixed(2), attenuation: attenuation.toFixed(1) };
};

