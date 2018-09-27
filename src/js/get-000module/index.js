let arc = require('@architect/functions')
let read = require('fs').readFileSync
let join = require('path').join

function route (req, res) {
  let module = req.params.module
  console.log('MODULE: ', module)
  let path = join(__dirname, 'node_modules', '@architect', 'shared', 'modules', module)
  console.log('PATH: ', path)
  let js = read(path)
  res({js})
}

exports.handler = arc.js.get(route)

