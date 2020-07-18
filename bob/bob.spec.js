import { hey } from './bob';

describe('Bob', () => {
  test('stating something', () => {
    const result = hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('shouting', () => {
    const result = hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });
  //pass
  test('shouting gibberish', () => {
    const result = hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });
  //pass
  test('asking a question', () => {
    const result = hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('asking a numeric question', () => {
    const result = hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('asking gibberish', () => {
    const result = hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('talking forcefully', () => {
    const result = hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('using acronyms in regular speech', () => {
    const result = hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('forceful question', () => {
    const result = hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Calm down, I know what I\'m doing!');
  });
  //pass
  test('shouting numbers', () => {
    const result = hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });
  //pass
  test('only numbers', () => {
    const result = hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('question with only numbers', () => {
    const result = hey('4?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('shouting with special characters', () => {
    const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });
  //pass
  test('shouting with no exclamation mark', () => {
    const result = hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('statement containing question mark', () => {
    const result = hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('non-letters with question', () => {
    const result = hey(':) ?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('prattling on', () => {
    const result = hey('Wait! Hang on. Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('silence', () => {
    const result = hey('');
    expect(result).toEqual('Fine. Be that way!');
  });
  //pass
  test('prolonged silence', () => {
    const result = hey('          ');
    expect(result).toEqual('Fine. Be that way!');
  });
  //pass
  test('alternate silence', () => {
    const result = hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });
  //pass
  test('multiple line question', () => {
    const result = hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('starting with whitespace', () => {
    const result = hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });
  //pass
  test('ending with whitespace', () => {
    const result = hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });
  //pass
  test('other whitespace', () => {
    const result = hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });
  //pass
  test('non-question ending with whitespace', () => {
    const result = hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });
});
