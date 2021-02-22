import { ReactElement, ReactNode, useContext } from 'react'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile'

import { ViewportContext } from '@/context/ViewportContext'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  const width = useContext(ViewportContext)
  const breakpoint = 768

  return (
    <>
      <Header />
      <nav>{width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}</nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
