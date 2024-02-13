export const convertToSG = (plato: number) => {
  return 1 + plato / (258.6 - (plato / 258.2) * 227.1);
};

export const convertToPlato = (sg: number) => {
  return (
    -1 * 616.868 +
    1111.14 * sg -
    630.272 * Math.pow(sg, 2) +
    135.997 * Math.pow(sg, 3)
  );
};
