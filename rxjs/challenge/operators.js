const { of, from, Observable } = require('rxjs')

function startsWith(name) {
  return function(observable) {
    return Observable.create(subscriber => {
      observable.subscribe(value => {
         if (value.toLowerCase().startsWith(name.toLowerCase())) subscriber.next(value)
      })
    })
  }
}

of('Tony Stark', 'Peter Quill', 'Peter Park')
  .pipe(startsWith('Peter'))
  .subscribe(console.log)

from(['Tony Stark', 'Peter Quill', 'Peter Park'])
  .pipe(startsWith('Peter'))
  .subscribe(console.log)