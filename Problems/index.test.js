const sortNumbersLinearly = require('.');

describe('sortNumbersLinearly', () => {
  test('should sort',() => {
    expect(sortNumbersLinearly([])).toEqual([]);
    expect(sortNumbersLinearly([3,2,4,43,1133])).toEqual([2,3,4,43,1133]);
    expect(sortNumbersLinearly([1,-1,0])).toEqual([-1,0,1]);
    expect(sortNumbersLinearly([111,1,11,123,12])).toEqual([1,11,12,111,123]);
  });
});

// const {
//   modifyObjectKeys,
//   modifyObjectValues,
//   stripper,
//   titleize,
//   uniqueRandom,
// } = require('.');

// describe('modifyObjectKeys', () => {
//   test('should modify object keys according to callback function', () => {
//     expect(modifyObjectKeys({ FOO: true }, x => x.toLowerCase()).foo).toBe(true);
//   });
// });

// describe('modifyObjectValues', () => {
//   test('should modify object values according to callback function', () => {
//     expect(modifyObjectValues({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('stripper', () => {
//   test('should strip the given substring from a string', () => {
//     expect(stripper({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('titleize', () => {
//   test('should titleize the given string', () => {
//     expect(titleize('')).toBe('');
//     expect(titleize('unicorns and rainbows')).toBe('Unicorns And Rainbows');
//     expect(titleize('UNICORNS AND RAINBOWS')).toBe('Unicorns And Rainbows');
//     expect(titleize('unicorns-and-rainbows')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('UNICORNS-AND-RAINBOWS')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('unicorns   and rainbows')).toBe('Unicorns   And Rainbows');
//   });
// });

// describe('uniqueRandom', () => {
//   test('should return a function that creates unique random numbers', () => {
//     const uniqueRandom10 = uniqueRandom(1, 10);
//     let count = 1000;
//     let current;const {
//   modifyObjectKeys,
//   modifyObjectValues,
//   stripper,
//   titleize,
//   uniqueRandom,
// } = require('.');

// describe('modifyObjectKeys', () => {
//   test('should modify object keys according to callback function', () => {
//     expect(modifyObjectKeys({ FOO: true }, x => x.toLowerCase()).foo).toBe(true);
//   });
// });

// describe('modifyObjectValues', () => {
//   test('should modify object values according to callback function', () => {
//     expect(modifyObjectValues({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('stripper', () => {
//   test('should strip the given substring from a string', () => {
//     expect(stripper({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('titleize', () => {
//   test('should titleize the given string', () => {
//     expect(titleize('')).toBe('');
//     expect(titleize('unicorns and rainbows')).toBe('Unicorns And Rainbows');
//     expect(titleize('UNICORNS AND RAINBOWS')).toBe('Unicorns And Rainbows');
//     expect(titleize('unicorns-and-rainbows')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('UNICORNS-AND-RAINBOWS')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('unicorns   and rainbows')).toBe('Unicorns   And Rainbows');
//   });
// });

// describe('uniqueRandom', () => {
//   test('should return a function that creates unique random numbers', () => {
//     const uniqueRandom10 = uniqueRandom(1, 10);
//     let count = 1000;
//     let current;
//     let prev;

//     while (--count > 0) { // eslint-disable-line no-plusplus
//       current = uniqueRandom10();

//       if (current === prev || current > 10 || current < 1) {
//         expect(true).toBe(false);
//       }

//       prev = current;
//     }

//     expect(true).toBe(true);
//   });
// });

//     let prev;

//     while (--count > 0) { // eslint-disable-line no-plusplus
//       current = uniqueRandom10();

//       if (current === prev || current > 10 || current < 1) {
//         expect(true).toBe(false);
//       }

//       prev = current;
//     }

//     expect(true).toBe(true);
//   });const {
//   modifyObjectKeys,
//   modifyObjectValues,
//   stripper,
//   titleize,
//   uniqueRandom,
// } = require('.');

// describe('modifyObjectKeys', () => {
//   test('should modify object keys according to callback function', () => {
//     expect(modifyObjectKeys({ FOO: true }, x => x.toLowerCase()).foo).toBe(true);
//   });
// });

// describe('modifyObjectValues', () => {
//   test('should modify object values according to callback function', () => {
//     expect(modifyObjectValues({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('stripper', () => {
//   test('should strip the given substring from a string', () => {
//     expect(stripper({ foo: 'UNICORN' }, x => x.toLowerCase()).foo).toBe('unicorn');
//   });
// });

// describe('titleize', () => {
//   test('should titleize the given string', () => {
//     expect(titleize('')).toBe('');
//     expect(titleize('unicorns and rainbows')).toBe('Unicorns And Rainbows');
//     expect(titleize('UNICORNS AND RAINBOWS')).toBe('Unicorns And Rainbows');
//     expect(titleize('unicorns-and-rainbows')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('UNICORNS-AND-RAINBOWS')).toBe('Unicorns-And-Rainbows');
//     expect(titleize('unicorns   and rainbows')).toBe('Unicorns   And Rainbows');
//   });
// });

// describe('uniqueRandom', () => {
//   test('should return a function that creates unique random numbers', () => {
//     const uniqueRandom10 = uniqueRandom(1, 10);
//     let count = 1000;
//     let current;
//     let prev;

//     while (--count > 0) { // eslint-disable-line no-plusplus
//       current = uniqueRandom10();

//       if (current === prev || current > 10 || current < 1) {
//         expect(true).toBe(false);
//       }

//       prev = current;
//     }

//     expect(true).toBe(true);
//   });
// });

// });
