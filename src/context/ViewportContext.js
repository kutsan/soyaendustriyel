import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ViewportContext = React.createContext(null)

const ViewportProvider = ({ children }) => {
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

ViewportProvider.propTypes = {
  children: PropTypes.node
}

export { ViewportContext, ViewportProvider }
