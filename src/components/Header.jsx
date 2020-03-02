import React, { Component } from 'react'

import SvgLogo from '../assets/images/logo.svg'

import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<header className='header'>
				<i className='logo' dangerouslySetInnerHTML={{ __html: SvgLogo }} />
				<h1 className='rotated-pill'>Web</h1>
				<h1 className='rotated-pill'>Katalog</h1>
				<div className='search-group'>
					<input
						type='text'
						className='search-input'
						placeholder='Ürün ismi, kategori veya ürün kodu ile ara...'
					/>
					<button type='button' className='search-button'>
						ARA
					</button>
				</div>
			</header>
		)
	}
}
