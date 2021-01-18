// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useState } from 'react'

const AppContext = React.createContext(null)

type Props = {
    children?: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
