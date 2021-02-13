import { ReactElement, ReactNode } from 'react'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop'
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile'

import useViewport from '@/hooks/use-viewport'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  const { width } = useViewport()
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
