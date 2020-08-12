const { interval, from } = require('rxjs')

const generateNumbers = interval(500)

const sub1 = generateNumbers.subscribe(console.log)

setTimeout(() => sub1.unsubscribe(), 5000)

from([1, 2, 3]).subscribe(console.log)