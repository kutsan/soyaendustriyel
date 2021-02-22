import { useState, useEffect, ReactElement } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './NavbarMobile.css'

import { useAppContext } from '@/context/AppContext'
import { category, CategoryType } from '@/utils/data'

import Category from './components/Category'
import MenuButton from './components/MenuButton'

type NavbarMobileProps = RouteComponentProps

const NavbarMobile = ({ history }: NavbarMobileProps): ReactElement => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [menuOpen, setMenuOpen] = useAppContext()

  useEffect(() => {
    const unlisten = history.listen(() => {
      if (menuOpen) setMenuOpen(false)
    })

    return () => {
      unlisten()
    }
  }, [history, menuOpen, setMenuOpen])

  const isExpanded = (cat: CategoryType): boolean => expanded.includes(cat.id)

  const onClickToggle = (cat: CategoryType): void => {
    if (isExpanded(cat)) {
      setExpanded(expanded.filter((e) => e !== cat.id))
    } else {
      setExpanded([cat.id, ...expanded])
    }
  }

  return (
    <>
      <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
        {category.getTops().map((top: CategoryType) => (
          <Category
            key={top.id}
            modifier="top"
            expanded={isExpanded(top)}
            to={`/products/${top.id}`}
            onClickToggle={() => onClickToggle(top)}
            hasCategoriesUnder={category.hasSubs(top.id)}
            item={top}
          >
            {category.getSubs(top.id).map((sub: CategoryType) => (
              <Category
                key={sub.id}
                modifier="sub"
                expanded={isExpanded(sub)}
                to={`/products/${top.id}/${sub.id}`}
                onClickToggle={() => onClickToggle(sub)}
                hasCategoriesUnder={category.hasSubs(sub.id)}
                item={sub}
              >
                {category.getSubs(sub.id).map((lowermost: CategoryType) => (
                  <Category
                    key={lowermost.id}
                    modifier="lowermost"
                    to={`/products/${top.id}/${sub.id}/${lowermost.id}`}
                    hasCategoriesUnder={false}
                    item={lowermost}
                  />
                ))}
              </Category>
            ))}
          </Category>
        ))}
      </div>
    </>
  )
}

export default withRouter(NavbarMobile)
