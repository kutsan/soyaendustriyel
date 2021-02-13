import { useState, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './NavbarMobile.css'

import { CategoryType } from '@/types/index'
import { useAppContext } from '@/context/AppContext'
import data from '@/utils/data/index'
import Category from './components/Category'
import MenuButton from './components/MenuButton'

type NavbarMobileProps = RouteComponentProps

const NavbarMobile = ({ history }: NavbarMobileProps) => {
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

  const isExpanded = (category: CategoryType) =>
    expanded.indexOf(category.id) > -1

  const onClickToggle = (category: CategoryType) => {
    if (isExpanded(category)) {
      setExpanded(expanded.filter((e) => e !== category.id))
    } else {
      setExpanded([category.id, ...expanded])
    }
  }

  return (
    <>
      <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
        {data.category.getTops().map((top: CategoryType) => (
          <Category
            key={top.id}
            modifier="top"
            expanded={isExpanded(top)}
            to={`/products/${top.id}`}
            onClickToggle={() => onClickToggle(top)}
            hasCategoriesUnder={data.category.hasSubs(top.id)}
            item={top}
          >
            {data.category.getSubs(top.id).map((sub: CategoryType) => (
              <Category
                key={sub.id}
                modifier="sub"
                expanded={isExpanded(sub)}
                to={`/products/${top.id}/${sub.id}`}
                onClickToggle={() => onClickToggle(sub)}
                hasCategoriesUnder={data.category.hasSubs(sub.id)}
                item={sub}
              >
                {data.category
                  .getSubs(sub.id)
                  .map((lowermost: CategoryType) => (
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
