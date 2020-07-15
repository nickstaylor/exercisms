//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let capsMessage = message.toUpperCase()
  let splitMessage = message.split('')
  if (message === capsMessage && splitMessage[splitMessage.length-1] !== '?'){
    return 'Whoa, chill out!'
  }
  if (message === capsMessage && splitMessage[splitMessage.length-1] === '?' && capsMessage.match(/[A-Z]/g)){
    return 'Calm down, I know what I\'m doing!'
  }
  // if (!capsMessage.match(/[A-Z]/g) && splitMessage[splitMessage.length-1] === '?'){
  //   return 'Sure.'
  // }

};
