const { Observable } = require('rxjs')

function withDelay(time, ...args) {
  return Observable.create(subscriber => {
    (args || []).forEach((arg, index) => {
      setTimeout(() => {        
        subscriber.next(arg)
  
        if (args.length === index + 1)
          subscriber.complete()
        
      }, time * (index + 1))
    })
  })
}

withDelay(1000, 1, 2, 3, 4, 5)
  .subscribe(console.log)