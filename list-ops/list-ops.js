//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list
  }

  append(list) {
    if (!list.list) {
      return { list: this.list }
    }
    else {
        return { values: this.list.concat(list.list) }
      }
    }

  concat(list) {
    if (!list.list && !this.list){
      return { values: [] }
    }
    else {
      let array = []
      list.list.forEach(item => {
        array.push(item.list)
      });
      array.unshift(this.list)
      return { values: array.flat()}
    }
  }

  filter() {
    let array = []
    this.list.forEach(item => {
      if (item % 2 === 1){
        array.push(item)
      }
    })
    return {values: array}
  }

  map() {
    if (!this.list){
      return {values: []}
    } else {
      let array = []
      this.list.forEach(item => {
        let newItem = item + 1
          array.push(newItem)
      })
    return {values: array}
  }
  }


  length() {
    if (!this.list) {
      return 0
    } else {
    return this.list.length
    }
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    if (!this.list){
      return {values: []}
    } else {
      let array = []
      this.list.forEach(item => {
          array.unshift(item)
      })
    return {values: array}
  }  }
}
