//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export const isPangram = (saying) => {
  let newLetters = [...letters]
  let phrase = saying.toLowerCase().split('')

  phrase.forEach(letter => {
    newLetters.forEach(item =>{
      if (item === letter){
        const value = newLetters.indexOf(item)
        newLetters.splice(value, 1)
      }
    })
  })

  if (!newLetters.length){
    return true
  } else {
    return false
  }
};
