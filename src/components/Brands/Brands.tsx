// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Brands.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/pg.png'. Did y... Remove this comment to see the full error message
import ImgPG from '@/assets/brands/pg.png'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/dogus-cay.png'... Remove this comment to see the full error message
import ImgDogus from '@/assets/brands/dogus-cay.png'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/nestle.png'. D... Remove this comment to see the full error message
import ImgNestle from '@/assets/brands/nestle.png'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/caykur.png'. D... Remove this comment to see the full error message
import ImgCaykur from '@/assets/brands/caykur.png'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/vileda.png'. D... Remove this comment to see the full error message
import ImgVileda from '@/assets/brands/vileda.png'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/brands/focus.png'. Di... Remove this comment to see the full error message
import ImgFocus from '@/assets/brands/focus.png'

const Brands = () => (
    <div className='brands-container'>
      <div className='brands-header'>Öne Çıkan Markalar</div>
      <div className='brands'>
        <img className='brands__item' src={ImgPG} alt='P&G' />
        <img className='brands__item' src={ImgDogus} alt='Doğuş Çay' />
        <img className='brands__item' src={ImgCaykur} alt='Çaykur' />
        <img className='brands__item' src={ImgNestle} alt='Nestle' />
        <img className='brands__item' src={ImgVileda} alt='Vileda' />
        <img className='brands__item' src={ImgFocus} alt='Focus' />
      </div>
    </div>
  )

export default Brands
