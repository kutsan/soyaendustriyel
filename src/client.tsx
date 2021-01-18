// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(1192) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

function render(Component: any) {
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
