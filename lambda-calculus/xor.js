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

const XOR = a => b => a(b(F)(T))(b(T)(F))

r = XOR(T)(T)
r // false (LAST)
r = XOR(T)(F)
r // true (FIRST)
r = XOR(F)(T)
r // true (FIRST)
r = XOR(F)(F)
r // false (LAST)