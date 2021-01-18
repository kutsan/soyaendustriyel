// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useContext } from 'react'

import './Header.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/SearchBar/SearchB... Remove this comment to see the full error message
import SearchBar from '@/components/SearchBar/SearchBar.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/context/AppContext.js'. Did ... Remove this comment to see the full error message
import { AppContext } from '@/context/AppContext.js'
import Logo from './components/Logo.jsx'
import Communication from './components/Communication.jsx'


const Header = () => {
  const { menuOpen } = useContext(AppContext)

  return (
    <header>
      <Logo />
      <SearchBar hidden={menuOpen} />
      <Communication />
    </header>
  )
}

export default Header
