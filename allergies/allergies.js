//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const allergyList = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1
}


export class Allergies {
  constructor(num) {
    this.num = num,
    this.allergicList = this.list()
  }

  list() {
    let number = this.num
    let allergies = []
      const newList = (number) => {

      // base case
      if(number === 0) {
        return '';
      }

      for (const allergy in allergyList) {

        if(number >= allergyList[allergy]) {
          if (!allergies.includes(allergy)){
          allergies.unshift(allergy)
          // console.log('allergies', allergies);
          }
          //recursive case
          return newList(number - allergyList[allergy])
        }
      }
    }
    newList(number)
  // console.log('allergies at the end', allergies);
  return allergies

  }

  allergicTo(allergen) {
     const allergic = this.allergicList.find(allergy => allergen === allergy)
     //should return true or false
     return allergic === allergen
  }
}
