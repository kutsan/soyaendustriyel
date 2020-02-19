import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// Styles
import './default.css'

export default class Layout extends Component {
	render() {
		return (
			<div className='default-layout'>
				<div className='default-layout-header'>
					<Header />
				</div>
				<div className='default-layout-content'>{this.props.children}</div>
				<div className='default-layout-footer'>
					<Footer />
				</div>
			</div>
		)
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
