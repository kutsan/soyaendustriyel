import React from 'react'

import ImgPG from '../../../assets/brands/pg.png'
import ImgDogus from '../../../assets/brands/dogus-cay.png'
import ImgNestle from '../../../assets/brands/nestle.png'
import ImgCaykur from '../../../assets/brands/caykur.png'
import ImgVileda from '../../../assets/brands/vileda.png'
import ImgFocus from '../../../assets/brands/focus.png'

const Brands = () => {
	return (
		<div className='brands'>
			<img className='brands__item' src={ImgPG} alt='P&G' />
			<img className='brands__item' src={ImgDogus} alt='Doğuş Çay' />
			<img className='brands__item' src={ImgCaykur} alt='Çaykur' />
			<img className='brands__item' src={ImgNestle} alt='Nestle' />
			<img className='brands__item' src={ImgVileda} alt='Vileda' />
			<img className='brands__item' src={ImgFocus} alt='Focus' />
		</div>
	)
}

export default Brands