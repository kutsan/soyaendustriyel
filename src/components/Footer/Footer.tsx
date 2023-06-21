import { ReactElement } from 'react'

import './Footer.css'

import About from './components/About'
import Contact from './components/Contact'
import Copyright from './components/Copyright'

const Footer = (): ReactElement => (
  <footer>
    <div className="footer-content">
      <About />
      <Contact />
    </div>

    <Copyright />
  </footer>
)

export default Footer
