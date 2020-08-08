//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const data =[{planet: "mercury", years: 0.2408467},
{planet: "venus", years: 0.61519726},
{planet: "earth", years: 1.0},
{planet: "mars", years: 1.8808158},
{planet: "jupiter", years: 11.862615},
{planet: "saturn", years: 29.447498},
{planet: "uranus", years: 84.016846},
{planet: "neptune", years: 164.79132}
]

export const age = (planet, seconds) => {
  let earthSeconds = 31557600
  let yearsOld
  data.forEach(item=>{
    if (item.planet === planet){
      yearsOld = item.years * earthSeconds
    }
  })
  let planetAge = Math.round(100*(seconds/yearsOld))/100
  return planetAge
};
