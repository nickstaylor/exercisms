//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class GradeSchool {
  constructor(){
    this.allRoster = {}
  }

  roster() {
    // console.log(this.allRoster);
    return this.allRoster
  }

  add(student, grade) {
    if (Object.keys(this.allRoster).includes(grade.toString())) {
      this.allRoster[grade].push(student)
    }
    else {
      this.allRoster[grade] = [student]
    } 
  }

  grade() {
    console.log('hi');
  }
}

export default GradeSchool