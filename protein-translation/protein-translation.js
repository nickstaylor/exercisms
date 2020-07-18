//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const data = [
{name:'AUG',codon:'Methionine'},
{name:'UUU', codon:'Phenylalanine'},
{name:'UUC', codon: 'Phenylalanine'},
{name: 'UUA', codon: 'Leucine'},
{name: 'UUG', codon: 'Leucine'},
{name: 'UCU', codon:'Serine'},
{name: 'UCC', codon: 'Serine'},
{name:  'UCA', codon: 'Serine'},
{name: 'UCG', codon: 'Serine'},
{name: 'UAU', codon: 'Tyrosine'},
{name: 'UAC', codon: 'Tyrosine'},
{name:'UGU', codon: 'Cysteine'},
{name: 'UGC', codon: 'Cysteine'},
{name: 'UGG', codon: 'Tryptophan'},
{name: 'UAA', codon: 'STOP'},
{name: 'UAG', codon: 'STOP'},
{name: 'UGA', codon: 'STOP'}
]

export const translate = (rna) => {
  if (!rna){
    return []
  }
  if (rna.length % 3 !== 0){
    throw new Error('Invalid codon')
  }
  rna = rna.split('')
  let length = rna.length / 3
  let strands = []
  for (let i = 0; i < length; i++){
    strands.push(rna.splice(0, 3).join(''))
  }
  // console.log(strands);

  let codonArray = strands.map(strand=>{
    let codon
    data.forEach(item=>{
      if (strand === item.name){
      codon = item.codon
      }
    })
    return codon
  })

  // console.log(codonArray);
  if (codonArray[0] === undefined){
      throw new Error('Invalid codon')
  }
  if (codonArray[0] === 'STOP'){
    return []
  }
  codonArray.forEach(codon=> {
    if (codon === 'STOP'){
      const value  = codonArray.indexOf(codon)
      codonArray.splice(value, codonArray.length -1)
    }
  })
  console.log(codonArray);
return codonArray
};
