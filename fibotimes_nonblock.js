const math = require('./math')

for (let number = 1; number < 8000; number++) {
  let now = new Date().toISOString()
  console.log(`${now} Fibonacci for ${number} = ${math.fibonacciLoop(number)}`)
}
