import { ReactElement } from 'react'

import './Header.css'

import { useAppContext } from '@/context/AppContext'

import SearchBar from '@/components/SearchBar/SearchBar'
import Logo from './components/Logo'
import Communication from './components/Communication'

const Header = (): ReactElement => {
  const [menuOpen] = useAppContext()

  return (
    <header>
      <Logo />
      <SearchBar hidden={menuOpen} />
      <Communication />
    </header>
  )
}

export default Header
