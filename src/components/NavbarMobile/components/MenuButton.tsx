// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './MenuButton.css'

type Props = {
    onClick?: (...args: any[]) => any;
    open?: boolean;
};

const MenuButton = ({ onClick, open }: Props) => (
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

export default MenuButton
