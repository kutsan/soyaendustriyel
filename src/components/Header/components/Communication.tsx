// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Communication.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/phone.svg'. Did... Remove this comment to see the full error message
import PhoneIcon from '@/assets/icons/phone.svg'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/email.svg'. Did... Remove this comment to see the full error message
import EmailIcon from '@/assets/icons/email.svg'

const Communication = () => (
    <div className='communication'>
      <a href='tel:+902362335054' className='phone'>
        <PhoneIcon className='phone__icon' />
        <div className='phone__number'>+90 236 233 50 54</div>
      </a>
      <a href='mailto:info@soyaendustriyel.com' className='email'>
        <EmailIcon className='email__icon' />
        <div className='email__address'>info@soyaendustriyel.com</div>
      </a>
    </div>
  )

export default Communication
