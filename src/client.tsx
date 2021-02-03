import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ComponentType } from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const render = (Component: ComponentType): void => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render(App)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
