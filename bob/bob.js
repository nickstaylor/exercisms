
export const hey = (message) => {
  message = message.trim()
  message.replace('\t', '')
  .replace('\n', '')
  .replace('\r', '')
  let splitMessage = message.split('')
  let capsMessage = message.toUpperCase()

  //fine, be that way
  if(!message || !splitMessage.length){
    return 'Fine. Be that way!'
  }
  //whoa, chill out
  if (message === capsMessage &&
    (capsMessage.match(/[A-Z]/g)) &&
    (splitMessage[splitMessage.length-1] === '!'
    || splitMessage[splitMessage.length -1] !== '?')){
    return 'Whoa, chill out!'
  }

  //calm down I know what I'm doing
  if (message === capsMessage &&
     splitMessage[splitMessage.length-1] === '?' &&
      capsMessage.match(/[A-Z]/g)){
    return 'Calm down, I know what I\'m doing!'
  }

  if (message !== capsMessage &&
  splitMessage[splitMessage.length-1] === '?'){
    return 'Sure.'
  }

  if (!capsMessage.match(/[A-Z]/g) &&
  splitMessage[splitMessage.length-1] === '?'){
    return 'Sure.'
  } else {
    return "Whatever."
  }

};
