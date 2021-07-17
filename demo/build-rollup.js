const rollup = require('../dist/rollup')

rollup(__dirname + '../src/rollup.js').then((res) => {
  res.wirte('build/rollup.js')
})
