//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.list = []
  }
  push(num) {
    this.list.push(num)
  }

  pop() {
   return this.list.pop()
  }

  shift() {
    return this.list.shift()
  }

  unshift(num) {
    return this.list.unshift(num)
  }

  delete(num) {
    this.list.forEach(item => {
      if (num === item && this.list.indexOf(num) === this.list.indexOf(item)) {
        const value = this.list.indexOf(item)
        this.list.splice(value, 1)
      }
    })
    return this.list
  }

  count() {
    return this.list.length
  }
}
