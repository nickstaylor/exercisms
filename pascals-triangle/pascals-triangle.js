import { loadPartialConfig } from "@babel/core";


export const rows = (number) => {
  if (!number){return []}
  if (number === 1){return [[1]]}
  let newArray = [[1], [1, 1]]
  if (number === 2){return newArray}
  //start at array 2 and run until number length
  for (let i = 2; i < number; i++){
    let tempArray = [1]
    for (let j = 1; j <= i; j++){
      let pushedNumber;
      if (j === i){
        pushedNumber = 1
      }
      else {
        //this needs to be the previous array
        pushedNumber = newArray[newArray.length-1][j-1] + newArray[newArray.length-1][j]
      }
      tempArray.push(pushedNumber)
    }
    newArray.push(tempArray)
  }

  console.log('newArray', newArray);

  return newArray

};
