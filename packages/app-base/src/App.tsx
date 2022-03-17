import React from 'react'
import Hello from '@/Hello'
import '@/assets/css/test.module.scss'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'angularApp',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app-angular',
  },
])
// 启动 qiankun
start()

export default function App() {
  return (
    <div>
      hello react 1111
      <Hello />
      <button onClick={() => import('lodash')}>加载lodash</button>
      <div id='container'></div>
      <iframe src='127.0.0.1:8081'></iframe>
    </div>
  )
}
