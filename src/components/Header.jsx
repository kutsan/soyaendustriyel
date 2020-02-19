import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SvgLogo from '../assets/images/logo.svg'

import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<header className='header'>
				<div className='header-left'>
					<i className='logo' dangerouslySetInnerHTML={{ __html: SvgLogo }} />
				</div>
				<div className='header-center'>
					<div className='search-group'>
						<input
							type='text'
							className='search-input'
							placeholder='Ürün, kategori veya ürün kodu bilgisi giriniz'
						/>
						<button type='button' className='search-button'>
							ARA
						</button>
					</div>
				</div>
				<nav className='header-right'>
					<Link to='/'>Home </Link>
					<Link to='/about'>About </Link>
				</nav>
			</header>
		)
	}
}
