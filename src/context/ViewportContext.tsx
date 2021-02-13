import {
  createContext,
  useState,
  useEffect,
  ReactElement,
  ReactNode,
} from 'react'

export const ViewportContext = createContext<number>(0)

export const ViewportProvider = ({
  children,
}: {
  children: ReactNode
}): ReactElement => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={width}>
      {children}
    </ViewportContext.Provider>
  )
}
