const rollup = require('./rollup')

rollup(__dirname + '/rollup.js').then((res) => {
  res.wirte('build/rollup.js')
})
