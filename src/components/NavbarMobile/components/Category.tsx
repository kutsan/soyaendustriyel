// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Category.css'

import CategoryHeader from './CategoryHeader.jsx'

type Props = {
    modifier: string;
    item: any;
    to: string;
    hasCategoriesUnder: boolean;
    expanded?: boolean;
    onClickToggle?: (...args: any[]) => any;
    children?: React.ReactNode;
};

const Category = ({ modifier, item, to, onClickToggle, expanded, hasCategoriesUnder, children }: Props) => (
    <div
      className={`navbar-mobile__category navbar-mobile__category--${modifier} ${
        expanded ? 'navbar-mobile__category--expanded' : ''
      }`}
    >
      <CategoryHeader
        modifier={modifier}
        item={item}
        to={to}
        onClickToggle={onClickToggle}
        expanded={expanded}
        hasCategoriesUnder={hasCategoriesUnder}
      />

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
