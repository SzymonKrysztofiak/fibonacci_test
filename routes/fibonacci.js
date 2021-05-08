const express = require('express')
const router = express.Router()
const math = require('../math')

router.get('/', function(req, res, next) {
  if (req.query.fibonacciNumber) {
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fibonacciNumber: req.query.fibonacciNumber,
      fibonacciValue: math.fibonacci(req.query.fibonacciNumber),
    })
  } else {
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fibonacciNumber: undefined,
    })
  }
})

module.exports = router
