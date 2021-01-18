// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useState, useEffect } from 'react'

const ViewportContext = React.createContext(null)

type Props = {
    children?: React.ReactNode;
};

const ViewportProvider = ({ children }: Props) => {
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
