import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

import NotFoundIcon from '@/assets/icons/404.svg'

const NotFound = () => {
	return (
		<div className='notfound'>
			<NotFoundIcon className='notfound__icon' />

			<div className='notfound__info'>Aradığınız sayfayı bulamadık.</div>
			<div className='notfound__more-info'>
				Sayfa kaldırılmış veya değiştirilmiş olabilir.
			</div>

			<Link to='/'>
				<button className='notfound__go-home-page'>ANA SAYFAYA GİT</button>
			</Link>
		</div>
	)
}

export default NotFound
