import React from 'react'
import { Link } from 'react-router-dom'

import emitter from '../../utils/emitter'

// Styles
import './NavbarMobile.css'

// Data
import { categories } from '../../data/categories.json'
class NavbarMobile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isMenuOpen: false,
			mainMenuItems: categories.filter((x) => !x.parent),
			expandedCategories: []
		}

		this.toggleMenu = this.toggleMenu.bind(this)
		this.renderMenuItem = this.renderMenuItem.bind(this)
	}

	componentDidMount() {
		emitter.on('ui-toggle-menu', this.toggleMenu)
	}

	componentWillUnmount() {
		emitter.off('ui-toggle-menu', this.toggleMenu)
	}

	toggleMenu() {
		this.setState({
			isMenuOpen: !this.state.isMenuOpen
		})
	}

	getSubCategories(category) {
		return categories.filter((x) => x.parent === category.id)
	}

	toggleExpand(category) {
		console.log(category)
		if (this.isExpanded(category)) {
			this.setState({
				expandedCategories: this.state.expandedCategories.filter((x) => x !== category.id)
			})
			return
		}

		this.setState({
			expandedCategories: [category.id, ...this.state.expandedCategories]
		})
	}

	isExpanded(category) {
		return this.state.expandedCategories.indexOf(category.id) > -1
	}

	renderMenuItem(item, path) {
		const isExpanded = this.isExpanded(item)

		const subCategories = this.getSubCategories(item)
		const to = path ? `/products/${path}/${item.id}` : `/products/${item.id}`
		const childPath = path ? `${path}/${item.id}` : item.id

		const expandedSubs = subCategories.filter(
			(x) => this.state.expandedCategories.indexOf(x.id) > -1
		)
		const subCountOfExpandedSubs = expandedSubs.reduce((a, b) => {
			return a + this.getSubCategories(b).length
		}, 0)

		const itemsMaxHeight = 52 * (subCategories.length + subCountOfExpandedSubs)

		console.log(item.id, itemsMaxHeight, expandedSubs)

		return (
			<div
				key={item.id}
				className={
					isExpanded
						? 'navbar-mobile__menu-item navbar-mobile__menu-item--expanded'
						: 'navbar-mobile__menu-item'
				}
			>
				<div className='navbar-mobile__menu-item-head'>
					<Link
						to={to}
						onClick={() => emitter.emit('ui-toggle-menu')}
						className={
							isExpanded
								? 'navbar-mobile__menu-item-link navbar-mobile__menu-item-link--expanded'
								: 'navbar-mobile__menu-item-link'
						}
					>
						{item.name}
					</Link>

					{!!subCategories.length && (
						<button
							onClick={() => this.toggleExpand(item)}
							key={item.id}
							className={
								isExpanded
									? 'navbar-mobile__menu-item-button navbar-mobile__menu-item-button--expanded'
									: 'navbar-mobile__menu-item-button'
							}
						>
							<span />
						</button>
					)}
				</div>

				<div
					className='navbar-mobile__menu-items'
					style={isExpanded ? { maxHeight: itemsMaxHeight } : {}}
				>
					{subCategories.map((e) => this.renderMenuItem(e, childPath))}
				</div>
			</div>
		)
	}

	render() {
		const { isMenuOpen, mainMenuItems } = this.state
		const navbarClass = `navbar-mobile ${isMenuOpen ? 'navbar-mobile--open' : ''}`

		return <div className={navbarClass}>{mainMenuItems.map((e) => this.renderMenuItem(e))}</div>
	}
}

export default NavbarMobile
