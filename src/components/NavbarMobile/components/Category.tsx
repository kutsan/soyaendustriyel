import { ReactElement, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import './Category.css'

import { CategoryType } from '@/utils/data'

interface CategoryProps {
  modifier: string
  item: CategoryType
  to: string
  hasCategoriesUnder: boolean
  expanded?: boolean
  onClickToggle?: () => void
  children?: ReactNode
}

const Category = ({
  modifier,
  item,
  to,
  onClickToggle,
  expanded = false,
  hasCategoriesUnder,
  children
}: CategoryProps): ReactElement => (
  <div
    className={`navbar-mobile__category navbar-mobile__category--${modifier} ${
      expanded ? 'navbar-mobile__category--expanded' : ''
    }`}
  >
    <div
      className={`navbar-mobile__category-header navbar-mobile__category-header--${modifier}`}
    >
      <NavLink
        to={to}
        isActive={(_, location) => location.pathname === to}
        activeClassName="navbar-mobile__category-link--active"
        className={`navbar-mobile__category-link navbar-mobile__category-link--${modifier} ${
          expanded ? 'navbar-mobile__category-link--expanded' : ''
        }`}
      >
        {item.name}
      </NavLink>

      {hasCategoriesUnder && (
        <button
          type="submit"
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

    {hasCategoriesUnder && expanded && (
      <div
        className={`navbar-mobile__category-children navbar-mobile__category-children--${modifier}`}
      >
        {children}
      </div>
    )}
  </div>
)

export default Category
