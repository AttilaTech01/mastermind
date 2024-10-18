export const generateAnswer = (): number[] => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
};
