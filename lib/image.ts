/**
 *
 * @param imageNumber number of the image
 * @returns string of a number with "0"'s padded at the start if less than 2 digits
 */
export const transformToPaddedNumber = (imageNumber: number): string =>
  String(imageNumber).padStart(2, "0");

export const getGoalImageUrl = (imageNumber: number): string => {
  const paddedImageNumber = transformToPaddedNumber(imageNumber);
  return `https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E_SDG-goals_icons-individual-rgb-${paddedImageNumber}.png?resize=148%2C148&ssl=1`;
};
