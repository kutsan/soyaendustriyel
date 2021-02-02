import { useContext } from 'react'

import { ViewportContext } from '@/context/ViewportContext'

const useViewport = (): { width: number } => {
  const { width } = useContext(ViewportContext)

  return { width }
}

export default useViewport
