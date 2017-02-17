[![Build Status](https://travis-ci.org/aecostas/string-stats.svg?branch=master)](https://travis-ci.org/aecostas/string-stats)

## string-stats
Calculates frequencies and probabilities of a string

### Build
```
npm install
npm run build
```

### Test
```
npm test
```

### Usage
Review test/stringstats.spec.js for a complete test suite

```
let teststr = 'helloworld123';
let stringstats = new StringStats(teststr);

  { '1': { counter: 1, probability: 0.07692307692307693 },
    '2': { counter: 1, probability: 0.07692307692307693 },
    '3': { counter: 1, probability: 0.07692307692307693 },
    h: { counter: 1, probability: 0.07692307692307693 },
    e: { counter: 1, probability: 0.07692307692307693 },
    l: { counter: 3, probability: 0.23076923076923078 },
    o: { counter: 2, probability: 0.15384615384615385 },
    w: { counter: 1, probability: 0.07692307692307693 },
    r: { counter: 1, probability: 0.07692307692307693 },
    d: { counter: 1, probability: 0.07692307692307693 } }
```
