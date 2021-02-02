import * as React from 'react'
import { ReactElement } from 'react'

import './Communication.css'

import PhoneIcon from '@/assets/icons/phone.svg'
import EmailIcon from '@/assets/icons/email.svg'

const Communication = (): ReactElement => (
  <div className="communication">
    <a href="tel:+902362335054" className="phone">
      <PhoneIcon className="phone__icon" />
      <div className="phone__number">+90 236 233 50 54</div>
    </a>
    <a href="mailto:info@soyaendustriyel.com" className="email">
      <EmailIcon className="email__icon" />
      <div className="email__address">info@soyaendustriyel.com</div>
    </a>
  </div>
)

export default Communication
