// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.


"use strict";

export class Robot {
    constructor() {
        this.allNames = [];
        this.name = this.getNewName();
    }

    
    makeRandomName() {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let r1 = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        let r2 = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        let numbers = '0123456789';
        let n1 = numbers.charAt(Math.floor(Math.random() * numbers.length))
        let n2 = numbers.charAt(Math.floor(Math.random() * numbers.length))
        let n3 = numbers.charAt(Math.floor(Math.random() * numbers.length))
        return [r1, r2, n1, n2, n3].join("");
    }

    getNewName() {
        this.name = ''
        let name = this.makeRandomName()
        // console.log(name);
        if (this.allNames.includes(name)) {
          return this.getNewName()
        } else {
          this.allNames.push(name);
            return name
        }
    }

    
    reset() {
        this.name = this.getNewName()
    }

}
 
export class Set {
    constructor() {
        this.names = [];
        this.size = this.names.length
    }

    add(name) {
        this.names.push(name)
    }


}

Robot.releaseNames = () => { };
