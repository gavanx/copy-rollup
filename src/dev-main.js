const rollup = require('./rollup')

rollup(__dirname + '/../demo/main.js').then((res) => {
  res.wirte('build/main.js')
})
