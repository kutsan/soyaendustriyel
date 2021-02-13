import {
  createContext,
  useState,
  ReactElement,
  ReactNode,
  useContext,
} from 'react'

type AppContextType = ReturnType<typeof useMenuOpen>

const useMenuOpen = () => useState(false)

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({
  children,
}: {
  children: ReactNode
}): ReactElement => (
  <AppContext.Provider value={useMenuOpen()}>{children}</AppContext.Provider>
)

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)

  if (context === null) {
    throw new Error('Context should be used within a provider')
  }

  return context
}
