import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

function render(Component) {
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
  module.hot.accept('./App.jsx', () => render(App))
}
