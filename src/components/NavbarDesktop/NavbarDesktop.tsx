// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavbarDesktop.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

type NavbarLinkProps = {
    to?: string;
    name?: string;
    modifier?: string;
};

const NavbarLink = ({ to, name, modifier, ...props }: NavbarLinkProps) => (
  <Link
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
    to={to}
    className={`navbar-menu__item-link ${
      modifier ? `navbar-menu__item-link--${modifier}` : ''
    }`}
    {...props}
  >
    {name}
  </Link>
)

const NavbarDesktop = () => {
  const [menu, setMenu] = useState(null)

  const close = () => setMenu(null)

  return (
    <div className='navbar-desktop-container'>
      <div className='navbar-menu'>
        {data.category.getTops().map((top: any) => <div
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
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ to: string; name: any; modifier: string; o... Remove this comment to see the full error message
            onClick={close}
          />

          <div className='navbar-menu__submenu'>
            {data.category.getSubs(top.id).map((sub: any) => <div
              key={sub.id}
              className='navbar-menu__item navbar-menu__item--sub'
            >
              <NavbarLink
                to={`/products/${top.id}/${sub.id}`}
                name={sub.name}
                modifier='sub'
                // @ts-expect-error ts-migrate(2322) FIXME: Type '{ to: string; name: any; modifier: string; o... Remove this comment to see the full error message
                onClick={close}
              />

              <div className='navbar-menu__lowermostmenu'>
                {data.category.getSubs(sub.id).map((lowermost: any) => <div
                  key={lowermost.id}
                  className='navbar-menu__item navbar-menu__item--lowermost'
                >
                  <NavbarLink
                    to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
                    name={lowermost.name}
                    modifier='lowermost'
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ to: string; name: any; modifier: string; o... Remove this comment to see the full error message
                    onClick={close}
                  />
                </div>)}
              </div>
            </div>)}
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default NavbarDesktop
