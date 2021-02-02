import * as React from 'react'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import './Logo.css'

import LogoIcon from '@/assets/icons/logo.svg'

const Logo = (): ReactElement => (
  <NavLink
    activeStyle={{ pointerEvents: 'none' }}
    isActive={(_, location) => location.pathname === '/'}
    to="/"
    aria-label="Ana Sayfa"
  >
    <LogoIcon className="logo" />
  </NavLink>
)

export default Logo
