// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Footer.css'

import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Copyright from './components/Copyright.jsx'
import Attribution from './components/Attribution.jsx'

const Footer = () => (
    <footer>
      <div className='footer-content'>
        <About />
        <Contact />
      </div>

      <Copyright />
      <Attribution />
    </footer>
  )

export default Footer
