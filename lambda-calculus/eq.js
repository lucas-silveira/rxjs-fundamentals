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

const EQ = a => b => a(b)(b(F)(T))

r = EQ(T)(T)
r // true (FIRST)
r = EQ(T)(F)
r // false (LAST)
r = EQ(F)(T)
r // false (LAST)
r = EQ(F)(F)
r // true (FIRST)