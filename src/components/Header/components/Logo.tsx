// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { NavLink } from 'react-router-dom'

import './Logo.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/logo.svg'. Did ... Remove this comment to see the full error message
import LogoIcon from '@/assets/icons/logo.svg'

const Logo = () => (
    <NavLink
      activeStyle={{ pointerEvents: 'none' }}
      isActive={(match, location) => location.pathname === '/'}
      to='/'
      aria-label='Ana Sayfa'
    >
      <LogoIcon className='logo' />
    </NavLink>
  )

export default Logo
