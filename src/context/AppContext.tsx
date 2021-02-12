import { createContext, useState, ReactElement } from 'react'

type ContextType = {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

const AppContext = createContext<ContextType>({
  menuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMenuOpen: (value: boolean) => {},
})

type Props = {
  children: ReactElement
}

const AppProvider = ({ children }: Props): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
