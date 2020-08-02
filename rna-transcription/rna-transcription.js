//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const data = [ ['G', 'C'],
['C', 'G'],
['T', 'A'],
['A', 'U']
]

export const toRna = (strand) => {
  return strand.split('').reduce((acc, item) =>{
    data.forEach(strand => {
    if (item === strand[0]){
      acc.push(strand[1])
    }
  })
  return acc
  }, []).join('')
};
