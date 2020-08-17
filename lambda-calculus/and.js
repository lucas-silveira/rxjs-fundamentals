let r

const SELF = f => f(f)

const FIRST = a => b => a
let r

const FIRST = a => b => a

const LAST = a => b => b

// boolean
const T = FIRST
const F = LAST

T.inspect = () => 'true (FIRST)'
F.inspect = () => 'false (LAST)'

T // true (FIRST)
F // false (LAST)

const AND = a => b => a(b)(F)

r = AND(T)(T)
r // true (FIRST)
r = AND(T)(F)
r // false (LAST)
r = AND(F)(T)
r // false (LAST)
r = AND(F)(F)
r // false (LAST)