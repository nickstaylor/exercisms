
class GradeSchool {
  constructor() {
    this.allRoster = {}
  }

  roster() {
    const copyRoster = {}

    //brings current roster into the copy
    Object.assign(copyRoster, this.allRoster)

    //original way of looping through
    // Object.keys(copyRoster).forEach(level => {
    //     copyRoster[level] = copyRoster[level].slice().sort((a, b) => a > b ? 1 : -1)
    // })

    //different way of doing it.  Basically different forEach loop for Object.  Pretty cool!
    for (let key of Object.keys(copyRoster)) {
        //slice is making to where you cannot push a new item in as it is making
        // a shallow copy of each array.  If you didn't have slice here, the push
        //would be allowed
      copyRoster[key] = copyRoster[key].slice().sort((a, b)=> a > b ? 1 : -1)
    }
    return copyRoster
  } 

  add(student, grade) {
    if (Object.keys(this.allRoster).includes(grade.toString())) {
      this.allRoster[grade].push(student)
    }
    else {
      this.allRoster[grade] = [student]
    }
  }

  grade(grade) {
    if (this.allRoster[grade]) {
      let gradeCopy = [...this.allRoster[grade]]
      gradeCopy = gradeCopy.slice().sort((a, b) => a > b ? 1 : -1)
      return gradeCopy
    }
    return []
  }
    

}

export default GradeSchool