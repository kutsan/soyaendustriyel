import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './NavbarDesktop.css'

import data from '@/utils/data/index.js'

const NavbarLink = ({ to, name, modifier, ...props }) => (
  <Link
    to={to}
    className={`navbar-menu__item-link ${
      modifier ? `navbar-menu__item-link--${modifier}` : ''
    }`}
    {...props}
  >
    {name}
  </Link>
)

NavbarLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  modifier: PropTypes.string
}

const NavbarDesktop = () => {
  const [menu, setMenu] = useState(null)

  const close = () => setMenu(null)

  return (
    <div className='navbar-desktop-container'>
      <div className='navbar-menu'>
        {data.category.getTops().map((top) => (
          <div
            key={top.id}
            onMouseEnter={() => setMenu(top.id)}
            onMouseLeave={close}
            className={`navbar-menu__item ${
              top.id === menu ? 'navbar-menu__item--open' : ''
            }`}
          >
            <NavbarLink
              to={`/products/${top.id}`}
              name={top.name}
              modifier='top'
              onClick={close}
            />

            <div className='navbar-menu__submenu'>
              {data.category.getSubs(top.id).map((sub) => (
                <div
                  key={sub.id}
                  className='navbar-menu__item navbar-menu__item--sub'
                >
                  <NavbarLink
                    to={`/products/${top.id}/${sub.id}`}
                    name={sub.name}
                    modifier='sub'
                    onClick={close}
                  />

                  <div className='navbar-menu__lowermostmenu'>
                    {data.category.getSubs(sub.id).map((lowermost) => (
                      <div
                        key={lowermost.id}
                        className='navbar-menu__item navbar-menu__item--lowermost'
                      >
                        <NavbarLink
                          to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
                          name={lowermost.name}
                          modifier='lowermost'
                          onClick={close}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavbarDesktop
