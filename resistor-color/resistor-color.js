//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colors = [
{color: "black", code: 0},
{color: "brown", code: 1},
{color: "red", code: 2},
{color: "orange", code: 3},
{color: "yellow", code: 4},
{color: "green",  code: 5},
{color: "blue", code: 6},
{color: "violet",code: 7},
{color: "grey", code: 8},
{color: "white", code: 9}
]

export const colorCode = (param) => {
  let returnCode = colors.filter(color => {
    if (param === color.color){
      return color
    }
  })
  return returnCode[0].code
};

export const COLORS = colors.map(color => color.color);
