import { ReactElement } from 'react'

import './Copyright.css'

import LeafIcon from '@/assets/icons/leaf.svg'

const Copyright = (): ReactElement => {
  const years = `2020 – ${new Date().getFullYear()}`

  return (
    <div className="footer-copyright">
      <div className="footer-copyright__year">{years}</div>
      <LeafIcon className="footer-copyright__leaf-icon" />
    </div>
  )
}

export default Copyright
