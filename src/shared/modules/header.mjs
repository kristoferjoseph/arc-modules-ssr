import { h } from './vendor/preact.mjs'

export default function Header (props) {
  console.log('HEADER PROPS: ', props)
  return h('h1', props)
}
