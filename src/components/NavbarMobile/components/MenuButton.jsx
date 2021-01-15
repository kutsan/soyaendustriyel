import React from 'react'
import PropTypes from 'prop-types'

import './MenuButton.css'

const MenuButton = ({ onClick, open }) => {
  return (
    <button
      onClick={onClick}
      className={open ? 'menu-button menu-button--close' : 'menu-button'}
      aria-label='Menu toggle'
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

MenuButton.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
}

export default MenuButton
