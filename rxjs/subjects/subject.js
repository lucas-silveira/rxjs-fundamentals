const { Observable, Subject } = require('rxjs')

// Observables
function getObservable() {
  return new Observable(subscriber => {
    setTimeout(() => {
      console.count('observable')
      subscriber.next(Math.random())
    }, 1000)
  })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

// Subjects
function getSubject() {
  const subject = new Subject()
  setTimeout(() => {
    console.count('subject')
    subject.next(Math.random())
  }, 1000)
  return subject
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)