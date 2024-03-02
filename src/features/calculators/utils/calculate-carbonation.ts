import { FieldValues } from 'react-hook-form';

export const calculateCarbonation = (data: FieldValues) => {
  const { beerTemperature, beerVolume, desiredCarbonation } = data;
  const gramsOfCO2PerGramOfSugar = data.sugarSource;
  const fahrenheitTemperature = (9 / 5) * beerTemperature + 32;
  const postFermentationCO2 =
    3.0378 -
    0.050062 * fahrenheitTemperature +
    0.00026555 * fahrenheitTemperature * fahrenheitTemperature;
  const CO2VolumesToGrams = 1.969;
  const requiredCO2Grams =
    (desiredCarbonation - postFermentationCO2) * CO2VolumesToGrams * beerVolume;
  const calculationResult = requiredCO2Grams / gramsOfCO2PerGramOfSugar;

  return calculationResult.toFixed(0);
};
