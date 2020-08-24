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
      return { values: this.list.concat(list.list) }
    }

  concat(list) {
    if (!list.list && !this.list){
      return { values: [] }
    }

    let array = []
    list.list.forEach(item => {
      array.push(item.list)
    });
    array.unshift(this.list)
    return { values: array.flat()}

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
    }
    let array = []
    this.list.forEach(item => {
      let newItem = item + 1
        array.push(newItem)
    })
    return {values: array}

  }


  length() {
    if (!this.list) {
      return 0
    }
    return this.list.length

  }


  foldl(func, folds) {
    if (!this.list) {
      return folds
    }
    let acc = folds
      this.list.forEach(item => {
        acc = func(acc, item)
      })
    return acc
  }

  foldr(func, folds) {
    if (!this.list) {
      return folds
    }
    let acc = folds
    let newList = this.list.reverse()
      newList.forEach(item => {
        acc = func(acc, item)
      })
    return acc
  }

  reverse() {
    if (!this.list){
      return {values: []}
    }
    let array = []
    this.list.forEach(item => {
        array.unshift(item)
    })
    return {values: array}
  }
}
