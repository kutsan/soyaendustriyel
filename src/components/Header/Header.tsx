import * as React from 'react'
import { useContext, ReactElement } from 'react'

import './Header.css'

import SearchBar from '@/components/SearchBar/SearchBar'
import { AppContext } from '@/context/AppContext'
import Logo from './components/Logo'
import Communication from './components/Communication'

const Header = (): ReactElement => {
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
