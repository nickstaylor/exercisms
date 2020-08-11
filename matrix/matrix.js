

export class Matrix {
  constructor(numbers) {
    this.originalNumbers = numbers
    this.numbers = this.createArrayOfNumbers(numbers)
  }

  createArrayOfNumbers = (nums) =>{
    return nums.replace(/[^0-9]/g, ' ').split(' ')
    .map(num => parseInt(num));
  }

  get rows() {
    let numberOfRows = Math.sqrt(this.numbers.length)

    let matrixRows = []

    for (let i = 0; i < numberOfRows; i++){
      let newArray = this.numbers.splice(0, numberOfRows)
      matrixRows.push(newArray)
      }
      
    return matrixRows
  }

  get columns() {

    let numberOfColumns = this.originalNumbers.split('')
      .splice(0, this.originalNumbers.indexOf('\n'))
      .join('').split(' ').length

    let matrixRows = this.numbers.length / numberOfColumns

    let matrixColumns = []

     for (let i = 0; i < numberOfColumns; i++){
       let newArray = []
       newArray.push(this.numbers[i])
       for (let j = 1; j < matrixRows; j++) {
       newArray.push(this.numbers[(numberOfColumns * j)+i])
       }
       matrixColumns.push(newArray)
     }

   return matrixColumns
 }

}
