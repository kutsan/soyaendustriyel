import * as React from 'react'
import { useState, useEffect, ReactElement } from 'react'

const ViewportContext = React.createContext<{
  width: number
}>({ width: 0 })

type Props = {
  children: ReactElement
}

const ViewportProvider = ({ children }: Props): ReactElement => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  )
}

export { ViewportContext, ViewportProvider }
