import ReactDOM from 'react-dom'
import React from 'react'
import App from '@/App'
import './public-path'

const a = document.createElement('div')
document.body.appendChild(a)

// ReactDOM.render(<App />, document.body);

function render(props) {
  const { container } = props
  console.log(111, container)
  ReactDOM.render(
    <App />,
    container ? container.querySelector('#root') : document.body
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  )
}

export default {}
