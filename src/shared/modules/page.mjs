import { h } from './vendor/preact.mjs'
import Header from './header.mjs'

export default function Page (props) {
  return h(Header, null, 'Halo Verld!')
}
