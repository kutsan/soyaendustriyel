import { ReactElement } from 'react'

import './MenuButton.css'

interface MenuButtonProps {
  open: boolean
  onClick: () => void
}

const MenuButton = ({ open, onClick }: MenuButtonProps): ReactElement => (
  <button
    type="submit"
    onClick={onClick}
    className={open ? 'menu-button menu-button--close' : 'menu-button'}
    aria-label="Menu toggle"
  >
    <span />
    <span />
    <span />
  </button>
)

export default MenuButton
