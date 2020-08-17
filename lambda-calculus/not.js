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

const NOT = a => a(F)(T)

r = NOT(T)
r // false (LAST)