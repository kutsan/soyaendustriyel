// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/404.svg'. Did y... Remove this comment to see the full error message
import NotFoundIcon from '@/assets/icons/404.svg'

const NotFound = () => (
    <div className='notfound'>
      <NotFoundIcon className='notfound__icon' />

      <div className='notfound__info'>Aradığınız sayfayı bulamadık.</div>
      <div className='notfound__more-info'>
        Sayfa kaldırılmış veya değiştirilmiş olabilir.
      </div>

      <Link to='/' className='notfound__go-home-page'>
        ANA SAYFAYA GİT
      </Link>
    </div>
  )

export default NotFound
