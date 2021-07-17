const rollup = require('../dist/rollup')

rollup(__dirname + '/main.js').then((res) => {
  res.wirte('build/main.js')
})
