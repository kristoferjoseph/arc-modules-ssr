let arc = require('@architect/functions')
let load = require('esm')(module)
let Page = load('@architect/shared/modules/page.mjs').default
let render = require('preact-render-to-string')
let h = load('@architect/shared/modules/vendor/preact.mjs').default.h

let Template = function (props) {
  props = props || {}
  let title = props.title || 'Title'
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div id="root">${render(h(Page))}</div>
    <script type="module" crossorigin="" src="/page.mjs"></script>
  </body>
  </html>`
}

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({html: Template()})
}

exports.handler = arc.html.get(route)
