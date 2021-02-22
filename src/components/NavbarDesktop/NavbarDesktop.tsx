import { useState, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './NavbarDesktop.css'

import { category, CategoryType } from '@/utils/data'

interface NavbarLinkProps {
  to: string
  name: string
  modifier: string
  onClick: () => void
}

const NavbarLink = ({
  to,
  name,
  modifier,
  onClick
}: NavbarLinkProps): ReactElement => (
  <Link
    to={to}
    className={`navbar-menu__item-link navbar-menu__item-link--${modifier}`}
    onClick={onClick}
  >
    {name}
  </Link>
)

const NavbarDesktop = (): ReactElement => {
  const [menu, setMenu] = useState('')

  const close = (): void => setMenu('')

  return (
    <div className="navbar-desktop-container">
      <div className="navbar-menu">
        {category.getTops().map((top: CategoryType) => (
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
              modifier="top"
              onClick={close}
            />

            <div className="navbar-menu__submenu">
              {category.getSubs(top.id).map((sub: CategoryType) => (
                <div
                  key={sub.id}
                  className="navbar-menu__item navbar-menu__item--sub"
                >
                  <NavbarLink
                    to={`/products/${top.id}/${sub.id}`}
                    name={sub.name}
                    modifier="sub"
                    onClick={close}
                  />

                  <div className="navbar-menu__lowermostmenu">
                    {category.getSubs(sub.id).map((lowermost: CategoryType) => (
                      <div
                        key={lowermost.id}
                        className="navbar-menu__item navbar-menu__item--lowermost"
                      >
                        <NavbarLink
                          to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
                          name={lowermost.name}
                          modifier="lowermost"
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
