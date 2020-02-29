import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
	constructor(props) {
		super(props)

		this.items = [
			{
				label: 'Home',
				to: '/'
			},
			{
				label: 'About',
				to: '/'
			},
			{
				label: 'Contact us',
				to: '/'
			},
			{
				label: 'About',
				to: '/'
			},
			{
				label: 'Home',
				to: '/'
			},
			{
				label: 'About',
				to: '/'
			},
			{
				label: 'Contact us',
				to: '/'
			}
		]
	}

	render() {
		return (
			<>
				<input id='toggle' type='checkbox' hidden />
				<nav>
					<ul>
						{this.items.map((x, i) => (
							<li key={i}>
								<Link to={x.to}>{x.label}</Link>
							</li>
						))}
					</ul>
				</nav>
				<label htmlFor='toggle' className='toggle'>
					<div>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</label>
			</>
		)
	}
}
