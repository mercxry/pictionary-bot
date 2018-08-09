export const getOrdinal = (num: number) => {
  switch (num) {
    case 1: return `${num.toString() + "st"}`;
    case 2: return `${num.toString() + "nd"}`;
    case 3: return `${num.toString() + "rd"}`;
    default: return `${num.toString() + "th"}`;
  }
};
