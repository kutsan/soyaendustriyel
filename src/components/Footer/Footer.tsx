import * as React from 'react'
import { ReactElement } from 'react'

import './Footer.css'

import About from './components/About'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import Attribution from './components/Attribution'

const Footer = (): ReactElement => (
  <footer>
    <div className="footer-content">
      <About />
      <Contact />
    </div>

    <Copyright />
    <Attribution />
  </footer>
)

export default Footer
