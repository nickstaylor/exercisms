//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const resistanceColors = [
  "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const decodedValue = (colors) => {
  let index1 = resistanceColors.indexOf(colors[0].toLowerCase()).toString()
  let index2 = resistanceColors.indexOf(colors[1].toLowerCase()).toString()

return parseInt(index1 + index2)
};
