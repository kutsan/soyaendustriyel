import { useContext } from 'react'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/context/ViewportContext.js'.... Remove this comment to see the full error message
import { ViewportContext } from '@/context/ViewportContext.js'

const useViewport = () => {
  const { width } = useContext(ViewportContext)

  return { width }
}

export default useViewport
