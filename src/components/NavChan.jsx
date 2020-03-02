import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavChan.css'

import { items } from './navbar-data.json'

export default class Navbar extends Component {
	constructor(props) {
		super(props)

		this.items = items
	}

	render() {
		return (
			<nav>
				<ul className='navchan-menu'>
					{this.items.map((x, i) => (
						<li key={i} className='navchan-menu-item'>
							<Link to={x.to}>{x.name}</Link>
							<ul className='navchan-menu-item-submenu'>
								{x.items.map((y, j) => (
									<li
										key={`${i}-${j}`}
										className='navchan-menu-item-submenu-item'
									>
										<Link to={y.to}>{y.name}</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</nav>
		)
	}
}
