// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { NavLink } from 'react-router-dom'

import './CategoryHeader.css'

type Props = {
    modifier: string;
    hasCategoriesUnder: boolean;
    item: any;
    to: string;
    expanded?: boolean;
    onClickToggle?: (...args: any[]) => any;
};

const CategoryHeader = ({ modifier, item, to, onClickToggle, expanded, hasCategoriesUnder }: Props) => (
    <div
      className={`navbar-mobile__category-header navbar-mobile__category-header--${modifier}`}
    >
      <NavLink
        to={to}
        isActive={(_, location) => location.pathname === to}
        activeClassName='navbar-mobile__category-link--active'
        className={`navbar-mobile__category-link navbar-mobile__category-link--${modifier} ${
          expanded ? 'navbar-mobile__category-link--expanded' : ''
        }`}
      >
        {item.name}
      </NavLink>

      {hasCategoriesUnder && (
        <button
          onClick={onClickToggle}
          key={item.id}
          className={`navbar-mobile__category-toggle navbar-mobile__category-toggle--${modifier} ${
            expanded ? 'navbar-mobile__category-toggle--expanded' : ''
          }`}
        >
          <span />
        </button>
      )}
    </div>
  )

export default CategoryHeader
