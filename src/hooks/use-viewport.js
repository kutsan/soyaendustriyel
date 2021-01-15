import { useContext } from 'react'

import { ViewportContext } from '@/context/ViewportContext.js'

const useViewport = () => {
  const { width } = useContext(ViewportContext)

  return { width }
}

export default useViewport
