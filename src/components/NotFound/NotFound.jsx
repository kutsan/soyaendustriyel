import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

import NotFoundIcon from './NotFound.svg'

const NotFound = () => {
	return (
		<div className='notfound'>
			<i className='notfound__icon' dangerouslySetInnerHTML={{ __html: NotFoundIcon }} />
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
