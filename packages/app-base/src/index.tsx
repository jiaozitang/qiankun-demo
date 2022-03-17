import ReactDOM from 'react-dom'
import React from 'react'
import App from '@/App'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:8081',
    container: 'body',
    activeRule: '/app-react',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
])

start()

const a = document.createElement('div')
document.body.appendChild(a)

ReactDOM.render(<App />, document.body)

export default {}
