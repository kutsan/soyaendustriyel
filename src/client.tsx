import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const init = (): void => {
  render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
  )
}

init()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(console.error)
  })
}

if (module.hot !== undefined) {
  module.hot.accept('./App', () => init())
}
