// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './NavbarMobile.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/context/AppContext.js'. Did ... Remove this comment to see the full error message
import { AppContext } from '@/context/AppContext.js'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'
import Category from './components/Category.jsx'
import MenuButton from './components/MenuButton.jsx'



type Props = {
    history?: any;
};

const NavbarMobile = ({ history }: Props) => {
  const [expanded, setExpanded] = useState([])
  const { setMenuOpen, menuOpen } = useContext(AppContext)

  useEffect(() => {
    const unlisten = history.listen(() => {
      if (menuOpen) {
        setMenuOpen(false)
      }
    })

    return () => {
      unlisten()
    }
  }, [history, menuOpen, setMenuOpen])

  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message
  const isExpanded = (category: any) => expanded.indexOf(category.id) > -1

  const onClickToggle = (category: any) => {
    if (isExpanded(category)) {
      setExpanded(expanded.filter((e) => e !== category.id))
    } else {
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      setExpanded([category.id, ...expanded])
    }
  }

  return <>
    <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

    <div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
      {data.category.getTops().map((top: any) => <Category
        key={top.id}
        modifier='top'
        expanded={isExpanded(top)}
        to={`/products/${top.id}`}
        onClickToggle={() => onClickToggle(top)}
        hasCategoriesUnder={data.category.hasSubs(top.id)}
        item={top}
      >
        {data.category.getSubs(top.id).map((sub: any) => <Category
          key={sub.id}
          modifier='sub'
          expanded={isExpanded(sub)}
          to={`/products/${top.id}/${sub.id}`}
          onClickToggle={() => onClickToggle(sub)}
          hasCategoriesUnder={data.category.hasSubs(sub.id)}
          item={sub}
        >
          {data.category.getSubs(sub.id).map((lowermost: any) => <Category
            key={lowermost.id}
            modifier='lowermost'
            to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
            hasCategoriesUnder={false}
            item={lowermost}
          />)}
        </Category>)}
      </Category>)}
    </div>
  </>;
}

export default withRouter(NavbarMobile)
