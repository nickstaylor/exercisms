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
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
