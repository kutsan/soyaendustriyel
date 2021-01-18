// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Copyright.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/leaf.svg'. Did ... Remove this comment to see the full error message
import LeafIcon from '@/assets/icons/leaf.svg'

const Copyright = () => (
    <div className='footer-copyright'>
      <div className='footer-copyright__year'>2020</div>
      <LeafIcon className='footer-copyright__leaf-icon' />
    </div>
  )

export default Copyright
