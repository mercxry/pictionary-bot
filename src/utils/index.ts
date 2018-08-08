export const getOrdinal = (num: any) => {
  if ((parseFloat(num) === parseInt(num, 2)) && !isNaN(num)) {
    const ordinal = ["th", "st", "nd", "rd"];
    const remainder = num % 100;
    return num + (ordinal[(remainder - 20) % 10] || ordinal[remainder] || ordinal[0]);
  }
  return num;
};
