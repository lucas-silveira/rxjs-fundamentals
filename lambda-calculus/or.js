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

const OR = a => b => a(T)(b)

r = OR(T)(T)
r // true (FIRST)
r = OR(T)(F)
r // true (FIRST)
r = OR(F)(T)
r // true (FIRST)
r = OR(F)(F)
r // false (LAST)