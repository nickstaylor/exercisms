//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (input) => {
  let seconds = (input.getTime() / 1000) + 1000000000
  return new Date(seconds * 1000)
};
