const math = require('./math')

for (let number = 1; number < 80; number++) {
  let now = new Date().toISOString()
  console.log(`${now} Fibonacci for ${number} = ${math.fibonacci(number)}`)
}
